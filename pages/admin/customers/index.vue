<template>
    <div class="w-100">
        <page-title title_text="مشتریان" icon="customer">

        </page-title>

        <div class="bg-white shadow-sm p-3 my-3" style="border-radius: 10px;">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4 my-2">
                    <input class="form-control" placeholder="نام" v-model="filter_first_name">
                </div>
                <div class="col-12 col-sm-6 col-lg-4 my-2">
                    <input class="form-control" placeholder="نام خانوادگی" v-model="filter_last_name">
                </div>
                <div class="col-12 col-sm-6 col-lg-4 my-2">
                    <input class="form-control" placeholder="شماره موبایل" v-model="filter_phone_number">
                </div>
                <div class="col-12 col-sm-6 col-lg-4 my-2">
                    <date-picker
                    v-model="filter_registered_at"
                    color="#00c1a4"
                    format="YYYY-MM-DD HH:mm:ss"
                    display-format="dddd jDD jMMMM jYYYY HH:mm"
                    type="datetime"
                    placeholder="تاریخ عضویت"
                    />
                    <div v-show="filter_registered_at" class="position-relative text-left delete-filter ">
                        <fa icon="times" class="fa-md cursor_pointer" @click="filter_registered_at= null"></fa>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 my-2">
                    <select class="form-control" v-model="filter_status">
                        <option :value="null">وضعیت</option>
                        <option v-for="status in CustomerStatus.userStatus" :value="status.value">
                            {{status.text}}
                        </option>
                    </select>
                </div>
                <div class="col-sm my-2">
                    <div>
                        <Xbutton
                        :on_click="()=> get_data(customers.first_page_url)"
                        :class="query ? 'mr-2' : 'btn-block'"
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
                        class="mr-3"
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
        <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="customers">
            <div class="px-3">
                <div class="overflow-auto">
                    <table class="table table-borderless text-center">
                        <thead>
                        <tr>
                            <th scope="col" style="background-color: #eee;  border-radius: 0 16px 16px 0;">#</th>
                            <th scope="col" style="background-color: #eee;">نام</th>
                            <th scope="col" style="background-color: #eee;">نام خانوادگی</th>
                            <th scope="col" style="background-color: #eee;">تلفن</th>
                            <th scope="col" style="background-color: #eee;">تاریخ عضویت</th>
                            <th scope="col" style="background-color: #eee;">وضعیت</th>
                            <th scope="col" style="background-color: #eee;border-radius: 16px 0px 0px 16px;">جزییات</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(customer, index) in customers.data" :key="index">
                            <td>{{customer.id}}</td>
                            <td>{{customer.first_name}}</td>
                            <td>{{customer.last_name}}</td>
                            <td>{{customer.phone}}</td>
                            <td v-text="customer.registered_at? customer.registered_at : '-'"></td>
                            <td><b-badge :variant="CustomerStatus.getStatus(customer.status).variant">{{CustomerStatus.getStatus(customer.status).text}}</b-badge></td>
                            <td>
                                <nuxt-link :to="'/admin/customers/' + customer.id + '/find'">
                                    <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm" v-b-tooltip.hover title="جزئیات">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#bbb"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                    </span>
                                </nuxt-link>
                                <nuxt-link :to="`/admin/customers/${customer.id}/orders`">
                                    <span v-b-tooltip.hover title="سفارشات"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#a0a0a0"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"/></svg></span>
                                </nuxt-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr v-if="customers.next_page_url || customers.prev_page_url">
            <pagination :data="customers" :get_data="get_data" :perpage="per_page"></pagination>
        </div>
    </div>
    
</template>

<script>

import CustomerStatus from "~/constants/CustomerStatus";
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";
export default {
    name: "index",
    components: {PageTitle, DatePicker: () => import('vue-persian-datetime-picker')},
    layout : "main-content",
    data(){
        return {
            CustomerStatus,
            customers : null,
            per_page : 15,
            filter_status : null,
            filter_first_name : null,
            filter_last_name : null,
            filter_phone_number : null,
            filter_registered_at : null,
            btnDisableAction: false,
            laodingSpinnerAction: false,
            btnDisableRemove: false,
            laodingSpinnerRemove: false,
        }
    },
    computed: {
        query() {
            let res = '';
            if (this.filter_first_name != null) {
                res = res + '&query[first_name]=' + this.filter_first_name;
            }
            if (this.filter_last_name != null) {
                res = res + '&query[last_name]=' + this.filter_last_name;
            }
            if (this.filter_status != null) {
                res = res + '&query[status]=' + this.filter_status;
            }
              if (this.filter_registered_at != null) {
                res = res + '&query[registered_at]=' + this.filter_registered_at
            }
              if (this.filter_phone_number != null) {
                res = res + '&query[phone_number]=' + this.filter_phone_number;
            }
            return res;
        }
    },
    methods : {
        resetQuery() {
            this.filter_first_name = null;
            this.filter_last_name = null;
            this.filter_status = null;
            this.filter_phone_number = null;
            this.filter_registered_at = null;
        },
        async get_data(url, removeFilter= null) {
            if(removeFilter){
                this.btnDisableRemove= true
                this.laodingSpinnerRemove= true
            }else{
                this.btnDisableAction= true
                this.laodingSpinnerAction= true
            }
           console.log(this.query)
            let res= await api.getUrl(url + this.query + '&perpage=' + this.per_page)
            .finally(()=> {
                this.btnDisableAction= false
                this.laodingSpinnerAction= false
                this.btnDisableRemove= false
                this.laodingSpinnerRemove= false
            })
            this.customers = res.data.data
            
        },
        reset_and_get() {
            this.resetQuery();
            this.get_data(this.customers.path + '?page=1','removeFilter');
        },
    },
    async created(){
        let res = await api.get('customer/all' + '?perpage=' + this.per_page)
        this.customers = res.data.data
        
    }
}
</script>

<style scoped>
thead,tbody{
    width: 100%;
}
</style>
