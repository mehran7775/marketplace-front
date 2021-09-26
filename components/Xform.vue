<template>
  <form name="form" class="w-100" @submit.prevent="sub_form">
    <fieldset>
      <legend class="" v-text="legend"></legend>
      <slot name="content"></slot>
    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
    legend: {
      type: String,
      default: "",
    },
    sub_form: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  legend {
    font-size: 1rem;
  }
}
</style>
