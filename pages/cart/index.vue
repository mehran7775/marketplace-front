<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div v-if="items" class="row my-4 bg-white">
          <div
            v-for="i in 9"
            :key="i"
            class="col-12 col-md-6 py-3 row_item_cart"
          >
            <div class="row justify-content-around">
              <div class="d-flex align-items-center detail_item_cart">
                <div class="count ml-4">* 2</div>
                <div class="icon_item ml-4">
                  <fa icon="home"></fa>
                </div>
                <div class="name_icon"><span>تیشرت هودس</span></div>
              </div>
              <div class="price_item_cart mr-5"><span>200000 تومان</span></div>
            </div>
          </div>
          <div class="col-12">
            <div class="row py-4">
              <div class="col-12 col-md-4">
                <div class="row detail_price">
                  <div>
                    <span class="font-weight-bold">جمع کل:</span>
                  </div>
                  <div class="cost"><span>800000 تومان</span></div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="row detail_price">
                  <div>
                    <span class="font-weight-bold">تخفیف:</span>
                  </div>
                  <div class="cost"><span>40000 تومان</span></div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="row detail_price">
                  <div>
                    <span class="font-weight-bold">مالیات برارزش افزوده:</span>
                  </div>
                  <div class="cost"><span>10000 تومان</span></div>
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
                <span class="while-price">600000 تومان</span>
              </div>
              <div class="col-12 col-md-6 text-center continue-buy">
                <Xbutton class="px-5" text="ادامه خرید"></Xbutton>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row my-4 mx-auto text-center p-4 bg-white">
          <p class="font-weight-bold">هنوز موردی به سبد خرید اضافه نشده است</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "index",
  data(){
    return{
      items:null
    }
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
    this.$nextTick(function(){
      if (localStorage.getItem("cartItems") && JSON.parse(localStorage.getItem("cartItems")).length > 0 ) {
        this.items = JSON.parse(localStorage.getItem("cartItems"))
      }
    })
  },
};
</script>

<style scoped lang="scss">
.row_item_cart {
  background-color: #fff;
  border: 1px solid $border_half_success;

  .price_item_cart {
    color: $success;
  }
}
.detail_price {
  justify-content: center;
  align-items: center;
  .cost {
    color: $success;
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