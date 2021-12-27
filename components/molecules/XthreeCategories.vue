<template>
  <div :style="nodeMargin">
    <b-alert variant="light" show class="d-flex justify-content-between mb-1 border border-whitesmoke">
      {{ node.title }}
     <div class="operation">
        <fa icon="edit" class="edit cursor_pointer"
          @click="editItem()"
        ></fa>
        <fa icon="trash" class="trash cursor_pointer"
          @click="removeItem()"
        ></fa>
     </div>
    </b-alert>
    <div v-if="node.children_recursive && node.children_recursive.length> 0">
      <TreeNode
        v-for="category in node.children_recursive"
        :key="category.id"
        :node="category"
        :spacing="spacing + 10"
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
    }
  },
  computed: {
    nodeMargin() {
      return {
        'margin-right': `${this.spacing}px`
      }
    },
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