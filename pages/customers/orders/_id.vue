<template>
    <div class="row" id="body-receipt">
        <div  v-if="detail" class="col">
            <div class="position-relative w-100">
                <div id="receipt" class="border py-2">
                    <div class="col-11 m-auto py-1">
                        <div class="row py-1">
                            <div class="w-100 d-flex justify-content-between align-items-center">
                                <div class="logo">
                                    <img class="w-100 mw-100" src="@/assets/images/logo.svg" alt="لوگو پی استار" />
                                </div>

                                <div>
                                    <h1 class="h5 font-weight-bold">رسید خرید شما</h1>
                                </div>
                                <div class="logo"> 
                                    <img class="w-100 mw-100" :src="detail.data.store.logo ? detail.data.store.logo : ''" :alt="`لوگوی ${detail.data.store.fa_name ? detail.data.store.fa_name : detail.data.store.en_name}`" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="w-100">
                        </div>
                        <div class="row py-1">
                            <table class="w-100 text-center" cellspacing="0" cellpadding="0">
                                <tr>
                                    <th>تاریخ ثبت سفارش</th>
                                    <th>کد رهگیری</th>
                                    <th>تاریخ تقریبی تحویل</th>
                                </tr>
                                <tr> 
                                    <td class="pt-2" v-text="detail.data.order_date"></td>
                                    <td class="pt-2" v-text="detail.data.tracking_number"></td>
                                    <td class="pt-2" v-text="detail.data.delivery_date? detail.data.delivery_date : '-' "></td>
                                </tr>
                            </table>
                        
                        </div>
                        <div class="row">
                            <hr class="w-100">
                        </div>
                        <div class="row py-1">
                            <div class="tableSe">
                                <table cellspacing="" cellpadding="5">
                                    <tr>
                                        <th class="">نام فروشگاه</th>
                                        <th class="">تلفن</th>
                                        <th class="">ایمیل</th>
                                        <th class="">شهر</th>
                                    </tr>
                                    <tr>
                                        <td class="pt-2" v-text="detail.data.store.fa_name ? detail.data.store.fa_name : detail.data.store.en_name"></td>
                                        <td class="pt-2" v-text="detail.data.store.phone_number ? detail.data.store.phone_number : '-'"></td>
                                        <td class="pt-2" v-text="detail.data.store.email ? detail.data.store.email : '-'"></td>
                                        <td class="pt-2" v-text="detail.data.store.city ? detail.data.store.city : '-'">Germany</td>
                                    </tr>
                                </table>
                            </div>
                        
                        </div>
                        <div class="row">
                            <hr class="w-100">
                        </div>
                        <div class="row py-1">
                            <div class="tableSe">
                                <table  cellspacing="" cellpadding="5">
                                    <tr>
                                        <th class="">نام مشتری</th>
                                        <th class="">تلفن</th>
                                        <th class="">ایمیل</th>
                                        <th class="">آدرس</th>
                                    </tr>
                                    <tr>
                                        <td class="pt-2" v-text="detail.data.customer.name ? detail.data.customer.name : '-'"></td>
                                        <td class="pt-2" v-text="detail.data.customer.phone ? detail.data.customer.phone : '-'"> </td>
                                        <td class="pt-2" v-text="detail.data.customer.email ? detail.data.customer.email : '-'"></td>
                                        <td class="pt-2" v-text="detail.data.customer.address ? detail.data.customer.address : '-'"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="w-100">
                        </div>
                        <div class="row py-1">
                            <div class="col">
                                <div class="row overflow-auto" id="table-products">
                                    <div class="tableSe">
                                        <table cellspacing="" cellpadding="5">
                                            <tr>
                                                <th></th>
                                                <th>نام محصول</th>
                                                <th>قیمت واحد</th>
                                                <th>تعداد</th>
                                                <th>تخفیف</th>
                                                <th>قیمت کل</th>
                                            </tr>
                                            <tr v-for="product in detail.data.products" :key="product.id">
                                                <td class="pt-1">
                                                    <img width="60" height="60" :src="product.thumbnails[0]" alt="لوگو پی استار" />
                                                </td>
                                                <td class="pt-1" v-text="product.title"></td>
                                                <td class="pt-1" v-text="`${separate(product.price)} ریال`"></td>
                                                <td class="pt-1" v-text="product.quantity"></td>
                                                <td class="pt-1">-</td>
                                                <td class="pt-1" v-text="`${separate(product.total_price)} ریال`"> </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="w-100">
                        </div>
                        <div class="row py-1">
                            <div class="table-fo w-100 overflow-auto">
                                <table class="mx-auto">
                                    <tr>
                                        <th>هزینه ارسال</th>
                                        <td v-text="`${separate(detail.data.shipping_cost)} ریال`"></td>
                                        <th>هزینه کل</th>
                                        <td v-text="`${separate(detail.data.total_price)} ریال`"></td>
                                    </tr>
                                    <tr>
                                        <th class="pt-2">مالیات بر ارزش افزوده</th>
                                        <td class="pt-2"  v-text="detail.data.tax"></td>
                                        <th class="pt-2">تخفیف کل</th>
                                        <td class="pt-2">-</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="w-100">
                        </div>
                        <div class="row">
                            <div class="m-auto py-1">
                                <span class="ml-5 font-weight-bold">مبلغ قابل پرداخت</span>
                                <span  class="mr-5" v-text="`${separate(detail.data.payment_price)} ریال`"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="col">
            سفارش پیدا نشد
        </div>
    </div>
                <!-- 1640503871 -->
    
</template>

<script>
import { orderService } from "@/services/apiServices";
import separatePrice from '@/mixins/separatePrice'
    export default {
        layout:'panel-customer',
        mixins:[ separatePrice ],
        data() {
            return {
                detail:null
            }
        },
        async created(){
             try{
                const res= await orderService.getPublicOrder( {
                    id: this.$route.params.id,
                    token: this.$cookies.get('token-buyer')
                } )
                this.detail= res.data
            }catch(e) {
                this.detail = null
            }
        }
    }
</script>

<style lang="scss" scoped>
#body-receipt{ 
    // background-color: $success;
    overflow-y: auto;   
    #receipt {
        width:100%;
        @include small{
            width:90vw;
            margin:3% auto;
            border-radius: 5px;
        }
        @include medium{
            width:70vw;
        }
        
        background-color: $white;
        .logo {
            width: 110px;
            @include mx_medium{
                width:70px
            }
        }
        
    }
    .tableSe{
        th,td{
            width: 130px;
        }
        @include mx_small{
            table{
                width:450px ;
            }
            overflow-x: auto;
        }
        
    }
    .table-fo{
        table{
            width: 75%;
        }
        @include mx_small{
            table{ 
              width:450px ;
            }
        }  
        
    }
    #table-products{
        height: 220px;
    }

    ::-webkit-scrollbar {
        width: 3px!important;
        height: 3px!important;
        border: 1px solid $success;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px $success; 
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: $success; 
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: $success; 
    }
}

</style>