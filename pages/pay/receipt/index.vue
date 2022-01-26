<template>
  <div id="body-receipt">
    <client-only>
      <template v-if="onClient">
        <div class="container-xl">
          <div class="row">
            <div class="position-relative w-100">
                <div id="receipt" class="p-5">
                    <div class="col-12">
                        <div class="row">
                           <div class="w-100 d-flex justify-content-between px-5">
                               <div class="mt-1">
                                   <img width="150" height="150"  src="@/assets/images/default-image.png">
                               </div>
                               <div class="d-none d-md-block">
                                   <img width="130" height="130"  src="@/assets/images/default-image.png">
                               </div>
                           </div>
                        </div>
                        <div class="row mt-4">
                            <hr class="w-75 m-auto">
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="row">
                                    <div class="d-flex flex-column">
                                        <div>
                                            <span class="font-weight-bold">مهران یوسفی</span>
                                        </div>
                                        <div>
                                            <p>میدان ونک-خیابان ملاصدرا-خیابان پردیس-پلاک 7-مرکز</p>
                                        </div>
                                        <div>
                                            <span>mehran@gmail.com</span>
                                        </div>
                                        <div>
                                            <span>09154078169</span>
                                        </div>
                                        <div>
                                            <span>5457465452</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                
                            </div>
                        </div>
                        <div class="row">

                        </div>
                        <div class="row">

                        </div>
                        <div class="row">

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
import separatePrice from '@/mixins/separatePrice'

export default {
  mixins: [separatePrice],
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
        // const res = await orderService.getPaymentReceipt(
        //   this.$route.params.trackingNumber
        // );
        // this.detail = res.data;
        this.onClient = true;
      } catch (e) {
        console.log(55);
        // this.$nuxt.error({
        //     statusCode: e.response.status,
        //     message: e.response.data.message,

        // })
      } 
    }
  },
  methods:{
    doPayment(){
        this.$store.dispatch('payment/doPayment',{
            gId:{ 
                gateway_id: this.detail.data.gateway_id
            },
            oId:{
                order_id: this.detail.data.order_id
            }
        })
    },
    goToStore(){
        const a = document.createElement("a");
        a.href = `https://shop.paystar.ir/@${this.detail.data.store.slug}`
        document.body.appendChild(a)
        a.click()

    }
  },
};
</script>

<style lang="scss" scoped>
#body-receipt{
    background-color: #E8E8E8;
    overflow-y: auto; 
    
    #receipt {
        width:100%;
        background-color: $white;
        border: 1px solid darken(#E8E8E8,10%);
        @include small{
            width:90vw;
            margin:4% auto;
        }
        @include medium{
            width:70vw;
        }
    }
}
</style>