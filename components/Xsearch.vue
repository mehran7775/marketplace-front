<template>
  <div class="position-relative d-flex justify-content-center" @focusin="boxSearch=true">
    <div :class="['mx-auto search d-flex justify-content-center align-items-center',
    searchProducts && searchProducts ? 'rounded pt-2' : null
    ]">
    <input type="search" v-model="search" placeholder="جستجو محصول ..." id="boxSearch"/>
    <fa icon="search" :title="lang.svg.search" class="fa-lg ml-2 mr-3"></fa>
    
    </div>
    <div v-if="boxSearch && searchProducts" id="content-search" @blure="boxSearch=false"
      class="position-absolute rounded" dir="ltr">
      <ul v-if="searchProducts.length > 0 " class="mt-4 p-0 m-0 list-unstyled">
        <li v-for="product in searchProducts" v-bind:key="product.id">
          <nuxt-link dir="rtl" class="d-block py-3 pr-3 bg-white d-flex align-items-center" :to="`/${$route.params.store_slug}/${product.id}`">
            <img width="24" height="24" :src="product.thumbnail" :alt="product.title">
            <span v-text="product.title" class="mr-1"></span>
          </nuxt-link>
        </li>
      </ul>
      <div v-else class="w-100 text-center pt-3">
        <p >موردی پیدا نشد</p>
      </div>
    </div>
  </div>
</template>


<script>
import { tr } from "@/services/lang";
import { mapActions ,mapGetters } from "vuex";

export default {
    data() {
        return {
            search: "",
            searchable: {},
            is_search_done: false,
            boxSearch:false,
            routeName:null
        };
    },
    created(){
      this.routeName=this.$route.name
    },
    watch: {
        search(value) {
          if (value === '') {
            this.$store.commit("product/deleteFromState","searchProducts")
            return;
          }
          this.searchable = {store_slug: this.$route.params.store_slug, search: value};
            setTimeout(()=>{
              if(!this.is_search_done){
                this.doSearch()
              }
            },1200)
        },
        routeName() {
          this.$store.commit('product/deleteFromState',"searchProducts")  
        }
    },
    methods: {
        ...mapActions("product", ["searchingProducts"]),
        doSearch(){
            this.searchingProducts(this.searchable);
            this.is_search_done = true;

            setTimeout(() => {
              this.is_search_done = false;
            }, 1200);
        },
        
    },
    computed: {
        lang() {
            return tr();
        },
        ...mapGetters("product",[
          "searchProducts"
        ]),
    },
    mounted(){
      let vm=this
      window.addEventListener('click', function(event) {
        if(document.getElementById('boxSearch')){
          if (!document.getElementById('boxSearch').contains(event.target)) {
            vm.$store.commit('product/deleteFromState', 'searchProducts') 
            vm.boxSearch=false
          }
        }
      });
    }
};
</script>

<style lang="scss" scoped>
.search {
  width: max-content;
  background-color: $silver;
  border-radius: 20px;
  padding: 8px 10px 8px;
  box-shadow: 0 0 3px 0 $silver;
  input {
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: unset;
    padding: 0 15px 0 0;
    min-width: 280px;
    @include mx_medium {
      min-width: 200px;
    }
  }
  svg {
    color: $svg_color;
    transition: color 0.2s;
  }
  svg:hover {
    color: black;
    cursor: pointer;
  }

  ul{
    height: 200px;
    background-color: aqua;
  }
}
#content-search{
  width: max-content;
  background-color: $silver;
  padding: 8px 10px 8px;
  box-shadow: 0 0 3px 0 $silver;
  max-height: 380px;
  margin: auto;
  top: 25px;
  z-index: 999;
  overflow-x: hidden;
  overflow-y: auto;
   ul,div{
    min-width: 314px;
    @include mx_medium {
    min-width: 232px;
    }
    li a{
      box-shadow:  0 0 3px 0 $border;
    }
    li a:hover{
      box-shadow:  0 0 10px 0 $border;
    }
   }

   
  
}
::-webkit-scrollbar {
  // width: 3px!important;
  display: none;
}
</style>
