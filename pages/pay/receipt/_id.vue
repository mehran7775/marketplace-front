<template>
  <div id="body-receipt">
    <client-only>
      <template v-if="onClient">
        <div class="container-xl">
          <div class="row">
            <div class="position-relative w-100">
              <div id="receipt" class="p-5">
                <div class="col-12 px-5">
                  <div class="row">
                    <div class="w-100 d-flex justify-content-between">
                      <div class="mt-1">
                        <a :href="`https://shop.paystar.ir/@${detail.store.slug}`">
                          <img v-if="detail.store.logo" :src="detail.store.logo"
                          width="150"
                          height="150"
                          :alt="`لوگوی فروشگاه ${detail.store.fa_name ? detail.store.fa_name : detail.store.en_name}`"
                          :title="`لوگوی فروشگاه ${detail.store.fa_name ? detail.store.fa_name : detail.store.en_name}`"
                          >
                          <img
                          v-else
                          width="150"
                          height="150"
                          src="@/assets/images/default-image.png"
                          alt="لوگوی فروشگاه"
                        />
                        </a>
                        
                      </div>
                      <div class="d-none d-md-block">
                        <img
                          width="130"
                          height="130"
                          src="@/assets/images/default-image.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <hr class="w-75 m-auto" />
                  </div>
                  <div class="row pt-5">
                    <div class="col-12 col-md-6">
                      <div class="row">
                        <div class="d-flex flex-column">
                          <div>
                            <span class="font-weight-bold" v-text="detail.customer.name"></span>
                          </div>
                          <div v-if="detail.customer.address" class="mt-1">
                            <span v-text="detail.customer.address">
                            </span>
                          </div>
                          <div v-if="detail.customer.email" class="mt-1">
                            <span v-text="detail.customer.email"></span>
                          </div>
                          <div v-show="detail.customer.phone" class="mt-1">
                            <span v-text="detail.customer.phone"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 mt-2 mt-md-0">
                      <div class="row">
                        <div class="col-12">
                          <div class="row">
                            <div
                              class="w-100 bg-info text-white d-flex
                                justify-content-between px-4
                                py-4 m-auto border-bottom
                              "
                            >
                              <span class="font-weight-bold h6"
                                >شماره فاکتور</span
                              >
                              <span v-text="detail.tracking_number"></span>
                            </div>
                          </div>
                          <div class="row">
                            <div
                              class="bg-info w-100
                                text-white d-flex justify-content-between px-4 py-4 m-auto"
                            >
                              <span class="font-weight-bold h6">تاریخ</span>
                              <span v-text="detail.order_date"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row pt-5">
                    <div class="w-100 mt-5 d-none d-md-block">
                      <table class="table">
                        <thead class="bg-info text-white">
                          <tr>
                            <th class="overflow-auto" style="width: 200px" scope="col">توضیحات</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">قیمت واحد</th>
                            <th scope="col">تخفیف</th>
                            <th scope="col">قیمت ریال</th>
                          </tr>
                        </thead>
                        <tbody class="bg-light text-dark">
                          <tr>
                            <td>
                             <div class="overflow-auto" style="height:120px">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit.s distinctio quibusdam quas? Expedita, eius? Aut ea expedita perferendis veritatis id.
                             </div>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="d-md-none">
                      <div class="info-mobile">
                        <div class="border-bottom border-white font-weight-bold p-3">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ullam repellendus cumque error tempora, corporis quisquam ut porro aspernatur enim molestias optio quos autem dolorum laborum ex nam nemo. Consectetur?</p>
                        </div>
                        <div class="border-bottom border-white d-flex justify-content-between p-3">
                          <span>تعداد</span>
                          <span class="font-weight-bold">5</span>
                        </div>
                        <div class="border-bottom border-white d-flex justify-content-between p-3">
                          <span>قیمت واحد</span>
                          <span class="font-weight-bold">5</span>
                        </div>
                        <div class="border-bottom border-white d-flex justify-content-between p-3">
                          <span>تخفیف</span>
                          <span class="font-weight-bold">5</span>
                        </div>
                        <div class="d-flex justify-content-between p-3">
                          <span>قیمت (ریال)</span>
                          <span class="font-weight-bold">5</span>
                        </div>
                      </div>
                    </div>
                    <div class="w-100 d-flex justify-content-end" >
                      <div class="d-flex flex-column" id="calculate">
                        <div class="w-100 d-flex flex-column flex-md-row justify-content-between p-3 text-center">
                          <span>جمع کل</span>
                          <span class="mt-3 mt-md-0" v-text="detail.total_price"></span>
                        </div>
                        <div class="w-100 d-flex flex-column flex-md-row justify-content-between p-3 text-center">
                          <span>تخفیف</span>
                          <span class="mt-3 mt-md-0">354523</span>
                        </div>
                        <div class="w-100 d-flex flex-column flex-md-row justify-content-between p-3 text-center">
                          <span>پرداخت شده</span>
                          <span class="mt-3 mt-md-0" v-text="`${detail.payment_price} تومان`"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row pt-5 mt-5">
                    <div class="col-12 col-md-9">
                      <div class="d-none d-md-block row overflow-auto">
                         <table class="w-100" border="0" cellspacing="2" cellpadding="5">
                            <thead class="text-dark font-weight-bold border-bottom" >
                              <tr>
                                <th class="overflow-auto" style="min-width:150px" scope="col">توضیحات</th>
                                <th style="min-width:100px" scope="col">تاریخ پرداخت</th>
                                <th style="min-width:100px" scope="col">شناسه پرداخت</th>
                               
                              </tr>
                            </thead>
                            <tbody class="bg-light text-dark">
                              <tr>
                                <td v-text="`پرداخت آنلاین ${detail.payment_price} تومان`">
                                  
                                </td>
                                <td v-text="detail.complete_date"></td>
                                <td>Otto</td>
                              </tr>
                        </tbody>
                      </table>
                      </div>
                      <div class="d-md-none">
                        <div>
                          <span v-text="`پرداخت آنلاین ${detail.payment_price} تومان`"></span>
                        </div>
                        <div>
                          <span v-text="detail.complete_date">
                          </span>
                        </div>
                        <div>
                          <span >
                            

                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-3">
                      <div class="row">
                        <img class="mx-auto mt-4 mt-md-0" src="@/assets/images/paid_stamp.png" alt="آیکون پرداخت موفق">
                      </div>
                    </div>
                  </div>
                  <div class="row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </client-only>
  </div>
</template>

<script>
import { orderService } from "@/services/apiServices";
import separatePrice from "@/mixins/separatePrice";

export default {
  mixins: [ separatePrice] ,

  head() {
    return {
      title: "صفحه رسید",
    };
  },
  data() {
    return {
      onClient: false,
      detail: {},
    };
  },
  async created() {
    if (process.client) {
      try {
        const { data } = await orderService.getPaymentReceipt(
          this.$route.params.id
        );
        this.detail = data.data;
        this.onClient = true;
      } catch (e) {
        console.log(e);
        this.$nuxt.error({
            statusCode: e.response.status,
            message: e.response.data.message,

        })
      }
    }
  },
  methods: {
    doPayment() {
      this.$store.dispatch("payment/doPayment", {
        gId: {
          gateway_id: this.detail.data.gateway_id,
        },
        oId: {
          order_id: this.detail.data.order_id,
        },
      });
    },
    goToStore() {
      const a = document.createElement("a");
      a.href = `https://shop.paystar.ir/@${this.detail.data.store.slug}`;
      document.body.appendChild(a);
      a.click();
    },
  },
};
</script>

<style lang="scss" scoped>
#body-receipt {
  background-color: #e8e8e8;
  overflow-y: auto;

  #receipt {
    width: 100%;
    background-color: $white;
    border: 1px solid darken(#e8e8e8, 10%);
    @include small {
      width: 90vw;
      margin: 4% auto;
    }
    @include medium {
      width: 70vw;
    }
    // #main div:nth-of-type(2) {flex-grow: 3;}
    .info-table {
      width: 100%;
    }
    .info-mobile{
      background-color: lighten(silver, 15%);
      border-right: 2px solid $border;
      border-top: 2px solid $border;
      border-left: 2px solid $border;
      &:last-child{
        border-bottom: 2px solid $border;
      }
    }
    #calculate{
      width: 200px;
      @include mx_medium{
        width: 100%;
        & div span:nth-child(2){
          font-weight: bold;
        }
      }
      & div:last-child{
        background-color: lighten(silver, 15%);
      }
      
    }
  }
}
</style>