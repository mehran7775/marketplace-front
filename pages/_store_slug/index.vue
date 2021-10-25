<template>
  <div id="body" class="w-100">
    {{ $route.params.user_id }}
    <div id="lables">
      <div class="lables mb-4">
        <MoleculesXlables v-if="products" :products="products">
        </MoleculesXlables>
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
        `/store/${route.params.store_slug}/products`
      );
      return {
        products: data.data.data
      };
    } catch (e) {
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
