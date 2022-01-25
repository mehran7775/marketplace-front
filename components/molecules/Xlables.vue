<template>
  <div v-if="products" class="lable h-100">
      <div v-if="!mobile" class="col d-none d-md-block py-5">
        <div class="row justify-content-start">
          <div class="col-4 col-lg-3 my-3" v-for="product in products" :key="product.id">
            <div class="row">
                <Xitem
                :title="product.title"
                :image="product.thumbnail"
                :price="product.price"
                :sell_price="product.sell_price"
                :id="product.id"
                :quantity="product.quantity"
                :is_multiple="product.is_multiple"
                :discount_percent="product.discount_percent"
              ></Xitem>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="grid-container d-md-none">
        <div v-for="product in products" :key="product.id">
          <client-only>
            <Xitem
              :title="product.title"
              :image="product.thumbnail"
              :price="product.price"
              :sell_price="product.sell_price"
              :id="product.id"
              :quantity="product.quantity"
              :is_multiple="product.is_multiple"
              :discount_percent="product.discount_percent"
            ></Xitem>
          </client-only>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      options: {
        paginationEnabled: false,
        loop: true,
        spacePadding: 35,
        spacePaddingMaxOffsetFactor	: 3,
        perPageCustom: [
          [340, 3],
          [576, 3],
          [768, 3],
          [992, 4],
          [1400, 5],
        ],
      },
      per_page: 3,
      mobile: true
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.mobile = innerWidth <= 768
    }
  }
};
</script>

<style lang="scss" scoped>
.lable {
  .title {
    color: text_color;
  }
  .carousel-wrapper {
    text-align: center;
    @include medium {
      padding-top: 20px;
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-gap: 1px;
    background: $border;
    padding: 1px;

    div {
      background-color: $white;
      text-align: center;
      // height: 240px;
    }
  }
  .body-products {
    @include mx_medium {
      background-color: $border;
    }
  }
}
</style>
