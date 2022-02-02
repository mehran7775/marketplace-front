<template>
  <div class="row">
    <div class="container-fluid">
      <div class="row mt-1" id="my-categories">
       <div id="categories" class="w-100 d-flex flex-start py-2 bg-white">
          <div class="pr-4 d-md-none">
            <div id="menu-categories" class="d-flex align-items-center position-relative ">
              <div v-show="categories_products.length > 0" class="position-absolute bg-success rounded-circle" id="check-selected-category"></div>
                <fa class="cursor_pointer" id="btn-categories" icon="bars" @click="show_sidebar_categories()"></fa>
                <h2 class="font-weight-bold h5 mr-3">دسته بندی ها</h2>
            </div>
          </div>
          <div class="d-none d-md-block w-100">
            <div class="d-flex py-2 px-3">
              <div v-for="category in categories" :key="category.id" class="mr-3 pr-2" >
                <MoleculesXmainCategories
                :node="category"
                />
              </div>
            </div>  
          </div>
       </div>
      </div>
    </div>
    <div class="container-xl">
      <div class="row">
        <div class="w-100 body-hv-fit">
          <div class="position-absolute bg-white border-left border-top py-3" id="sidebar-categories">
           <div>
              <MoleculesXmainCategories v-for="category in categories" :key="category.id"
                :node="category"
              />
           </div>
          </div>
          <MoleculesXlables class="mt-md-5 pt-md-4" v-if="products" :products="products">
          </MoleculesXlables>
          <p class="text-center p-5" v-else>محصولی وجود ندارد</p>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import { tr } from "@/services/lang";
import { productService } from "@/services/apiServices"
import { mapGetters } from 'vuex'
import { categoryService } from '@/services/apiServices'

export default {
  layout: "index",
  data(){
    return{
      products: [],
      show_categories: false,
      categories:[]
    }
  },
  watch:{
    'categories_products'(value){
      this.get_pdoducts(value)
    }
  },
  head() {
    return {
      title: `فروشگاه ${this.detail.fa_name}`,
    };
  },
  computed: {
    lang() {
      return tr();
    },
    ...mapGetters([
      'detail', 'categories_products'
    ])

  },
  async asyncData({ route, error }) {
    try {
      const { data } = await productService.getProducts(
        {
          slug: route.params.store_slug,
          categories: []
        }
      )
      return {
        products: data.data.data,
      };
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: e.response.data.message,
      });
    }
  },
  async created(){
    if(process.client){
       try{
        const { data }= await categoryService.get_shop_categories(this.detail.id)
        this.categories= data.data
        this.set_mainCategories()
       }catch(e){
         console.log(e)
       }
    }
  },
  mounted(){
    let self =this
    window.addEventListener('click', function(event) {
        const sidebar_categories = document.getElementById("sidebar-categories")
        if (!document.getElementById('sidebar-categories').contains(event.target)
          && !document.getElementById('btn-categories').contains(event.target)
        ) {
          self.show_categories = !self.show_categories
          sidebar_categories.style.overflow= "hidden"
          sidebar_categories.style.width= 0
          document.body.style.overflow= 'visible'
          setTimeout(()=>{
            sidebar_categories.style.height= 0
          },300)
        }
      });
   
  },
  methods:{
    show_sidebar_categories(){
      const sidebar_categories = document.getElementById("sidebar-categories")
      this.show_categories = !this.show_categories
      if(this.show_categories){
        sidebar_categories.style.height= "calc(100vh - 230px)"
        sidebar_categories.style.width= "82%"
        document.body.style.overflow= 'hidden'
      }else{
        sidebar_categories.style.overflow= "hidden"
        sidebar_categories.style.width= 0
        document.body.style.overflow= 'visible'
        setTimeout(()=>{
          sidebar_categories.style.height= 0
        },300)
      }
    },
    async get_pdoducts(value){
        const categories = []
        value.forEach((element, index) => {
          categories[index] = element
        });
        try{
            const { data } = await productService.getProducts(
              {
                slug: this.$route.params.store_slug,
                categories: categories
              }  
            )
            this.products= data.data.data
        }catch(e){
          console.log(e)
        }
      
    },
    set_mainCategories() {
      const main_categories = []
      this.categories.forEach((element, index) => {
          main_categories[index]= element.id
      })
      this.$store.commit('setToState',{
        name: 'mainCategories_products',
        data: main_categories
      })
    }

  },

};
</script>

<style scoped lang="scss">
  #menu-categories{
    svg, h2 {color: darken($svg_color, 100%);}
    svg{
      font-size: 2.5rem;
    }
    
  }
.container-xl{
  @include xlarge{
    max-width: 1400px;
  }
  #sidebar-categories{
    width: 0;
    transition: width .3s;
    box-shadow: 0 10px 5px 0  darken($svg_color, 100%);
    @include medium{
      display: none;
    }
    > div{
      height: 100%;
      overflow: auto;
    }
  }
}
#my-categories{
  #categories{
    overflow-x: auto;
    box-shadow: 0 .4px .4px 0  darken($svg_color, 50%);
    @include medium{
      position: absolute;
      left: 0;
      z-index: 999;

    }
    #check-selected-category{
      width: 10px;
      height: 10px;
      right: 18px;
      bottom: 18px;
    }
  }

  ::-webkit-scrollbar {
    height: 2px!important;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 5px 0 lihten($svg_color, 50%);
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    height: 3px!important;
    background-color: lighten($svg_color, 50%); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: lighten($svg_color, 10%); 
  }
}


</style>
