<template>
    <div>
        <page-title title_text="جزییات سفارش">
            <div @click="updateOrder">
                <Xbutton class="px-4" text="ذخیره تغییرات"></Xbutton>
            </div>
        </page-title>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card" v-if="order">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm mt-2">
                                <label>شناسه</label>
                                <input disabled class="form-control" v-model="order.id"/>
                            </div>
                            <div class="col-sm mt-2">
                                <label>کد رهگیری</label>
                                <input disabled class="form-control" v-model="order.tracking_number"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm mt-2">
                                <label>مبلغ کل</label>
                                <input disabled class="form-control" v-model="order.payment_price"/>
                            </div>
                            <div class="col-sm mt-2">
                                <label>
                                    وضعیت
                                </label>
                                <select class="form-control" v-model="form.status">
                                    <option v-for="status in OrderStatus.sellerStatus" :value="status.value">{{status.text}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 my-3">
                <div class="card" v-if="order">
                    <div class="card-header">
                        <div class="card-title">
                            اطلاعات مشتری
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm mt-2" v-if="order.customer_data.name">
                                <label>نام</label>
                                <input disabled class="form-control" v-model="order.customer_data.name"/>
                            </div>
                            <div class="col-sm mt-2" v-if="order.customer_data.phone">
                                <label>موبایل</label>
                                <input disabled class="form-control" v-model="order.customer_data.phone"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm mt-2" v-if="order.customer_data.email">
                                <label>ایمیل</label>
                                <input disabled class="form-control" v-model="order.customer_data.email"/>
                            </div>
                            <div class="col-sm mt-2" v-if="order.customer_data.address">
                                <div class="col-sm mt-2">
                                    <label>آدرس</label>
                                    <input disabled class="form-control" v-model="order.customer_data.address"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card mt-4" v-if="order">
                    <div class="card-header">
                        <div class="card-title">
                            محصولات سفارش
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="px-3">
                            <div class="table-responsive">
                                <table class="table  table-responsive table-borderless text-center">
                                    <thead>
                                    <tr>
                                        <th scope="col" style="background-color: #eee;  border-radius: 0 16px 16px 0;">#</th>
                                        <th scope="col" style="background-color: #eee;">تصویر</th>
                                        <th scope="col" style="background-color: #eee;">تعداد</th>
                                        <th scope="col"  style="background-color: #eee; border-radius: 16px 0px 0px 16px;">قیمت (ریال)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(product, index) in order.products" :key="index">
                                        <td>{{ product.id }}</td>
                                        <td>
                                            <img :src="product.thumbnails[0]" width="30px"/>
                                        </td>
                                        <td>{{ product.quantity }}</td>
                                        <td>{{ product.price }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderStatus from "~/constants/OrderStatus";
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";
export default {
    name: "find",
    components: {PageTitle},
    layout : "main-content",
    data(){
        return {
            message: null,
            error: null,
            OrderStatus,
            order : null,
            form : {
                status : null
            }
        }
    },
    methods : {
        getOrder(){
            api.get('order/find/' + this.$route.params.id )
            .then(res => {
                this.order = res.data.data
                this.form.status = res.data.data.status
            })
        },
        updateOrder(){
            api.put('order/change-status/' + this.$route.params.id , {
                status : this.form.status
            })
                .then(response => {
                    this.message = response.data.message
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            })
        }
    },
    mounted() {
        this.getOrder()
    }
}
</script>

<style scoped>

</style>
