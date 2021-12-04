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
                                <div class="col-12 rounded bg-success text-white py-2">
                                    <div class="row mt-1">
                                        <div class="col-12">
                                            نام: 
                                            <span class="">مهران</span>
                                        </div>
                                        <div class="col-12 mt-1">
                                            نام خانوادگی: 
                                            <span class="">یوسفی</span>
                                        </div>
                                        <div class="col-12 mt-1">
                                            شهر: 
                                            <span class="">تهران</span>
                                        </div>
                                    </div>
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
                        <div class="col mt-5"> 
                            <div class="row">
                                <h2 class="font-weight-bold h6 text-right">صورتحساب خرید</h2>
                            </div>
                            <div class="row my-1">
                                <div class="col-12 rounded py-2">
                                    <div class="row mt-1">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="d-flex justify-content-between w-100">
                                                    <div>تیشرت</div>
                                                    <div>200 تومان</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 rounded py-2">
                                    <div class="row mt-1">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="d-flex justify-content-between w-100">
                                                    <div>شلوار</div>
                                                    <div>400 تومان</div>
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
                                    <span>جمع کل</span>
                                    <span>600 تومان</span>
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
export default {
    layout: "index",
    computed:{
        ...mapGetters([
        'detail',
        ]),
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