<template>
  <div class="container">
    <div class="row">
      <div class="col">
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
                <div class="icon_item ml-3">
                  <img src="/icon.png" width="24" height="24" alt="عکس محصول" />
                </div>
                <div class="name_icon"><span v-text="item.name"></span></div>
              </div>
              <div class="price_item_cart mr-5">
                <span v-text="item.price"></span><span class="pr-1">تومان</span>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row py-4 mt-2">
              <div class="col-12 col-md-4">
                <div class="row detail_price">
                  <div>
                    <span class="font-weight-bold">جمع کل:</span>
                  </div>
                  <div class="cost">
                    <span v-text="whole_price"></span
                    ><span class="pr-1">تومان</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="row detail_price">
                  <div>
                    <span class="font-weight-bold">تخفیف:</span>
                  </div>
                  <div class="cost">
                    <span v-text="discount"></span
                    ><span class="pr-1">تومان</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="row detail_price">
                  <div>
                    <span class="font-weight-bold">مالیات برارزش افزوده:</span>
                  </div>
                  <div class="cost">
                    <span v-text="taxation"></span
                    ><span class="pr-1">تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <hr class="dash" />
          </div>
          <div class="col-10 m-auto">
            <div class="row p-3 align-items-center">
              <div class="col-12 col-md-6 text-center">
                <span class="while-price" v-text="end_price"></span
                ><span class="while-price pr-1">تومان</span>
              </div>
              <div class="col-12 col-md-6 text-center continue-buy">
                <Xbutton class="px-5" text="ادامه خرید" :on_click="continue_buy"></Xbutton>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row my-4 mx-auto text-center p-4 bg-white">
          <p class="font-weight-bold">سبد خرید شما خالی است</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "index",
  data() {
    return {
      items: null,
      whole_price: 0,
      discount: 40000,
      taxation: 10000,
      end_price: 0,
    };
  },
  head() {
    return {
      title: "صفحه سبد خرید",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "صفحه سبدخرید فروشگاه x",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(async function () {
      if (
        localStorage.getItem("cartItems") &&
        JSON.parse(localStorage.getItem("cartItems")).length > 0
      ) {
        this.items = JSON.parse(localStorage.getItem("cartItems"));
        this.whole_price = await this.compute_whole_price(this.items);
        this.end_price = await this.compute_end_price(this.whole_price);
      }
    });
  },
  methods: {
    compute_whole_price(items) {
      let sum = 0;
      items.forEach((element) => {
        sum += element.price * element.count;
      });
      return sum;
    },
    compute_end_price(whole) {
      return whole + this.taxation - this.discount;
    },
    continue_buy(){
      this.$router.push({name:'complete-info'})
    }
  },
};
</script>

<style scoped lang="scss">
.row_item_cart {
  background-color: #fff;
  border: 1px solid $border_half_success;

  .detail_item_cart {
    width: 60%;
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
}
.detail_price {
  justify-content: center;
  align-items: center;
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
    .cost {
      text-align: left;
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
  border-top: 1px dashed $success;
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
</style>