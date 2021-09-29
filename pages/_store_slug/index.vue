<template>
  <div id="body" class="w-100">
    {{ $route.params.user_id }}
    <div id="lables">
      <div class="lables mb-4">
        <!-- <LazyMoleculesXlables v-if="true" :products="'products'">
        </LazyMoleculesXlables>
        <p v-else>محصولی وجود ندارد</p> -->
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
  // async asyncData({ $axios, route, error }) {
  //   try {
  //     const { data2 } = await $axios.get(
  //       `/store/${route.params.store_slug}/products`
  //     );
  //     return {
  //       products: data2,
  //     };
  //   } catch (e) {
  //     console.log(e)
  //     if (e.response) {
  //       error({
  //         statusCode: e.response.status,
  //         message: e.response.message,
  //       });
  //     } else {
  //       error({
  //         statusCode: "",
  //         message: "خطا در ارتباط",
  //       });
  //     }
  //   }
  // },
  mounted() {
    console.log('tt',this.$store.state.users)
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
