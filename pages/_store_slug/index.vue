<template>
  <div class="row">
    <div class="container-fluid">
      <div class="row bg-white mt-1">
       <div id="categories" class="d-flex flex-start py-2">
          <div class="pr-4 d-md-none">
            <div id="menu-categories" class="d-flex align-items-center">
              <fa icon="bars" @click="show_sidebar_categories()"></fa>
              <h2 class="font-weight-bold h5 mr-3">دسته بندی ها</h2>
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
          <MoleculesXlables v-if="products" :products="products">
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
      categories:[
        {
            id: "eroxr",
            title: "Galaxy",
            parent_id: null,
            status: 1,
            children_recursive: [
                {
                    id: "0j18r",
                    title: "Galaxy1",
                    parent_id: "eroxr",
                    status: 1,
                    children_recursive: []
                },
                {
                    id: "3rdqp",
                    title: "Galaxy1",
                    parent_id: "eroxr",
                    status: 1,
                    children_recursive: []
                }
            ]
        }
      ]
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
      'detail','categories_products'
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
       }catch(e){
         console.log(e)
       }
    }
  },
  methods:{
    show_sidebar_categories(){
      const sidebar_categories = document.getElementById("sidebar-categories")
      this.show_categories = !this.show_categories
      if(this.show_categories){
        sidebar_categories.style.width= "82%"
        sidebar_categories.style.height= "calc(100vh - 150px)"
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
      
    }
  },

};
</script>

<style scoped lang="scss">
  #menu-categories{
    svg, h2 {color: darken($svg_color, 50%);}
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
</style>
