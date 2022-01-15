<template>
    <div>
        <page-title title_text="جزییات سفارش">
        <div @click="updateOrder">
            <!-- <Xbutton class="px-4" text="ذخیره تغییرات"></Xbutton> -->
                <Xbutton
                :on_click="()=> updateOrder()"
                class="px-4"
                text="ذخیره تغییرات"
                :disable="btnDisable"
                >
                    <template #spinner>
                        <b-spinner v-show="laodingSpinner" small ></b-spinner>
                    </template>            
            </Xbutton>
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
                                <div class="border rounded p-2" v-text="order.id"></div>
                            </div>
                            <div class="col-sm mt-2">
                                <label>کد رهگیری</label>
                                <div class="border rounded p-2" v-text="order.tracking_number"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm mt-2">
                                <label>مبلغ کل سفارش(ریال)</label>
                                <div class="border rounded p-2" v-text="order.payment_price"></div>
                            </div>
                            <div v-if="order.register_date" class="col-sm mt-2">
                                <label>تاریخ ثبت سفارش</label>
                                <div class="border rounded p-2" v-text="order.register_date"></div>
                            </div>
                            <div class="col-sm mt-2">
                                <label>
                                    وضعیت
                                </label>
                                    <b-form-select v-model="form.status">
                                        <option v-for="status in OrderStatus.sellerStatus" :value="status.value">{{status.text}}</option>
                                    </b-form-select>
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
                                <div class="border rounded p-2" v-text="order.customer_data.name"></div>
                            </div>
                            <div class="col-sm mt-2" v-if="order.customer_data.phone">
                                <label>موبایل</label>
                                <div class="border rounded p-2" v-text="order.customer_data.phone"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm mt-2" v-if="order.customer_data.email">
                                <label>ایمیل</label>
                                <div class="border rounded p-2" v-text="order.customer_data.email"></div>
                            </div>
                            <div class="col-sm mt-2" v-if="order.customer_data.address">
                                <label>آدرس</label>
                                <div class="border rounded p-2" v-text="order.customer_data.address"></div>
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
                            <div class="overflow-auto">
                                <table class="table table-borderless text-center">
                                    <thead>
                                    <tr>
                                        <th scope="col" style="background-color: #eee;  border-radius: 0 16px 16px 0;">#</th>
                                        <th scope="col" style="background-color: #eee;">عنوان</th>
                                        <th scope="col" style="background-color: #eee;">تصویر</th>
                                        <th scope="col" style="background-color: #eee;">تعداد</th>
                                        <th scope="col"  style="background-color: #eee;">قیمت (ریال)</th>
                                        <th scope="col"  style="background-color: #eee; border-radius: 16px 0px 0px 16px;">جزییات</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(product, index) in order.products" :key="index">
                                        <td>{{ product.id }}</td>
                                        <td>{{ product.title }}</td>
                                        <td>
                                            <img :src="product.thumbnails[0]" width="30px"/>
                                        </td>
                                        <td>{{ product.quantity }}</td>
                                        <td>{{ product.price }}</td>
                                        <td>
                                            <nuxt-link class="btn p-0 m-0 text-danger" :to="'/' + $route.params.store_slug + '/admin/products/' + product.id + '/find'">
                                <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"
                                    fill="#bbb"><path d="M0 0h24v24H0V0z" fill="none"></path><path
                                    d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                </span>
                                            </nuxt-link>
                                        </td>
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
            },
            btnDisable:false,
            laodingSpinner:false

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
            this.btnDisable = true
            this.laodingSpinner = true
            api.put('order/change-status/' + this.$route.params.id , {
                status : this.form.status
            })
            .then(response => {
                this.message = response.data.message
            }).catch(({response}) => {
            this.error = response.data.data[Object.keys(response.data.data)[0]]
            }).finally(() => {
                this.btnDisable = false
                this.laodingSpinner = false
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
