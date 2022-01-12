<template>
  <div :style="nodeMargin">
    <div v-show="type == 'showCategories'">
      <b-alert variant="light" show class="d-flex justify-content-between mb-1 border border-whitesmoke">
      {{ node.title }}
     <div class="operation">
       <span v-b-tooltip.hover title="ویرایش">
           <fa icon="edit" class="edit cursor_pointer"
          @click="editItem()"
        ></fa>
       </span>
        <span v-b-tooltip.hover title="ویرایش">
          <fa icon="trash" class="trash cursor_pointer"
            @click="removeItem()"
          ></fa>
        </span>
     </div>
      </b-alert>
    </div>
    <div v-show="type == 'createProducts'">
        <b-alert variant="light" show class="d-flex justify-content-start align-items-center py-1 mr-0 my-0">
          <input type="checkbox" checked :value="node.id" name="categories[]" v-model="categories">
          <span class="mr-1" v-text="node.title"></span>
        </b-alert>
    </div>
    <div v-if="node.children_recursive && node.children_recursive.length> 0">
      <TreeNode
        v-for="category in node.children_recursive"
        :key="category.id"
        :node="category"
        :spacing="spacing + 10"
        :type="type"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      required: true
    },
    spacing: {
      type: Number,
      default: 0
    },
    type:{
      type:String
    },
  },
  computed: {
    nodeMargin() {
      return {
        'margin-right': `${this.spacing}px`
      }
    },
    categories: {
       get () { return this.$store.state.selectedCategories },
       set (value) {
         this.$store.commit('setToState', {
          name: 'selectedCategories',
          data: value
       })} 
    }
  },
  methods:{
    editItem(){
       this.$nuxt.$emit('actionCategory',{
        type:'edit',
        item:this.node
      })
    },
    removeItem(){
      this.$nuxt.$emit('actionCategory',{
        type:'delete',
        item:this.node
      })
    }
  }
}
</script>


<style scoped lang="scss">
.operation{
  .trash:hover{
    transition: color 0.2s;
    color: rgb(255, 96, 96)!important;
  }
  .edit:hover{
    transition: color 0.2s;
    color: #17a2b8!important;
  }
  
}
</style>