<template>
  <nuxt-link :to="`/${$route.params.store_slug}`" class="brand">
    <img :src="logo ? logo : '/icon.png'" width="24" height="24" alt="تصویر لوگو">
  </nuxt-link>
</template>

<script>
import { tr } from "@/services/lang";
export default {
  props:{
    logo:{
      type:String
    }
  },
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
