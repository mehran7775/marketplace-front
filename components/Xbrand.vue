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
  width: 60px;
  height: 60px;
  padding: 2px;
  background-color: $white;
  border-radius: 100%;
  border: 2.9px solid $success;
  img{
   width: 100%;
   height: 100%;
   border-radius: 100%;
  }
}
</style>
