<template>
 <div class="position-relative">
    <div :class="['mx-auto search d-flex justify-content-center align-items-center',
    searchProducts && searchProducts.length > 0 ? 'rounded-0 is-products-searching pt-2' : null
    ]">
    <input type="search" v-model="search" placeholder="جستجو محصول ..." />
    <fa icon="search" :title="lang.svg.search" class="fa-lg ml-2 mr-3"></fa>
   
  </div>
  <div v-if="searchProducts && searchProducts.length > 0" class="position-absulote">
    <ul class="bg-danger">
      <li></li>
    </ul>
  </div>
 </div>
</template>


<script>
import { tr } from "@/services/lang";
import { mapActions ,mapGetters,mapMutations } from "vuex";

export default {
    data() {
        return {
            search: "",
            searchable: {},
            is_search_done: false,
            timeOut:null
        };
    },
    watch: {
        search(value) {
          if (value === '') {
            this.$store.commit("product/deleteProducts")

            return;
          }
          this.searchable = {store_slug: this.$route.params.store_slug, search: value};
            setTimeout(()=>{
              if(!this.is_search_done){
                this.doSearch()
              }
            },1500)
        }
    },
    methods: {
        ...mapActions("product", ["searchingProducts"]),
        doSearch(){
            this.searchingProducts(this.searchable);
            this.is_search_done = true;

            setTimeout(() => {
              this.is_search_done = false;
            }, 1500);
        }
        
    },
    computed: {
        lang() {
            return tr();
        },
        ...mapGetters("product",[
          "searchProducts"
        ])
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

.is-products-searching{

}
</style>
