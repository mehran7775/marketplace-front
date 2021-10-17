<template>
    <div>
        <page-title title_text="افزودن فروشگاه">
            <div @click="createStore">
                <Xbutton class="px-4" text="ذخیره تغییرات"></Xbutton>
            </div>
        </page-title>
        <div class="row">
            <div class="col  shadow-sm bg-white rounded p-3">
                <div>
                    <b-tabs content-class="mt-3">
                        <b-tab title="اطلاعات فروشگاه" active>
                            <div class="col w-100" id="record_getway">
                                <div class="row justify-content-around align-content-center pb-3">
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="title"
                                            ref="title"
                                            placeholder="عنوان فارسی"
                                            v-model="formData.fa_name"
                                        />
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            ref="name"
                                            placeholder="نام انگلیسی"
                                            v-model="formData.en_name"
                                        />
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="description"
                                            ref="description"
                                            placeholder="توضیحات"
                                            v-model="formData.description"
                                        />
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="privance"
                                            ref="privance"
                                            placeholder="استان"
                                            v-model="formData.province"
                                        />
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="city"
                                            ref="city"
                                            placeholder="شهر"
                                            v-model="formData.city"
                                        />
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="phone_number"
                                            ref="phone_number"
                                            placeholder="شماره همراه"
                                            v-model="formData.phone_number"
                                        />
                                    </div>
                                    <div class="col-4 my-2">
                                        <b-form-file id="logo"
                                                     ref="logo" placeholder="لوگو" class="form-control"
                                                     v-model="formData.logo"></b-form-file>

                                        <div class="m-auto pt-2 pr-2">
                                            <div class="w-100 text-right">
                                                <input type="checkbox" id="show_number" name="show_number"
                                                       v-model="formData.name_option"
                                                />
                                                <label for="show_number">نمایش شماره موبایل</label>
                                            </div>
                                            <div class="w-100 text-right">
                                                <input type="checkbox" id="show_email" name="show_email" checked
                                                       v-model="formData.address_option"
                                                />
                                                <label for="show_email">نمایش ایمیل</label>
                                            </div>
                                            <div class="w-100 text-right">
                                                <input type="checkbox" id="show_address" name="show_address"
                                                       v-model="formData.email_option"
                                                />
                                                <label for="show_address">نمایش آدرس</label>
                                            </div>
                                            <div class="w-100 text-right">
                                                <input type="checkbox" id="show_fullname" name="show_fullname"
                                                       v-model="formData.phone_option"
                                                />
                                                <label for="show_fullname">نمایش نام و نام خانوادگی</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-8 my-2">
                                    <textarea
                                        rows="6"
                                        class="form-control"
                                        id="lows"
                                        ref="logo"
                                        v-model="formData.shop_terms"
                                        placeholder="قوانین و مقررات فروشگاه">
                                    </textarea>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="تنظیمات ارسال">
                            <div class="col w-100" id="info_send">
                                <div class="row pb-3">
                                    <div class="col-4 col-md-4 my-2">
                                        <select class="form-control" v-model="formData.shipping_region">
                                            <option :value="null">منطقه ارسال</option>
                                            <option value="0">شهر خودم</option>
                                            <option value="1">همه شهرها</option>
                                        </select>
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="time_send_self"
                                            ref="time_send_self"
                                            placeholder="زمان ارسال شهر خود (دقیقه)"
                                            v-model="formData.own_city_delivery_time"
                                        />
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="time_send_others"
                                            ref="time_send_others"
                                            placeholder="زمان ارسال سایر شهر ها (دقیقه)"
                                            v-model="formData.other_cities_delivery_time"
                                        />
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <select class="form-control"  v-model="formData.own_city_payment_method">
                                            <option :value="null">
                                                شیوه پرداخت شهر خود
                                            </option>
                                            <option value="0">
                                                آنلاین
                                            </option>
                                            <option value="1">
                                                در محل
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="cost_send_self"
                                            ref="cost_send_self"
                                            placeholder="هزینه ارسال شهر خود (ریال)"
                                            v-model="formData.own_city_shipping_cost"
                                        />
                                    </div>
                                    <div class="col-4 col-md-4 my-2">
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="cost_send_others"
                                            ref="cost_send_others"
                                            placeholder="هزینه ارسال سایر شهر ها (ریال)"
                                            v-model="formData.other_cities_shipping_cost"
                                        />
                                    </div>
                                    <div class="col-4 my-2">
                                        <select class="form-control"  v-model="formData.other_cities_payment_method">
                                            <option :value="null">
                                                شیوه پرداخت سایر شهرها
                                            </option>
                                            <option value="0">
                                                آنلاین
                                            </option>
                                            <option value="1">
                                                در محل
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="تنظیمات درگاه بانکی">
                            <template v-for="port in ports" v-if="port.is_deleted == false">
                                <hr>
                                {{port.en_name + ' ' +  PortTypes.getType(port.type)}}
                                <hr>
                                <div class="row">
                                    <div v-if="gateway.type === port.type" class="col-sm my-2" v-for="gateway in gateways">
                                        <div :class="formData.gateways.includes(gateway) ? 'card  border-primary' : 'card'" style="width: 18rem;cursor: pointer;" @click="addGateway(gateway,port.id)">
                                            <div class="card-body">
                                                <h5 class="card-title">{{ gateway.title }}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">{{ GatewayTypes.getType(gateway.type) }}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";
import GatewayTypes from "~/constants/GatewayTypes";
import PortTypes from "~/constants/PortTypes";
export default {
    layout: "main-content",
    data() {
        return {
            GatewayTypes,
            PortTypes,
            active_component: "recordgetway",
            step: 1,
            gateways: null,
            ports : null,
            formData: {
                fa_name: null,
                en_name: null,
                description: null,
                province: null,
                city: null,
                phone_number: null,
                logo: null,
                name_option: false,
                address_option: false,
                email_option: false,
                phone_option: false,
                shop_terms: null,
                shipping_region: null,
                own_city_delivery_time: null,
                other_cities_delivery_time: null,
                own_city_shipping_cost: null,
                other_cities_shipping_cost: null,
                own_city_payment_method: null,
                other_cities_payment_method: null,
                gateways : []
            }
        };
    },
    components: {
        PageTitle,
    },
    methods: {
        getGateways() {
            api.getUrl('https://core.paystar.ir/api/gateway/user-gateways-data', this.$cookies.get('token'))
                .then(res => {
                    this.gateways = res.data.data
                })
        },
        getPorts(){
          api.get('gateway/get-ports',this.$cookies.get('token')).then(res => {
              this.ports = res.data.data.data
          })
        },
        addGateway(gateway,port_id){
            gateway.port_id = port_id,
            gateway.port_type = gateway.type
            if (this.formData.gateways.includes(gateway)){
                    var index = this.formData.gateways.indexOf(gateway);
                    if (index > -1) {
                        this.formData.gateways.splice(index, 1);
                    }
                    return this.formData.gateways;
            }else {
                this.formData.gateways.push(gateway)
            }

        },
        validate() {
            if (!this.formData.fa_name) {
                return 'نام فارسی ضروری است'
            }
            if (!this.formData.en_name) {
                return 'نام انگلیسی ضروری است'
            }
            if (!this.formData.logo) {
                return 'لوگو ضروری است'
            }
            if (!this.formData.province) {
                return 'استان ضروری است'
            }
            if (!this.formData.city) {
                return 'شهر ضروری است'
            }
            return false
        },
        createStore() {
            if (this.validate()) {
                alert(this.validate())
                return
            }


            let form_data = new FormData();
            for (let key in this.formData) {
                if (this.formData[key] === true || this.formData[key] === false) {
                    if (this.formData[key] === true) {
                        form_data.append(key, 1);
                    }
                    if (this.formData[key] === false) {
                        form_data.append(key, 0);
                    }
                } else {
                    if (this.formData[key] !== null && key !== 'gateways') {
                        form_data.append(key, this.formData[key]);
                    }
                    if (key === 'gateways'){
                        for (let item in this.formData.gateways){
                            for(let key in Object.keys(this.formData.gateways[item])){
                                key = Object.keys(this.formData.gateways[item])[key]
                                if (key === 'port_config'){
                                    for(let config in Object.keys(this.formData.gateways[item]['port_config'])){
                                        config = Object.keys(this.formData.gateways[item]['port_config'])[config]
                                        form_data.append('gateways' + '['+ item +']' + '[port_config]' + '['+ config +']', this.formData.gateways[item]['port_config'][config]);
                                    }
                                }else {
                                    form_data.append('gateways' + '['+ item +']' + '['+ key +']', this.formData.gateways[item][key]);
                                }
                            }
                        }
                    }
                }
            }
            api.post('store/create', form_data, this.$cookies.get('token')).then(response => {
                alert(response.data.message)
            }).catch(({response}) => {
                alert(response.data.data[Object.keys(response.data.data)[0]])
            })
        }
    },
    mounted() {
        this.getPorts()
        this.getGateways()
    }
}
;
</script>

<style>
</style>
