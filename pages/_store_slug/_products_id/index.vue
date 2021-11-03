<template>
  <div class="row">
    <MoleculesXheader
      :logo="detail.logo"
      :fa_name="detail.fa_name"
      :address="detail.address"
      :email="detail.email"
    ></MoleculesXheader>
    <div id="product" class="container pt-2 pb-5">
      <div class="row" v-if="product">
        <div class="col-12 mx-auto my-5 p-5 bg-white">
          <div class="product w-100" dir="ltr">
            <client-only>
              <carousel :per-page="per_page" v-bind="options" dir="rtl">
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
          <div class="row flex-sm-column text-right px-5" id="detail_product">
            <div class="column">
              <h2 v-text="product.title" class="display-5"></h2>
              <p class="pt-1" v-text="product.description"></p>
            </div>
            <div class="buy_cost w-100 text-center mt-2">
              <span id="price">
                <span>قیمت:</span>
                <span class="mx-1" v-text="product.price"></span>
                <span v-text="lang.price"></span>
              </span>
              <Xbutton
                class="px-3"
                :text="lang.btn.buy"
                :on_click="add_item"
              ></Xbutton>
            </div>
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
</template>

<script>
import { tr } from "@/services/lang"
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
      const res1 = await $axios.get(`/store/${route.params.store_slug}`);
      store.commit("payment/set_gateways", res1.data.data.gateways);
      store.commit("store/set_id", res1.data.data.id);
      const res2 = await $axios.get(
        "/product/" + route.params.store_slug + "/" + route.params.products_id
      );
      return {
        detail: res1.data.data,
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
      });
    },
  },
  mounted(){
    // document.querySelector('.carousel-wrapper .VueCarousel-inner').style.flexDirection ="row-reverse!important"
    // document.querySelector('.carousel-wrapper .VueCarousel-inner').style.flexDirection ="row-reverse!important"
    
  }
};
</script>

<style lang="scss" scoped>
#product {
  .product {
    .img-wrapper {
      height: max-content;
      text-align: center;

      img {
        max-width: 280px;
        max-height: 250px;
      }
    }
  }
  #detail_product {
    #price {
      color: $success;
      font-weight: bold;
      margin: auto 4rem;
    }
  }
}
</style>
