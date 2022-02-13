<template>
    <div class="category" :style="categoryMargin">
       <div class="row">
           <div class="col-10 m-auto">
               <div class="row">
                    <div class="w-100 d-flex align-items-center">
                        <input type="checkbox" class="checkout-button" checked :value="category.id" 
                        name="categories_products[]" v-model="categories">       
                        <div class="mr-md-1 d-flex align-items-center justify-content-between justify-content-md-start
                         cursor_pointer category-toggle" @click="toggleCollapse(category.id)" 
                         :id="`toggleCollapse-${category.id}`"
                         >
                            <span class="mr-1 title" v-text="category.title"></span>  
                            <fa v-if="!visible && category.children_recursive.length > 0" icon="plus" class="fa-lg mr-1"></fa>
                            <fa v-else-if="visible && category.children_recursive.length > 0" icon="minus" class="fa-lg mr-1"></fa>
                        </div>
                    </div>
               </div>
           </div>
       </div>
        <b-collapse v-model="visible" :id="`collapse-${category.id}`" :accordion="`${child ? 'my-accordion': null}`" role="tabpanel" class="sub-categories">
            <Categories
                v-for="category in category.children_recursive"
                :key="category.id"
                :category="category"
                :spacing="spacing + 15"
                child
            />
        </b-collapse>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:'Categories',
        props:{
            category:{
                type: Object,
                require: true
            },
            spacing:{
                type: Number,
                default: 0,
            },
            child:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                show_subCategories: false,
                visible: false
            }
        },
        computed:{
            categoryMargin() {
                return {
                    'margin-right': `${this.spacing}px`
                }
            },
            categories: {
                get () { return this.$store.state.categories_products },
                set (value) {
                    this.$store.commit('setToState', {
                        name: 'categories_products',
                        data: value
                    }
                )} 
            },
            ...mapGetters([
                'mainCategories_pruducts'
            ])
        },
        methods:{
            toggleCollapse(id){
                this.visible=!this.visible
                this.$root.$emit(`bv::toggle::collapse`, `collapse-${id}`)                            
            }
        }
    }
</script>

<style lang="scss" scoped>
.category{
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    @include medium{
        width: 160px;
    }
    .category-toggle{
        width: calc(100% - 17px);
        @include medium{
           width: max-content;     
        }
    }
    .checkout-button{
        width: 17px;
        height: 17px;
    }
    .title{
        max-width: 130px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .sub-categories{
        min-width: 200px;
        @include medium {
            width: 100%;
            z-index: 999;
        }
    }
}

</style>