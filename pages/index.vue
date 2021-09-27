<template>
  <div id="body" class="w-100">
    <div id="lables">
      <div class="lables mb-4">
        <LazyMoleculesXlables v-if="true" :products="'products'">
        </LazyMoleculesXlables>
        <p v-else>محصولی وجود ندارد</p>
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from "@/services/lang";
export default {
  layout: "index",
  head() {
    return {
      title: "صفحه اصلی",
    };
  },
  computed: {
    lang() {
      return tr();
    },
  },
  mounted() {
    // localStorage.setItem('cartItems',JSON.stringify([
    //   {
    //     id:1,
    //     name:'کفش',
    //     price:380000,
    //     count:1
    //   },
    //   {
    //     id:2,
    //     name:'تیشرت',
    //     price:200000,
    //     count:2
    //   },
    //   {
    //     id:3,
    //     name:'شلوار',
    //     price:250000,
    //     count:1
    //   },
    //   {
    //     id:4,
    //     name:'کلاه',
    //     price:250000,
    //     count:3
    //   },
    // ]))
  },
  //   async asyncData({ error,$axios }) {
  //     try {
  //       const { data } = await $axios.$get('/products')
  //       if (data.length > 0) {
  //         return {
  //           products: data,
  //         };
  //       }else{
  //           return{
  //               products:null
  //           }
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       if (e.response) {
  //         error({
  //           statusCode: e.response.status,
  //           message: e.response.message,
  //         });
  //       } else {
  //         error({
  //           statusCode: "",
  //           message: "خطا در ارتباط",
  //         });
  //       }
  //     }
  //   },
};
</script>

<style scoped lang="scss">
#lables {
  padding: 0;
  @include mx_medium {
    padding: 0.05rem;
  }
}
</style>
