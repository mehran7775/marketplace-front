<template>
  <nuxt-link :to="`/${$route.params.store_slug}`" class="brand">
    <img :src="logo ? logo : '/images/logo.svg'" alt="تصویر لوگو">
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
  padding: 15px 15px;
  background-color: whitesmoke;
  border-radius: 100%;
  border: 2px solid $border_success;
  img{
    max-width: 48px;
    min-width: 32px;
    min-height: 32px;
    max-height: 42px;
  }
}
</style>
