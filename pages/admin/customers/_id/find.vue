<template>
    <div class="row">
        <div class="col-12 p-5">
            <div class="card mt-5">
                <div class="card-body" v-if="user">
                    <b-form-row>
                        <b-col col="sm">
                            <b-form-group label="نام">
                                <b-form-input v-model="user.first_name"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col col="sm">
                            <b-form-group label="نام خانوادگی">
                                <b-form-input v-model="user.last_name"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col cols="sm">
                            <b-form-group label="شناسه">
                                <b-form-input v-model="user.id"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>

                        <b-col col="sm">
                            <b-form-group label="ایمیل">
                                <b-form-input v-model="user.email"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col cols="sm">
                            <b-form-group label="شماره همراه">
                                <b-form-input v-model="user.phone"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col cols="sm">
                            <b-form-group label="وضعیت">
                                <b-form-select v-model="user.status">
                                    <option v-for="(status, index) in CustomerStatus.userStatus" :key="index" :value="status.value">{{status.text}}</option>
                                </b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    


                </div>
            </div>
        </div>
    </div>
</template>

<script>

import api from "~/services/api";
import CustomerStatus from '~/constants/CustomerStatus'

export default {
    name: "find",
    layout: "main-content",
    data() {
        return {
            CustomerStatus,
            user: null,
            orders : []
        }
    },
    async mounted() {
        let res = await api.get('customer/find/' + this.$route.params.id)
        this.user = res.data.data
        let response = await  api.get('order/customer/' + this.$route.params.id)
        this.orders = response.data.data
    }

}
</script>

<style scoped>

</style>
