<template>
  <b-modal
    dir="rtl"
    class="text-right"
    centered
    id="modal-prevent-closing"
    ref="modal"
    title="انتخاب روش پرداخت"
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
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
