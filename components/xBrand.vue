<template>
  <nuxt-link to="/" id="brand">
    <fa icon="home" :title="lang.svg.home"></fa>
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
#brand {
  width: max-content;
  height: max-content;
  padding: 10px 15px;
  background-color: whitesmoke;
  border-radius: 100%;
  border: 3px solid $success;

  svg {
    font-size: 1.5rem;
    color: $svg_color;
    cursor: pointer;

  }
}
</style>
