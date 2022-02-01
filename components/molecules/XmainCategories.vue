<template>
    <div class="node my-4" :style="nodeMargin">
       <div class="row">
           <div class="col-10 m-auto">
               <div class="row">
                    <div class="w-100 d-flex align-items-center justify-content-between px-2">
                        <div class="d-flex align-items-center">
                            <input type="checkbox" class="checkout-button" checked :value="node.id" name="categories_products[]" v-model="categories">
                            <span v-b-toggle="`collapse-${node.id}`" class="mr-1 title" v-text="node.title"></span>  
                        </div>
                        <div class=" text-left" v-b-toggle="`collapse-${node.id}`">
                            <fa v-if="!visible" icon="plus" class="fa-lg cursor_pointer" ></fa>
                            <fa v-else icon="minus" class="fa-lg cursor_pointer" ></fa>
                        </div>
                    </div>
               </div>
           </div>
       </div>
        <b-collapse  v-model="visible" :id="`collapse-${node.id}`">
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
                    // console.log(value)
                    this.$store.commit('setToState', {
                    name: 'categories_products',
                    data: value
                })} 
            }
        },
        methods:{
            // this.$root.$emit('bv::toggle::collapse', 'my-collapse-id')
        }
    }
</script>

<style lang="scss" scoped>
.node{
    .checkout-button{
        width: 17px;
        height: 17px;
    }
    .title{
        width: max-content;
    }

}

</style>