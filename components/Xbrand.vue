<template>
  <button @click="showStory" class="brand d-flex align-items-center justify-content-center">
    <img :src="logo ? logo : '/images/logo.svg'" :alt="`لوگوی فروشگاه ${alt}`">
  </button>
</template>

<script>
import { tr } from "@/services/lang";
export default {
  props:{
    logo:{
      type:String
    },
    alt:{
      type:String
    },
    showStory:{
      type:Function,
      default: () => {}
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
  padding-top: 3.1px;
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
