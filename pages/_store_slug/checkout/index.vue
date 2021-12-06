<template>
  <div class="row">
    <MoleculesXheader
    ></MoleculesXheader>
    <div class="container body-hv-fit">
        <div class="row">
            <div class="col-11 mx-auto pb-5">
                <div class="row">
                    <div id="checkout" class="mx-auto">
                        <div class="col"> 
                            <div class="row">
                                <h2 class="font-weight-bold h6 text-right">اطلاعات مشتری</h2>
                            </div>
                            <div class="row mb-1 mt-2">
                                <div class="col-12 rounded text-white py-2" id="bgInfo">
                                    <div class="row mt-1">
                                        <div v-if="detail.options.name === 1" class="col-12 col-sm-6">
                                            نام: 
                                            <span v-text="dataPayment.customer_data.first_name ? dataPayment.customer_data.first_name : ''"></span>
                                        </div>
                                        <div  v-if="detail.options.name === 1" class="col-12 col-sm-6 mt-1">
                                            نام خانوادگی: 
                                            <span v-text="dataPayment.customer_data.last_name ? dataPayment.customer_data.last_name: ''"></span>
                                        </div>
                                        <div v-if="detail.options.email === 1" class="col-12 col-sm-6 mt-1">
                                            ایمیل: 
                                            <span v-text="dataPayment.customer_data.email"></span>
                                        </div>
                                        <div v-if="detail.options.phone === 1" class="col-12 col-sm-6 mt-1">
                                            تلفن: 
                                            <span v-text="dataPayment.customer_data.phone"></span>
                                        </div>
                                        <div v-if="detail.options.address === 1" class="col-12 mt-1">
                                            آدرس: 
                                            <span v-text="dataPayment.customer_data.address"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-5"> 
                            <div class="row">
                                <h2 class="font-weight-bold h6 text-right">صورتحساب خرید</h2>
                            </div>
                            <div class="row my-1">
                                <div class="col-12 rounded py-2" v-for="product in dataPayment.products" :key="product.id">
                                    <div class="row mt-1">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="d-flex justify-content-between w-100">
                                                    <div v-text="product.title"></div>
                                                    <div v-text="`${separate(product.price)} ${lang.price}`"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="w-100">
                        <div class="col">
                            <div class="row">
                                 <div class="d-flex justify-content-between w-100">
                                    <span>جمع کل سفارش</span>
                                    <span v-text="`${separate(dataPayment.total_price)} ${separate(dataPayment.total_price) != 0 ? lang.price : '' }`"></span>
                                </div>
                                <div class="d-flex justify-content-between w-100">
                                    <span>هزینه ارسال</span>
                                    <span v-text="`${separate(dataPayment.shipping_cost)} ${separate(dataPayment.shipping_cost) != 0 ? lang.price : ''}`"></span>
                                </div>
                                <div class="d-flex justify-content-between w-100">
                                    <span>مالیات بر ارزش افزوده</span>
                                    <span v-text="`${separate(dataPayment.tax)} ${separate(dataPayment.tax) != 0 ? lang.price : ''}`"></span>
                                </div>
                                  <div class="d-flex justify-content-between w-100">
                                    <span>مبلغ قابل پرداخت</span>
                                    <span v-text="`${separate(dataPayment.payment_price)} ${separate(dataPayment.payment_price) != 0 ? lang.price : ''}`"></span>
                                </div>
                            </div>
                        </div>
                        <div v-if="detail.gateways.length > 1" class="col-12 mt-5"> 
                            <div class="row">
                                <h2 class="font-weight-bold h6">انتخاب روش پرداخت</h2>
                            </div>
                                <div class="row">
                                    <div  v-for="gateway in detail.gateways" :key="gateway.id" class="col-12 mt-1">
                                        <div class="row">
                                                <div class="getways">
                                                <input
                                                    class="mr-4"
                                                    type="radio"
                                                    name="getway"
                                                    :value="gateway.id"
                                                    :ref="gateway.id"
                                                    :id="gateway.id"
                                                    checked
                                                />
                                                <img width="24" height="24" :src="gateway.logo" class="mr-2">
                                                <label class="mt-2" :for="gateway.id"><span class="mr-1" v-text="`درگاه پرداخت ${gateway.title}`"></span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="col">
                            <div class="row mt-4">
                                <button class="btn btn-success w-100" @click="do_payment()">پرداخت</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import separatePrice from '@/mixins/separatePrice'
import { tr } from '@/services/lang'
export default {
    layout: "index",
     middleware({ route, redirect }) {
      if (!route.query.data.order_id) {
        return redirect(`/${route.params.store_slug}/complete-info`)
      }
    },
    mixins:[separatePrice],
    computed:{
        ...mapGetters([
        'detail',
        ]),
        dataPayment(){
            return this.$route.query.data
        },
        lang(){
            return tr()
        }
    },
 
    methods:{      
        do_payment() {
            if(this.detail.gateways.length > 1){
                let gateway_id = null;
                this.detail.gateways.forEach((gateway) => {
                    if (document.getElementById(gateway.id).checked) {
                        gateway_id = gateway.id;
                    }
                });
                if (gateway_id) {
                    this.$store.dispatch("payment/do_payment", {
                        gateway_id:gateway_id
                    })
                }
            }else{
                this.$store.dispatch('payment/do_payment',{
                    gateway_id: this.detail.gateways[0].id
                });
            }
        },
    }
};
</script>

<style scoped lang="scss">
#checkout{
    #bgInfo{
        background-color: $success;
    }
    border-radius: 10px;
    box-shadow: 1px 1px 12px 0 $secondary;
    padding: 30px;
    margin-top: 10%;
    .getways {
        background-color: white;
        border-radius: 10px;
        height: 50px;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        width: 100%;
        max-height: 40px;
    }   
    .icon-getway {
        padding-right: 6rem;
        padding-left: 6rem;
    }
}
</style>