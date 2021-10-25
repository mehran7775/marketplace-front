<template>
    <div>
        <page-title title_text="سفارشات" icon="order">
        </page-title>
        <div class="bg-white shadow-sm p-3 my-3 d-none" v-show="false" style="border-radius: 10px;">
            <div class="row">
                <div class="col-sm my-2">
                    <input class="form-control" placeholder="عنوان محصول" v-model="filter_title">
                </div>
                <!--<div class="col-sm my-2">
                    <select class="form-control" v-model="filter_status">
                        <option></option>
                    </select>
                </div>-->
                <div class="col-sm my-2">
                    <!--   <div class="form-group my-0">
                           <datePicker
                               color="#00c1a4"
                               format="YYYY-MM-DD HH:mm:ss"
                               display-format="dddd jDD jMMMM jYYYY HH:mm"
                               input-class="form-control"
                               name="filter_from_date"
                               placeholder="از تاریخ"
                               clearable
                               v-model="filter_from_date"
                               type="datetime"/>

                       </div>-->
                   </div>
                <div class="col-sm my-2">
                    <!-- <div class="form-group my-0">
                         <datePicker
                             color="#00c1a4"
                             format="YYYY-MM-DD HH:mm:ss"
                             display-format="dddd jDD jMMMM jYYYY HH:mm"
                             input-class="form-control"
                             name="filter_from_date"
                             placeholder="تا تاریخ"
                             clearable
                             v-model="filter_to_date"
                             type="datetime"/>
                     </div>-->
                 </div>
                <div class="col-sm my-2">
                    <div>
                        <button :class="query ? 'btn btn-success mr-2' : 'btn btn-success btn-block'" style="border-radius: 10px;"
                                @click="get_data(orders.first_page_url)">اعمال فیلتر
                        </button>
                        <button class="btn btn-danger mr-3" style="border-radius: 10px;"
                                @click="reset_and_get" v-if="query">حذف فیلتر
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="orders">

            <div class="px-3">
                <div class="table-responsive">
                    <table class="table  table-responsive table-borderless text-center">
                        <thead>
                        <tr>
                            <th scope="col" style="background-color: #eee;  border-radius: 0 16px 16px 0;">#</th>
                            <th scope="col" style="background-color: #eee;">مشتری</th>
                            <th scope="col" style="background-color: #eee;">کد پیگیری</th>
                            <th scope="col" style="background-color: #eee;">قیمت (ریال)</th>
                            <th scope="col" style="background-color: #eee;">تاریخ ثبت</th>
                            <th scope="col" style="background-color: #eee;">وضعیت</th>
                            <th scope="col" style="background-color: #eee; border-radius: 16px 0px 0px 16px;" >جزییات</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(order, index) in orders.data" :key="index">
                            <td>{{ order.id }}</td>
                            <td>{{ order.customer.first_name }}</td>
                            <td>{{ order.tracking_number }}</td>
                            <td>{{ order.payment_price }}</td>
                            <td>{{ order.created_at }}</td>
                            <td>{{ OrderStatus.getStatus(order.status).text}}</td>
                            <td>
                                <nuxt-link class="btn p-0 m-0 text-danger" :to="'orders/' + order.id + '/find'">
                                <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#bbb"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                </span>
                                </nuxt-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr v-if="orders.next_page_url || orders.prev_page_url">

            <pagination v-if="orders.next_page_url || orders.prev_page_url" :data="orders" :get_data="get_data" :perpage="per_page"></pagination>
        </div>
    </div>
</template>

<script>
import pagination from "~/components/pagination";
import CustomerStatus from "~/constants/CustomerStatus";
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";
//import datePicker from 'vue-persian-datetime-picker'
import OrderStatus from "~/constants/OrderStatus";
export default {
    name: "index",
    components: {
        PageTitle,
        pagination,
        //datePicker
    },
    layout: "main-content",
    data() {
        return {
            OrderStatus,
            filter_title: null,
            filter_from_date: null,
            filter_to_date: null,
            filter_status : null,
            orders: null,
            per_page: 15
        }
    },
    computed: {
        query() {
            let res = '';
            if (this.filter_title != null) {
                res = res + '&query[title]=' + this.filter_title;
            }
            if (this.filter_status != null) {
                res = res + '&query[status]=' + this.filter_status;
            }
            if (this.filter_from_date != null) {
                res = res + '&query[from_date]=' + this.filter_from_date;
            }
            if (this.filter_to_date != null) {
                res = res + '&query[to_date]=' + this.filter_to_date;
            }
            return res;
        }
    },
    methods: {
        resetQuery() {
            this.filter_title = null;
            this.filter_status = null;
            this.filter_from_date = null;
            this.filter_to_date = null;
        },
        async get_data(url) {
            let res = await api.getUrl(url + this.query + '&perpage=' + this.per_page,this.$cookies.get('token'))
            this.orders = res.data.data
        },
        reset_and_get() {
            this.resetQuery();
            this.get_data(this.orders.path + '?page=1');
        },
    },
    async created() {
        let res = await api.get('order?store_id='  + this.$route.params.store_slug + '&perpage=' + this.per_page,this.$cookies.get('token'))
        this.orders = res.data.data
    }
}
</script>

<style>
table > tbody > tr:not(:last-child) > td {
    border-bottom: 1px solid #dedede;
}
</style>
