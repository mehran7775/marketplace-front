<template>
    <div class="node my-4" :style="nodeMargin">
       <div class="row">
           <div class="col-10 m-auto">
               <div class="row">
                    <div class="w-100 d-flex align-items-center">
                        <input type="checkbox" class="checkout-button" checked :value="node.id" 
                        name="categories_products[]" v-model="categories">       
                        <div class="mr-md-1 d-flex align-items-center justify-content-between justify-content-md-start
                         cursor_pointer node-toggle" @click="toggleCollapse(node.id)" :id="`toggleCollapse-${node.id}`"
                        >
                            <span class="mr-1 title" v-text="node.title"></span>  
                            <fa v-if="!visible && node.children_recursive.length > 0" icon="plus" class="fa-lg mr-1">
                            </fa>
                            <fa v-else-if="visible && node.children_recursive.length > 0" icon="minus" class="fa-lg mr-1">
                            </fa>
                        </div>
                    </div>
               </div>
           </div>
       </div>
        <b-collapse :id="`collapse-${node.id}`" :accordion="`${child ? 'my-accordion': null}`" role="tabpanel" class="sub-categories">
            <TreeNode
                v-for="category in node.children_recursive"
                :key="category.id"
                :node="category"
                :spacing="spacing + 15"
                child
            />
        </b-collapse>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:'TreeNode',
        props:{
            node:{
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
            nodeMargin() {
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
        mounted(){
            if(!this.child){
                window.addEventListener('click', function(event) {
                    this.mainCategories_pruducts.forEach(element => {
                        if (
                            !document.getElementById(`toggleCollapse-${this.node.id}`).contains(event.target)
                            && document.getElementById(`toggleCollapse-${element}`).contains(event.target)
                        ) {
                            this.visible= false
                            return
                        }    
                    });
                }.bind(this))
            }
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
.node{
    @include medium{
        width: 160px;
    }
    .node-toggle{
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