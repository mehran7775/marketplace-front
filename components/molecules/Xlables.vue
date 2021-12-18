<template>
  <div v-if="products" class="lable h-100">
    <!-- <div class="title text-right pt-4 pr-5 d-none d-md-block">
        <h6>
          <label>
            <b>برچسب</b>
          </label>
        </h6>
      </div> -->
    <div class="body-products h-100 pb-0 pb-md-4">
      <div class="carousel-wrapper d-none d-md-block h-100">
        <client-only>
          <carousel :per-page="per_page" v-bind="options" :rtl="true">
            <slide
              v-for="product in products"
              :key="product.id"
              class="img-wrapper"
            >
              <Xitem
                :title="product.title"
                :image="product.thumbnail"
                :price="product.price"
                :id="product.id"
                :quantity="product.quantity"
                :is_multiple="product.is_multiple"
              ></Xitem>
            </slide>
          </carousel>
        </client-only>
      </div>
      <div class="grid-container d-md-none">
        <div v-for="product in products" :key="product.id">
          <client-only>
            <Xitem
              :title="product.title"
              :image="product.thumbnail"
              :price="product.price"
              :id="product.id"
              :quantity="product.quantity"
              :is_multiple="product.is_multiple"
            ></Xitem>
          </client-only>
        </div>
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
        perPageCustom: [
          [340, 3],
          [576, 3],
          [768, 3],
          [992, 4],
          [1200, 4],
        ],
      },
      per_page: 3,
    };
  },
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
