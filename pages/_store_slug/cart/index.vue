<template>
  <div class="row">
    <MoleculesXheader
      :logo="detail.logo"
      :fa_name="detail.fa_name"
      :address="detail.address"
      :email="detail.email"
    ></MoleculesXheader>
    <div class="container body-hv-fit">
      <div class="row h-100">
        <div class="col h-100">
          <div v-if="items" class="row my-4 bg-white">
            <div
              v-for="item in items"
              :key="item.id"
              class="col-12 col-md-6 py-3 row_item_cart"
            >
              <div class="row justify-content-between align-items-center">
                <div class="d-flex align-items-center detail_item_cart">
                  <div class="count mx-4">
                    <strong class="ml-2" v-text="item.count"></strong
                    ><fa icon="times"></fa>
                  </div>
                  <div class="icon_item ml-2">
                    <img
                      :src="item.img"
                      width="24"
                      height="24"
                      alt="عکس محصول"
                    />
                  </div>
                  <div class="name_icon"><span v-text="item.name"></span></div>
                </div>
                <div class="price_item_cart mr-1">
                  <span v-text="item.price"></span
                  ><span class="pr-1" v-text="lang.price"></span>
                </div>
                <div
                  class="d-flex justify-content-center p-1"
                  id="change-count-product"
                >
                  <span @click="minusProduct(item.id)" class="mx-1"
                    ><fa icon="minus" class="m-auto"></fa
                  ></span>
                  <span @click="plusProduct(item.id)" class="mx-1"
                    ><fa icon="plus" class="m-auto"></fa
                  ></span>
                </div>
                <span @click="deleteProductFromCart(item.id)"
                  ><fa icon="trash" class="ml-3"></fa
                ></span>
              </div>
            </div>
            <div class="col-12 mt-4">
              <hr class="dash" />
            </div>
            <div class="col-10 m-auto">
              <div class="row p-3 align-items-center">
                <div class="col-12 col-md-6 text-center">
                  <span class="font-weight-bold h5">جمع کل :</span>
                  <span
                    class="while-price"
                    v-text="separate(whole_price)"
                  ></span
                  ><span class="while-price pr-1" v-text="lang.price"></span>
                </div>
                <div class="col-12 col-md-6 text-center continue-buy">
                  <button
                    class="btn btn-success px-5 mt-3 mt-md-0"
                    @click="continue_buy"
                  >
                    ادامه خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="row my-4 mx-auto text-center p-4 bg-white">
            <p class="font-weight-bold" v-text="'سبد خرید شما خالی است'"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from "@/services/lang";
import separatePrice from '@/mixins/separatePrice'
export default {
  layout: "index",
  mixins:[separatePrice],
  data() {
    return {
      items: null,
      whole_price: 0,
      discount: 40000,
      taxation: 0,
      end_price: 0,
    };
  },
  head() {
    return {
      title: `${this.detail.fa_name} - سبد خرید`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "صفحه سبدخرید فروشگاه x",
        },
      ],
    };
  },
  async asyncData({ error, route, $axios, store }) {
    try {
      const res1 = await $axios.get(`/store/${route.params.store_slug}`);
      store.commit("payment/set_gateways", res1.data.data.gateways);
      store.commit("store/set_id", res1.data.data.id);
      return {
        detail: res1.data.data,
      };
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: e.response.data.message,
      });
    }
  },
  mounted() {
    this.setItems();
    this.$nuxt.$on("refresh-cart", () => {
      this.setItems();
    });
  },
  methods: {
    async setItems() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart && cart[this.$nuxt.$route.params.store_slug]) {
        if (cart[this.$nuxt.$route.params.store_slug].length > 0) {
          this.items = cart[this.$nuxt.$route.params.store_slug];
          this.whole_price = await this.compute_whole_price(this.items);
          return;
        }
      }
      this.items = null;
    },
    compute_whole_price(items) {
      let sum = 0;
      items.forEach((element) => {
        sum += parseInt(element.price.replace(",", "")) * element.count;
      });
      return sum;
    },
    deleteProductFromCart(id) {
      this.$store.dispatch("cart/deleteProductFromCart", id);
    },
    minusProduct(id) {
      this.$store.dispatch("cart/minusProduct", id);
    },
    plusProduct(id) {
      this.$store.dispatch("cart/plusProduct", id);
    },
    continue_buy() {
      if (this.$cookies.get("token-buyer") && this.user_data) {
        const data = {
          store_id: this.$store.state.store.id,
          name: this.user_data.first_name + " " + this.user_data.last_name,
          email: this.user_data.email,
          phone: this.user_data.phone,
          address: {
            province: this.user_data.addresses[0].province,
            city: this.user_data.addresses[0].city,
            address: this.user_data.addresses[0].address,
          },
        };
        this.$store.dispatch("payment/select_way_payment", data);
      } else {
        this.$router.push(`/${this.$route.params.store_slug}/complete-info`);
      }
    },
  },
  computed: {
    user_data() {
      return this.$store.state.user.current_user;
    },
    lang() {
      return tr();
    },
  },
};
</script>

<style scoped lang="scss">
.row_item_cart {
  background-color: #fff;
  border: 1px solid $border;

  .detail_item_cart {
    width: 53%;
  }
  .price_item_cart {
    width: 26%;
    // background-color: red;
    color: $success;
    text-align: right;
  }

  svg,
  strong {
    color: $text_color;
  }
  svg:hover {
    color: $success;
    cursor: pointer;
  }
}
.detail_price {
  .cost {
    color: $success;
  }
  div:first-child {
    span {
      color: $text_color;
    }
  }

  @include mx_medium {
    margin-top: 1rem;
    div {
      text-align: right;
      width: 30%;
    }
    // .cost {
    //   text-align: left;
    // }
  }
  @include medium {
    div {
      width: 50%;
      text-align: center;
    }
  }
}
.dash {
  border-top: 1px dashed $border;
}
.while-price {
  color: $success;
  font-weight: bold;
  font-size: 1.3rem;
}
.continue-buy {
  @include mx_medium {
    margin-top: 1rem;
  }
}
#change-count-product {
  border: 1px solid $border;
}
</style>
