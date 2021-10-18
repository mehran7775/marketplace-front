<template>
  <div class="w-100">
    <div v-if="products" class="lable">
      <!-- <div class="title text-right pt-4 pr-5 d-none d-md-block">
        <h6>
          <label>
            <b>برچسب</b>
          </label>
        </h6>
      </div> -->
      <div class="mt-4">
        <div class="carousel-wrapper d-none d-md-block">
            <carousel :per-page="per_page" v-bind="options"
            >
              <slide v-for="product in products" :key="product.id" class="img-wrapper">
                <Xitem :title="product.title" :image="product.thumbnail" :price="product.price" :id="product.id"></Xitem>
              </slide>
            </carousel>
        </div>
        <div>
          <div class="d-md-none">
            <div class="container-fluid">
              <div class="row">
                <div v-for="product in products" :key="product.id" class="col-4">
                  <div class="row">
                    <Xitem :title="product.title" :image="product.thumbnail" :price="product.price" :id="product.id"></Xitem>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        loop: true,
        paginationEnabled: false
      },
      per_page: 3,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth > 340) {
        this.per_page = 3;
      }
      if (window.innerWidth > 576) {
        this.per_page = 3;
      }
      if (window.innerWidth > 768) {
        this.per_page = 3;
      }
      if (window.innerWidth > 992) {
        this.per_page = 4;
      }
      if (window.innerWidth > 1200) {
        this.per_page = 5;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lable {
  .title {
    color: text_color;
  }
  .carousel-wrapper {
    cursor: grab;
    direction: ltr;
    .VueCarousel-inner {
      flex-direction: row-reverse !important;
    }
    text-align: center;
    @include medium {
      padding: 20px 0 40px 20px;
    }
    .img-wrapper {
      // margin:min(0.05rem, 0.2%);
      @include medium {
        //   margin: 0 0.2rem;
        margin: min(0.05rem, 0.05%);
      }
    }
  }
}
</style>
