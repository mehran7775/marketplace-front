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
      <div>
        <div class="carousel-wrapper d-none d-md-block">
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
                ></Xitem>
              </slide>
            </carousel>
          </client-only>
        </div>
        <div>
          <!-- <div class="d-md-none"> -->
            <!-- <div class="container-fluid"> -->
              <div class="grid-container d-md-none">
                <div v-for="product in products" :key="product.id">
                  <!-- <div class="row"> -->
                    <client-only>
                      <Xitem
                        :title="product.title"
                        :image="product.thumbnail"
                        :price="product.price"
                        :id="product.id"
                        :quantity="product.quantity"
                      ></Xitem>
                    </client-only>
                  <!-- </div> -->
                </div>
              </div>
            <!-- </div> -->
          <!-- </div> -->
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
        // loop: true,
        paginationEnabled: false,
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

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1.5px;
    background: $border;
    padding: 1.5px;
}

.grid-container > div {
  background-color: $white;
  text-align: center;
}
}
</style>
