<template>
    <div class="row">
        <client-only>
            <div class="col-12 p-5">
                <div class="card mt-5">
                    <div class="card-body" v-if="user">
                        <b-form-row>
                            <b-col col="sm">
                                <b-form-group label="نام">
                                    <b-form-input disabled :value="user.first_name"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col col="sm">
                                <b-form-group label="نام خانوادگی">
                                    <b-form-input disabled :value="user.last_name"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-form-row>
                        <b-form-row>
                            <b-col cols="sm">
                                <b-form-group label="شناسه">
                                    <b-form-input disabled :value="user.id"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-form-row>
                        <b-form-row>

                            <b-col col="sm">
                                <b-form-group label="ایمیل">
                                    <b-form-input disabled :value="user.email"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-form-row>
                        <b-form-row>
                            <b-col cols="sm">
                                <b-form-group label="شماره همراه">
                                    <b-form-input disabled :value="user.phone"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-form-row>


                    </div>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>

import api from "~/services/api";

export default {
    name: "find",
    layout: "main-content",
    data() {
        return {
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
