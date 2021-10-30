<template>
    <div>
        <page-title title_text="تنظیمات ارسال" icon="product">
            <div @click="updateSetting">
                <Xbutton variant="success"  v-text="'بروزرسانی تنظیمات'"></Xbutton>
            </div>
        </page-title>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <div class="bg-white shadow-sm py-4 my-2 px-5" style="border-radius: 10px;">
            <b-form-row>
                <b-col col="sm">
                    <b-form-group label="منطقه ارسال">
                        <select class="form-control" v-model="store.shipping_setting.shipping_region">
                            <option :value="zero">شهر خودم</option>
                            <option :value="one">همه شهرها</option>
                        </select>
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col col="sm">
                    <b-form-group label="زمان ارسال شهر خود (روز)">
                        <b-form-input type="number"
                                      v-model="store.shipping_setting.own_city_delivery_time"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col col="sm">
                    <b-form-group label="زمان ارسال سایر شهر ها (روز)">
                        <b-form-input type="number"
                                      v-model="store.shipping_setting.other_cities_delivery_time"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col col="sm">
                    <b-form-group label="هزینه ارسال شهر خود (ریال)">
                        <b-form-input type="number"
                                      v-model="store.shipping_setting.own_city_shipping_cost"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col col="sm">
                    <b-form-group label="هزینه ارسال سایر شهر ها (ریال)">
                        <b-form-input type="number"
                                      v-model="store.shipping_setting.other_cities_shipping_cost"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>
            <!--<b-form-row>
                <b-col col="sm">
                    <b-form-group label="شیوه پرداخت شهر خود">
                        <select class="form-control" v-model="store.shipping_setting.own_city_payment_method">
                            <option :value="zero" :selected="store.shipping_setting.own_city_payment_method === 0">آنلاین
                            </option>
                            <option :value="one" :selected="store.shipping_setting.own_city_payment_method === 1">در محل
                            </option>
                        </select>
                    </b-form-group>
                </b-col>
                <b-col col="sm">
                    <b-form-group label="شیوه پرداخت سایر شهرها">
                        <select class="form-control" v-model="store.shipping_setting.other_cities_payment_method">
                            <option :value="zero" :selected="store.shipping_setting.other_cities_payment_method === 0">
                                آنلاین
                            </option>
                            <option :value="one" :selected="store.shipping_setting.other_cities_payment_method === 1">در
                                محل
                            </option>
                        </select>
                    </b-form-group>
                </b-col>
            </b-form-row>-->
        </div>
    </div>
</template>

<script>
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";

export default {
    name: "shipping",
    components: {PageTitle},
    layout: "main-content",
    data() {
        return {
            message: null,
            error: null,
            one : 1,
            zero : 0,
            store: {
                shipping_setting: {}
            }
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData(){
            api.get('store/find/' + this.$route.params.store_slug, this.$cookies.get('token'))
                .then(res => {
                    this.store = res.data.data
                })
        },
        updateSetting() {
            api.post('store/update-shipping/' + this.$route.params.store_slug, this.store.shipping_setting, this.$cookies.get('token'))
                .then(response => {
                    this.message = response.data.message
                    this.getData()
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            })
        }
    }
}
</script>

<style scoped>

</style>
