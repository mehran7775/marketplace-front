<template>
        <div class="row">
            <div class="col-12 p-5 mt-5">
                <div class="card" v-if="customers.length > 0">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">نام</th>
                                <th scope="col">نام خانوادگی</th>
                                <th scope="col">تلفن</th>
                                <th scope="col">ایمیل</th>
                                <th scope="col">وضعیت</th>
                                <th scope="col">جزییات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="customer in customers" :key="customer.id" >
                                <td>{{customer.id}}</td>
                                <td>{{customer.first_name}}</td>
                                <td>{{customer.last_name}}</td>
                                <td>{{customer.phone}}</td>
                                <td>{{customer.email}}</td>
                                <td><b-badge :variant="CustomerStatus.getStatus(customer.status).variant">{{CustomerStatus.getStatus(customer.status).text}}</b-badge></td>
                                <td><router-link class="btn btn-primary" :to="'/admin/customers/' + customer.id + '/find'">جزییات</router-link></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import CustomerStatus from "~/constants/CustomerStatus";
export default {
    name: "index",
    layout : "main-content",
    data(){
        return {
            CustomerStatus,
            customers : []
        }
    },
    async created(){
        let res = await this.$axios.get('customer/all')
        this.customers = res.data.data.data
    }
}
</script>

<style scoped>

</style>
