<template>
  <b-modal
    dir="rtl"
    class="text-right"
    centered
    id="modal-prevent-closing2"
    ref="modal"
    :title="title"
  >
    <slot name="content-modal"> </slot>
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
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
