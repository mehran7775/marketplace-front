<template>
  <div class="row">
    <MoleculesXheader
      :logo="detail.logo"
      :fa_name="detail.fa_name"
      :address="detail.address"
      :email="detail.email"
    ></MoleculesXheader>
    <div id="body" class="w-100">
      <div id="lables">
        <div class="lables mb-4">
          <MoleculesXlables v-if="products" :products="products">
          </MoleculesXlables>
          <p v-else>محصولی وجود ندارد</p>
        </div>
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
      title: this.detail.fa_name,
    };
  },
  computed: {
    lang() {
      return tr();
    },
  },
  async asyncData({ $axios, route, error, store }) {
    try {
      const res = await $axios.get(`/store/${route.params.store_slug}`);
      store.commit("payment/set_gateways", res.data.data.gateways);
      store.commit("store/set_id", res.data.data.id);
      const { data } = await $axios.get(
        `/store/${route.params.store_slug}/products`
      );
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
#lables {
  padding: 0;
  @include mx_medium {
    padding: 0.05rem;
  }
}
</style>
