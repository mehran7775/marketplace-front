<template>
  <b-modal
    dir="rtl"
    class="text-right"
    centered
    :id="id"
    ref="modal"
    :title="title"
    :hide-footer="hideFooter"
  >
    <slot name="content-modal"> </slot>
    <slot slot="modal-footer" name="footer">

    </slot>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
    };
  },
  props:{
    title:{
      type:String
    },
    id:{
      type:String,
      required:true
    },
    hideFooter:{
      type:Boolean,
      default:false,
    }
  },
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>
</style>
