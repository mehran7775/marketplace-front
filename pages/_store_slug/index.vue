<template>
  <div class="row">
    <MoleculesXheader
      :logo="detail.logo"
      :fa_name="detail.fa_name"
      :address="detail.address"
    ></MoleculesXheader>
    <div class="w-100 body-hv-fit">
      <LazyMoleculesXlables v-if="products" :products="products">
      </LazyMoleculesXlables>
      <p v-else>محصولی وجود ندارد</p>
    </div>
  </div>
</template>

<script>
import { tr } from "@/services/lang";
import { storeService } from "@/services/apiServices"
import { productService } from "@/services/apiServices"
export default {
  layout: "index",
  head() {
    return {
      title: this.detail.fa_name,
    };
  },
  computed: {
    lang() {
      return tr();
    },
  },
  async asyncData({ route, error, store }) {
    try {
      const res = await storeService.getDetail(route.params.store_slug)
      store.commit("store/set_id", res.data.data.id);
      const { data } = await productService.getProducts(route.params.store_slug)
      return {
        detail: res.data.data,
        products: data.data.data,
      };
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: e.response.data.message,
      });
    }
  },
};
</script>

<style scoped lang="scss">
</style>
