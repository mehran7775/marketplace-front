<template>
  <nuxt-link to="/" class="brand">
    <fa icon="home" title="فروشگاه من"></fa>
  </nuxt-link>
</template>

<script>
import { tr } from "@/services/lang";
export default {
  computed: {
    lang() {
      return tr();
    },
  },
};
</script>

<style lang="scss" scoped>
.brand {
  width: max-content;
  height: max-content;
  padding: 10px 15px;
  background-color: whitesmoke;
  border-radius: 100%;
  border: 2px solid $border_success;

  svg {
    font-size: 1.5rem;
    color: $svg_color;
    cursor: pointer;

  }
}
</style>
