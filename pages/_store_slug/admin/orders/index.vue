<template>
    <div>
        <page-title title_text="سفارشات" icon="order">
        </page-title>
        <div class="bg-white shadow-sm p-3 my-3" style="border-radius: 10px;">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-3 my-2">
                    <input class="form-control" placeholder="کد رهگیری" v-model="filter_tracking_number">
                </div>
                <div class="col-12 col-sm-6 col-lg-3 my-2">
                    <input class="form-control" placeholder="اطلاعات مشتری" v-model="filter_customer_detail">
                </div>
                <div class="col-12 col-sm-6 col-lg-3 my-2">
                    <input class="form-control" placeholder="از تاریخ" v-model="filter_from_date">
                </div>
                <div class="col-12 col-sm-6 col-lg-3 my-2">
                    <input class="form-control" placeholder="تا تاریخ" v-model="filter_to_date">
                </div>
                <div class="col-12 col-sm-6 col-lg-3 my-2">
                    <select class="form-control" v-model="filter_status">
                        <option :value="null">وضعیت</option>
                        <option v-for="status in OrderStatus.orderStatus" :value="status.value">
                            {{status.text}}
                        </option>
                    </select>
                </div>
                <div class="col-sm my-2">
                        <div>
                        <Xbutton
                        :on_click="()=> get_data(orders.first_page_url)"
                        :class="[query ? 'mr-2' : null,'px-3']"
                        text="اعمال فیلتر"
                        variant="success"
                        :disable="btnDisableAction"
                        
                        >
                            <template #spinner>
                                <b-spinner v-show="laodingSpinnerAction" small ></b-spinner>
                            </template>            
                        </Xbutton>
                        <Xbutton
                        v-if="query"
                        :on_click="()=> reset_and_get()"
                        class="mr-3 px-3"
                        text="حذف فیلتر"
                        variant="danger"
                        :disable="btnDisableRemove"
                        >
                            <template #spinner>
                                <b-spinner v-show="laodingSpinnerRemove" small ></b-spinner>
                            </template>            
                        </Xbutton>
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
                            <td >{{ order.customer_info }}</td>
                            <td>{{ order.tracking_number }}</td>
                            <td>{{ order.payment_price }}</td>
                            <td>{{ order.created_at }}</td>
                            <td>
                                <b-badge :variant="OrderStatus.getStatus(order.status).variant">
                                    {{ OrderStatus.getStatus(order.status).text}}
                                </b-badge>
                                </td>
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
              filter_tracking_number: null,
            filter_status : null,
            filter_customer_detail: null,
            filter_from_date: null,
            filter_to_date: null,
            orders: null,
            per_page: 15,
            btnDisableAction:false,
            laodingSpinnerAction:false
        }
    },
     async created() {
        if(process.client){
            let res = await api.get('order?store_id='  + this.$route.params.store_slug + '&perpage=' + this.per_page,this.$cookies.get('token'))
            this.orders = res.data.data
        }
       
    },
    computed: {
        query() {
            let res = '';
            if (this.filter_tracking_number) {
                res = res + '&query[tracking_number]=' + this.filter_tracking_number;
            }
            if (this.filter_status) {
                res = res + '&query[status]=' + this.filter_status;
            }
             if (this.filter_customer_detail) {
                res = res + '&query[customer_detail]=' + this.filter_customer_detail;
            }
            if(this.filter_from_date ){
                res = res + '&query[from_date]=' + this.filter_from_date;
            }
             if(this.filter_to_date){
                res = res + '&query[to_date]=' + this.filter_to_date;
            }
            return res;
        }
    },
    methods: {
        resetQuery() {
            this.filter_tracking_number = null;
            this.filter_status = null;
            this.filter_customer_detail = null;
            this.filter_from_date = null;
            this.filter_to_date = null;
        },
        async get_data(url) {
            this.btnDisableAction = true
            this.laodingSpinnerAction = true
            let res = await api.getUrl(url + this.query + '&perpage=' + this.per_page,this.$cookies.get('token'))
            .finally(() => {
                this.btnDisableAction = false
                this.laodingSpinnerAction = false
            })
            this.orders = res.data.data
        },
        reset_and_get() {
            this.resetQuery();
            this.get_data(this.orders.path + '?page=1');
        },
    },
   
}
</script>

<style>
table > tbody > tr:not(:last-child) > td {
    border-bottom: 1px solid #dedede;
}
</style>
