<template>
  <div class="row">
    <MoleculesXheader
      :logo="detail.logo"
      :fa_name="detail.fa_name"
      :address="detail.address"
      :setDetail="false"
    ></MoleculesXheader>
    <div id="product" class="container body-hv-fit">
      <div class="row mt-0 mt-sm-3 mt-md-5">
        <div class="col">
          <div v-if="product" class="row mt-0 mt-sm-3 mt-md-5">
            <div class="col-12 mx-auto p-5 bg-white rounded">
              <div class="d-flex justify-content-end">
                <Xbutton
                  class="px-4"
                  :text="lang.btn.buy"
                  :on_click="add_item"
                ></Xbutton>
              </div>
              <div class="product w-100 mt-5" dir="ltr">
                <client-only>
                  <carousel
                    :rtl="true"
                    :per-page="per_page"
                    v-bind="options"
                    pagination-color="#dee2e6"
                    pagination-active-color="#00c1a4"
                    pagination-padding="2"
                  >
                    <slide
                      v-for="thumbnail in product.thumbnails"
                      :key="thumbnail"
                      class="img-wrapper"
                    >
                      <img
                        :src="thumbnail ? thumbnail : '/images/default-image.png'"
                        alt="عکس محصول"
                      />
                    </slide>
                  </carousel>
                </client-only>
              </div>
            </div>
            <div class="col-12">
              <div
                class="row flex-sm-column text-right py-4 px-5"
                id="detail-product"
              >
                <div class="d-flex justify-content-between w-100">
                  <h2 v-text="product.title" class="h4 font-weight-bold"></h2>
                   <div>
                    <span id="price" class="font-weight-bold">
                      <span v-text="product.price"></span>
                      <span v-text="lang.price"></span>
                    </span>
                  </div>
                </div>
                  <p class="text-justify px-1 pt-2" v-text="product.description">
                  </p>
              </div>
            </div>
          </div>
          <div v-else class="row">
            <div class="col-6 m-auto text-center p-5">
              <span class="font-weight-bold">محصول پیدا نشد</span>
            </div>
          </div>
        </div>
      </div>
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
      title: `${this.detail.fa_name} - ${this.product.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "محصول x این ویژگی ها را دارد",
        },
      ],
    };
  },
  async asyncData({ error, route, $axios, store }) {
    try {
      const res = await storeService.getDetail(route.params.store_slug)
      store.commit("payment/set_gateways", res.data.data.gateways);
      store.commit("store/set_id", res.data.data.id);
      const res2=await productService.getProduct(
        {
          store_slug: route.params.store_slug,
          products_id: route.params.products_id
        }
      )
      return {
        detail: res.data.data,
        product: res2.data.data,
      };
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: e.response.data.message,
      });
    }
  },
  computed: {
    lang() {
      return tr();
    },
  },
  data() {
    return {
      options: {
        loop: false,
        paginationEnabled: true,
      },
      per_page: 1,
    };
  },
  methods: {
    add_item() {
      this.$store.dispatch("cart/addProductToCart", {
        id: this.product.id,
        name: this.product.title,
        price: this.product.price,
        img: this.product.thumbnails[0],
        quantity: this.product.quantity,
        // singleProduct: this.product.singleProduct
      });
    },
  },
  mounted() {
    // document.querySelector('.carousel-wrapper .VueCarousel-inner').style.flexDirection ="row-reverse!important"
    // document.querySelector('.carousel-wrapper .VueCarousel-inner').style.flexDirection ="row-reverse!important"
  },
};
</script>

<style lang="scss" scoped>
#product {
  .product {
    .img-wrapper {
      text-align: center;

      img {
        max-width: 100%;
        max-height: 250px;
      }
    }
  }
  #detail-product {
    background-color: $silver;
    #price {
      color: $success;
      font-size: 1.3rem;
    }
  }
}
</style>
