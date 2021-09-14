<template>
  <div :class="`d-flex justify-content-${justify} align-items-${align}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    justify: {
      type: String,
      default: "center",
    },
    align: {
      type: String,
      default: "center",
    },
  },
};
</script>
