<template>
    <div class="node my-4" :style="nodeMargin">
       <div class="row ">
           <div class="col-10 m-auto">
               <div class="row">
                    <div class="w-100 d-flex justify-content-between justify-content-md-start">
                        <div class="d-flex align-items-center">
                            <input type="checkbox" class="checkout-button" checked :value="node.id" name="categories_products[]" v-model="categories">
                            <span class="mr-1 title" v-text="node.title"></span>  
                        </div>
                        <div class="mr-md-1" >
                            <fa v-if="!visible && node.children_recursive.length > 0" icon="plus" class="fa-lg cursor_pointer" @click="toggleCollapse(node.id)"></fa>
                            <fa v-else-if="visible" icon="minus" class="fa-lg cursor_pointer" @click="toggleCollapse(node.id)"></fa>
                        </div>
                    </div>
               </div>
           </div>
       </div>
        <b-collapse :id="`collapse-${node.id}`" class="sub-categories">
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
        methods:{
            toggleCollapse(id){
            // for(let i= 0; i< this.mainCategories_pruducts.length; i++){
            //     document.getElementById(`collapse-${this.mainCategories_pruducts[i]}`).classList.remove('show')
            //     document.getElementById(`collapse-${this.mainCategories_pruducts[i]}`).style.display= "none"
            //     console.log(document.getElementById(`collapse-${this.mainCategories_pruducts[i]}`))
            // }
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