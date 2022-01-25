<template>
  <div class="row">
    <div class="container-xl">
      <div class="row">
        <div class="w-100 body-hv-fit">
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
import { productService } from "@/services/apiServices"
import { mapGetters } from 'vuex'
export default {
  layout: "index",
  head() {
    return {
      title: `فروشگاه ${this.detail.fa_name}`,
    };
  },
  computed: {
    lang() {
      return tr();
    },
    ...mapGetters([
      'detail',
    ])

  },
  async asyncData({ route, error }) {
    try {
      const { data } = await productService.getProducts(route.params.store_slug)
      return {
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
.container-xl{
  @include xlarge{
    max-width: 1400px;
  }
}
</style>
