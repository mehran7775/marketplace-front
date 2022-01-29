<template>
  <div id="body-receipt">
    <client-only>
      <template v-if="onClient">
        <div id="mehran"></div>
        <div class="container-xl">
          <div class="row pb-3">
            <div class="position-relative w-100">
              <div id="receipt" class="p-5">
                <div class="col-10 m-auto px-5">
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
                      <div class="d-none d-md-block pl-3">
                        <img width="200" class="m-auto" src="@/assets/images/logo.svg" alt="">
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
                                >کد رهگیری</span
                              >
                              <span v-text="detail.tracking_number"></span>
                            </div>
                          </div>
                          <div class="row">
                            <div
                              class="bg-info w-100 border-bottom
                                text-white d-flex justify-content-between px-4 py-4 m-auto"
                            >
                              <span class="font-weight-bold h6">تاریخ ثبت سفارش</span>
                              <span v-text="detail.register_at? detail.register_at : ''"></span>
                            </div>
                          </div>
                          <div v-if="detail.complete_date" class="row">
                            <div
                              class="bg-info w-100 border-bottom
                                text-white d-flex justify-content-between px-4 py-4 m-auto"
                            >
                              <span class="font-weight-bold h6">تاریخ تکمیل سفارش</span>
                              <span v-text="detail.complete_date"></span>
                            </div>
                          </div>
                             <div class="row">
                            <div
                              class="bg-info w-100 border-bottom
                                text-white d-flex justify-content-between px-4 py-4 m-auto align-items-center"
                            >
                              <span class="font-weight-bold h6">وضعیت سفارش</span>
                              <span>
                                  <div v-if="detail.payment_status != 2" class="m-auto text-danger d-flex">
                                        <div class="d-flex align-items-center justify-content-center">
                                            <fa icon="times" class="fa-2x"></fa>
                                            <span class="mr-2 font-weight-bold">پرداخت ناموفق</span>
                                        </div>
                                        
                                  </div>
                                  <div v-else class="m-auto d-flex text-success">
                                      <div class="d-flex align-items-center justify-content-center">
                                          <fa icon="check" class="fa-2x"></fa>
                                          <span class="mr-2 font-weight-bold">پرداخت موفق</span>
                                      </div>
                                  </div>

                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row pt-5">
                    <div v-if="detail.products.length>0" class="w-100 mt-5 d-none d-md-block">
                      <table class="table">
                        <thead class="bg-info text-white">
                          <tr>
                            <th></th>
                            <th class="overflow-auto" style="width: 200px" scope="col">نام محصول</th>
                            <th scope="col">قیمت واحد</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">قیمت</th>
                          
                          </tr>
                        </thead>
                        <tbody class="bg-light text-dark">
                          <tr v-for="product in detail.products" :key="product.id">
                            <td>
                              <img width="32" height="32" :src="product.thumbnails[0]" :alt="`عکس محصول ${product.title}`">
                            </td>
                            <td class="pt-3">
                             <div class="overflow-auto" style="max-height:120px" v-text="product.title">
                              
                             </div>
                            </td> 
                            <td v-text="`${separate(product.price)} تومان`" class="pt-3"></td>
                            <td v-text="product.quantity" class="pt-3"></td>
                            <td v-text="`${product.total_price} تومان`" class="pt-3"></td>
                            
                           
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div v-if="detail.products.length>0" class="d-md-none w-100" style="max-height:260px;overflow:auto;">
                      <div class="info-mobile w-100" v-for="product in detail.products" :key="product.id">
                        <div class="border-bottom border-white font-weight-bold p-3 text-center">
                            <img width="48" height="48" :src="product.thumbnails[0]" :alt="`عکس محصول ${product.title}`">
                        </div>
                        <div class="border-bottom border-white d-flex justify-content-between p-3">
                          <span>نام محصول</span>
                          <span class="font-weight-bold" v-text="product.title"></span>
                        </div>
                        <div class="border-bottom border-white d-flex justify-content-between p-3">
                          <span>قیمت واحد</span>
                          <span class="font-weight-bold"  v-text="`${separate(product.price)} ریال`" ></span>
                        </div>
                        <div class="border-bottom border-white d-flex justify-content-between p-3">
                          <span>تخفیف</span>
                          <span class="font-weight-bold" v-text="`${product.discount_price == 0  ?  product.discount_price : '%' +product.discount_price}`"></span>
                        </div>
                        <div class="d-flex justify-content-between p-3">
                          <span>قیمت کل</span>
                          <span class="font-weight-bold" v-text="`${separate(product.total_price)} ریال`"></span>
                        </div>
                      </div>
                    </div>
                    <div class="w-100 d-flex justify-content-end">
                      <div class="d-flex flex-column" id="calculate">
                        <div class="w-100 d-flex flex-column flex-md-row justify-content-between p-3 text-center">
                          <span>هزینه ارسال</span>
                          <span class="mt-3 mt-md-0" v-text="`${detail.shipping_cost} تومان`"></span>
                        </div>
                        <div class="w-100 d-flex flex-column flex-md-row justify-content-between p-3 text-center">
                          <span>مالیات بر ارزش افزوده</span>
                          <span class="mt-3 mt-md-0" v-text="detail.tax"></span>
                        </div>
                        <div class="w-100 d-flex flex-column flex-md-row justify-content-between p-3 text-center">
                          <span>هزینه کل</span>
                          <span class="mt-3 mt-md-0" v-text="`${separate(detail.total_price)} تومان`"></span>
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
                                <td v-text="detail.payment_date"></td>
                                <td v-text="detail.payment_id"></td>
                              </tr>
                        </tbody>
                      </table>
                      </div>
                      <div class="d-md-none">
                        <div>
                          <span v-text="`پرداخت آنلاین ${detail.payment_price} تومان`"></span>
                        </div>
                        <div>
                          <span v-text="detail.payment_date">
                          </span>
                        </div>
                        <div>
                          <span v-text="detail.payment_id">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div v-if="detail.payment_status === 2" class="col-12 col-md-3">
                      <div class="row">
                        <img class="mx-auto mt-4 mt-md-0" src="@/assets/images/paid_stamp.png" alt="آیکون پرداخت موفق">
                      </div>
                    </div>
                  </div>
                   <div class="row mt-5">
                    <hr class="w-75 m-auto" />
                  </div>
                  <div class="row">
                    <div class="p-3">
                      <ul class="p-0 m-0">
                        <li class="text-info">  
                          {{ `فروشگاه ${detail.store.fa_name? detail.store.fa_name : detail.store.en_name}`}}
                        </li>
                        <li v-if="detail.store.email" v-text="detail.store.email" class="text-info"></li>
                        <li v-if="detail.store.phone_number" v-text="detail.store.phone_number" class="text-info"></li>
                        <li v-if="detail.store.city" v-text="detail.store.city" class="text-info"></li>
                      </ul>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <hr class="w-75 m-auto" />
                  </div>
                  <div class="row text-center mt-5">
                   <div class="mx-auto">
                    <Xbutton v-if="detail.payment_status !== 2" text="پرداخت مجدد" :on_click="() => doPayment()"/>
                    <Xbutton text="بازگشت به فروشگاه" :on_click="() => goToStore()"/>
                   </div>
                  </div>
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

import QrCodeWithLogo from "qr-code-with-logo";
import LocalImage from '@/assets/images/default-image.png'


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

      pardakhtShakhsiLink:'#',
    };
  },
  computed:{
    qr_canvas() {
       if(process.client){
          const qr_canvas = document.createElement('canvas')
        document.getElementById('mehran').appendChild(qr_canvas)

        return qr_canvas
       }
    }
  },
  mounted(){
   
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
          gateway_id: this.detail.gateway_id,
        },
        oId: {
          order_id: this.detail.order_id,
        },
      });
    },
    goToStore() {
      const a = document.createElement("a");
      a.href = `https://shop.paystar.ir/@${this.detail.store.slug}`;
      document.body.appendChild(a);
      a.click();
    },
    createQrCode() {
            QrCodeWithLogo.toCanvas({
                canvas: this.qr_canvas,
                content: this.pardakhtShakhsiLink,
                width: 200,
                height: 200,
                logo: {
                    // src: LocalImage,
                    src: LocalImage,
                    borderRadius: '20',
                    bgColor: '#fff',
                    logoSize: 0.25,
                    borderSize: 0
                }
            })
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
         border: 2px solid $border;
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