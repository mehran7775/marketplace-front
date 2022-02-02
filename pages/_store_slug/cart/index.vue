<template>
  <div class="row">
    <div class="container body-hv-fit">
      <div class="row h-100">
        <div class="col h-100">
          <div v-if="items" class="row my-4 bg-white">
            <div
              v-for="item in items"
              :key="item.id"
              class="col-12 col-md-6 py-3 row_item_cart"
            >
              <div class="row justify-content-between align-items-center align-items-center">
                <div class="d-flex align-items-center detail_item_cart pr-2">
                  <div class="icon_item ml-2">
                   <template v-if="item.img">
                    <img
                      :src="item.img"
                      width="24"
                      height="24"
                      :alt="`عکس محصول ${ item.name }`"
                      :title="`عکس محصول ${ item.name }`"
                    />
                   </template>  
                   <template v-else>
                      <img
                      src="@/assets/images/default-image.png"
                      width="24"
                      height="24"
                      :alt="`عکس محصول ${ item.name }`"
                      :title="`عکس محصول ${ item.name }`"
                      />
                   </template>
                  </div>
                  <div class="title-product"><span  v-text="item.name"></span></div>
                </div>
                <div class="price_item_cart mr-1">
                  <span v-text="separate(item.price)"></span
                  ><span class="pr-1" v-text="lang.price"></span>
                </div>
                <div id="enums">
                    <div class="d-flex bg-white align-items-center">
                      <span class="d-flex align-items-center justify-content-center rounded-circle cursor_pointer"
                      @click="minusProduct(item.id)"
                      >
                      <fa icon="minus" class="m-auto text-white"></fa>
                      </span>
                      <strong class="mx-2" v-text="item.count"></strong>
                      <span class="d-flex align-items-center justify-content-center rounded-circle cursor_pointer"
                      @click="plusProduct(item.id)"
                      >
                        <fa icon="plus" class="m-auto text-white"></fa >
                      </span>
                    </div>
                </div>
                <span @click="deleteProductFromCart(item.id)"
                  ><fa icon="trash" class="ml-3 cursor_pointer"></fa
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
                    @click="continue_buy()"
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
import { mapGetters } from 'vuex'

export default {
  layout: "index",
  mixins:[separatePrice],
  data() {
    return {
      items: null,
      whole_price: 0,
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
  async mounted() {
    this.setItems();
    this.$nuxt.$on("refresh-cart", () => {
      this.setItems();
    });

  },
  methods: {
    setItems() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart && cart[ this.$nuxt.$route.params.store_slug ]) {
        if (cart[ this.$nuxt.$route.params.store_slug ].length > 0) {
          this.items = cart[ this.$nuxt.$route.params.store_slug ];
          this.whole_price = this.compute_whole_price( this.items );
          return;
        }
      }
      this.items = null;
    },
    compute_whole_price(items) {
      let sum = 0;
      items.forEach((element) => {
        if(typeof element.price == "string"){
          while(element.price.includes(",")){
            element.price= element.price.replace(",", "")
          }
        }
        
        sum += parseInt(element.price) * element.count
        
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
      this.$router.push(`/${ this.$route.params.store_slug }/complete-info`)

    },
  },
  computed: {
     ...mapGetters([
      'detail',
    ]),
    user_data() {
      if(localStorage.getItem('userDetail')){
        return JSON.parse(localStorage.getItem('userDetail'))
      }else{
        return null
      }
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
    width: 51%;

    .title-product{
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .price_item_cart {
    width: 19%;
    color: $success;
    text-align: right;
  }

  svg,
  strong {
    color: $text_color;
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
 #enums {
    &>div{
      border-radius: 215px;
      height: 18px;
    }
    span{
      background-color: #C5C5C5;
      padding: 4px 6px
    }
  }
</style>
