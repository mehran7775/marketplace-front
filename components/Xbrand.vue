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
  width: 50px;
  height: 50px;
  padding: 2px;
  // background-color: whitesmoke;
  border-radius: 100%;
  border: 2px solid $border_success;
  img{
   width: 100%;
   height: 100%;
   border-radius: 100%;
  }
}
</style>
