<template>
    <div>
        <page-title title_text="مشتریان" icon="customer">

        </page-title>

        <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="customers">

            <div class="px-3">
                <div class="table-responsive">
                    <table class="table  table-responsive table-borderless text-center">
                        <thead>
                        <tr>
                            <th scope="col" style="background-color: #eee;  border-radius: 0 16px 16px 0;">#</th>
                            <th scope="col" style="background-color: #eee;">نام</th>
                            <th scope="col" style="background-color: #eee;">نوع</th>
                            <th scope="col" style="background-color: #eee;">تلفن</th>
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
                            <td><b-badge :variant="CustomerStatus.getStatus(customer.status).variant">{{CustomerStatus.getStatus(customer.status).text}}</b-badge></td>
                            <td><router-link class="btn btn-primary" :to="'/admin/customers/' + customer.id + '/find'">جزییات</router-link></td>
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
    components: {PageTitle},
    layout : "main-content",
    data(){
        return {
            CustomerStatus,
            customers : null,
            per_page : 15
        }
    },
    methods : {
        async get_data(url) {
            let res = await api.get(url + '&perpage=' + this.per_page)
            this.customers = res.data.data
        },
    },
    async created(){
        let res = await api.get('customer/all' + '?perpage=' + this.per_page)
        this.customers = res.data.data
    }
}
</script>

<style scoped>

</style>
