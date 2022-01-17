<template>
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
                :disabled="product.quantity >= 1 || product.quantity == 'نامحدود' ? false : true"
              ></Xbutton>
            </div>
            <div class="product w-100 mt-5">
              <client-only>
                <carousel
                  :rtl="true"
                  v-bind="options"
                  pagination-color="#dee2e6"
                  pagination-active-color="#00c1a4"
                  pagination-padding="2"
                >
                  <slide
                    v-for="(thumbnail, index) in product.thumbnails"
                    :key="index"
                    class="img-wrapper text-center"
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
                  <div v-if="product.quantity >= 1 || product.quantity == 'نامحدود'">
                    <span id="price" class="font-weight-bold">
                      <span v-text="product.price"></span>
                      <span v-text="lang.price"></span>
                    </span>
                  </div>
                  <div v-else class="my-1"><span class="text-danger font-weight-bold">ناموجود</span></div>
              </div>
                <p class="text-justify px-1 pt-2" v-html="product.description">
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
</template>

<script>
import { tr } from "@/services/lang";
import { productService } from "@/services/apiServices"
import { mapGetters } from 'vuex'

export default {
  layout: "index",
  head() {
    return {
      title: `فروشگاه ${this.detail.fa_name} - ${this.product.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "محصول x این ویژگی ها را دارد",
        },
      ],
    };
  },
  async asyncData({ error, route}) {
    try {
      const res=await productService.getProduct(
        {
          store_slug: route.params.store_slug,
          products_id: route.params.products_id
        }
      )
      return {
        product: res.data.data,
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
    ...mapGetters([
      'detail',
    ])
  },
  data() {
    return {
      options: {
        loop: false,
        paginationEnabled: true,
        perPage: 1,
        centerMode: true
      },
     
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
        is_multiple: this.product.is_multiple,
        count: 1
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#product {
  .product {
    .img-wrapper {
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
