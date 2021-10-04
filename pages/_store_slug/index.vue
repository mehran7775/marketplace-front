<template>
  <div id="body" class="w-100">
    {{ $route.params.user_id }}
    <div id="lables">
      <div class="lables mb-4">
        <LazyMoleculesXlables v-if="products.length" :products="'products'">
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
  async asyncData({ $axios, route, error }) {
    try {
      const { data } = await $axios.get(
        `/store/${route.params.store_slug}/products`);
      return {
        products: data,
      };
    } catch (e) {
      console.log(e)
      if (e.response) {
        error({
          statusCode: e.response.status,
          message: e.response.message,
        });
      } else {
        error({
          statusCode: "",
          message: "خطا در ارتباط",
        });
      }
    }
  },
  mounted() {

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
