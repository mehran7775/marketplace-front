<template>
    <div>
        <page-title title_text="تنظیمات ارسال" icon="product">
        <div >
              <Xbutton
                :on_click="()=> updateSetting()"
                :class="query ? 'mr-2' : null"
                text="بروزرسانی تنظیمات"
                variant="success"
                :disabled="btnDisabled"
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
        <div class="bg-white shadow-sm py-4 my-2 px-5" style="border-radius: 10px;">
            <b-form-row>
                <b-col col="sm">
                    <b-form-group label="منطقه ارسال">
                        <select class="form-control" v-model="store.shipping_setting.shipping_region">
                            <option :value="zero">استان خودم</option>
                            <option :value="one">سراسر کشور</option>
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
                    <b-form-group label="هزینه ارسال شهر خود (تومان)">
                        <b-form-input type="number"
                                    v-model="enOwnPrice"></b-form-input>
                        <small v-show="enOwnPrice" class="text-success px-2">
                            {{moneyFormat(enOwnPrice)}}
                            تومان
                        </small>
                    </b-form-group>
                </b-col>
                <b-col col="sm">
                    <b-form-group label="هزینه ارسال سایر شهر ها (تومان)">
                        <b-form-input type="number"
                                    v-model="enOtherPrice"></b-form-input>
                        <small v-show="enOtherPrice" class="text-success px-2">
                            {{moneyFormat(enOtherPrice)}}
                            تومان
                        </small>
                    </b-form-group>
                </b-col>
            </b-form-row>
        </div>
    
    </div>
</template>

<script>
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";
import separatePrice from '~/mixins/separatePrice'

export default {
    name: "shipping",
    mixins: [ separatePrice ],
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
            },
            btnDisabled: false,
            laodingSpinner: false
        }
    },
    async created() {
        if(process.client){
         await this.getData()
        }
    },
    computed:{
        enOwnPrice:{
            get(){
                return this.store.shipping_setting.own_city_shipping_cost
            },
            set(value){
                this.store.shipping_setting.own_city_shipping_cost = this.changetoEnNumber( value )
            }
        },
        enOtherPrice:{
            get(){
                return this.store.shipping_setting.other_cities_shipping_cost
            },
            set(value){
                this.store.shipping_setting.other_cities_shipping_cost = this.changetoEnNumber( value )
            }
        },

    },
    methods: {
        getData(){
            api.get('store/find/' + this.$route.params.store_slug, this.$cookies.get('token'))
                .then(res => {
                    this.store = res.data.data
                })
        },
        updateSetting() {
            this.btnDisabled= true
            this.laodingSpinner= true
            let store= Object.assign({},this.store.shipping_setting)
            store.own_city_shipping_cost *= 10
            store.other_cities_shipping_cost *=10
            api.post('store/update-shipping/' + this.$route.params.store_slug, store, this.$cookies.get('token'))
                .then(response => {
                    this.message = response.data.message
                    this.getData()
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            })
            .finally(()=> {
                this.btnDisabled= false
                this.laodingSpinner= false
            })
        },
        moneyFormat(price) {
            if (!price){
                return 0
            }
            const pieces = parseFloat(price).toFixed(0).split("");
            let ii = pieces.length;
            while ((ii -= 3) > 0) {
                pieces.splice(ii, 0, ",");
            }
            return pieces.join("");
        },
    }
}
</script>

<style scoped>

</style>
