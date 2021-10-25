<template>
    <div>
        <page-title title_text="افزودن فروشگاه">
        </page-title>
        <div class="row">
            <div class="col-12">
                <div class="alert alert-info" role="alert" v-if="message">
                    {{ message }}
                </div>
                <div class="alert alert-danger" role="alert" v-if="error">
                    {{ error }}
                </div>
                <div v-show="wizard.show" class="bg-white my-3"
                     style="border-radius: 20px; box-shadow: 0 0 5px #8ce3d6;">
                    <div v-if="wizard.current_step > 0"
                         class="d-flex align-items-center justify-content-around mb-3 p-4">
                        <div @click="goto_step(1)"
                             :style="wizard.current_step > 0 ? 'cursor: pointer !important;' : ''">
                            <div>
                                <img src="./assets/shop.svg" width="64" height="64"
                                     :class="wizard.current_step > 0 ? 'filter_green' : 'filter_gray'">
                            </div>
                            <div class="text-center mt-2">
                                <span :style="wizard.current_step > 0 ? 'color: #00bea5' :'color: #d2d2d2'">اطلاعات فروشگاه</span>
                            </div>
                        </div>
                        <div>
                            <img src="./assets/left-arrow.svg" width="16" height="16"
                                 :class="wizard.current_step > 1 ? 'filter_green' : 'filter_gray'">
                        </div>
                        <div @click="goto_step(2)"
                             :style="wizard.current_step > 1 ? 'cursor: pointer !important;' : ''">
                            <div>
                                <img src="./assets/wallet.svg" width="64" height="64"
                                     :class="wizard.current_step > 1 ? 'filter_green' : 'filter_gray'">
                            </div>
                            <div class="text-center mt-2">
                                <span :style="wizard.current_step > 1 ? 'color: #00bea5' :'color: #d2d2d2'">تنظیمات ارسال</span>
                            </div>
                        </div>
                        <div>
                            <img src="./assets/left-arrow.svg" width="16" height="16"
                                 :class="wizard.current_step > 2 ? 'filter_green' : 'filter_gray'">
                        </div>
                        <div @click="goto_step(3)"
                             :style="wizard.current_step > 2 ? 'cursor: pointer !important;' : ''">
                            <div>
                                <img src="./assets/website.svg" width="64" height="64"
                                     :class="wizard.current_step > 2 ? 'filter_green' : 'filter_gray'">
                            </div>
                            <div class="text-center mt-2">
                                <span :style="wizard.current_step > 2 ? 'color: #00bea5' :'color: #d2d2d2'">تنظیمات درگاه پرداخت</span>
                            </div>
                        </div>
                    </div>

                    <hr class="custom_hr" v-if="wizard.current_step > 0">

                    <div class="p-5">
                        <div id="gateway_form" class="bg-white">
                            <div v-show="wizard.current_step === 1">
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
                                            <small v-if="validation_errors.fa_name" class="text-danger px-2">تکمیل این
                                                فیلد الزامی است.</small>
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
                                            <small v-if="validation_errors.en_name" class="text-danger px-2">تکمیل این
                                                فیلد الزامی است.</small>
                                        </div>
                                        <div class="col-4 col-md-4 my-2">
                                            <textarea
                                                type="text"
                                                class="form-control"
                                                id="description"
                                                ref="description"
                                                placeholder="توضیحات"

                                                v-model="formData.description"
                                            >

                                            </textarea>
                                        </div>
                                        <div class="col-4 col-md-4 my-2">
                                            <select
                                                type="text"
                                                class="form-control"
                                                placeholder="استان"
                                                v-model="formData.province"
                                            >
                                                <option :value="null">انتخاب استان</option>
                                                <option :key="item.key" v-for="item in provinces" :value="item.id">{{item.value}}</option>
                                            </select>
                                            <small v-if="validation_errors.province" class="text-danger px-2">تکمیل این
                                                فیلد الزامی است.</small>
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
                                            <small v-if="validation_errors.city" class="text-danger px-2">تکمیل این فیلد
                                                الزامی است.</small>
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
                                            <small v-if="validation_errors.phone_number" class="text-danger px-2">تکمیل
                                                این فیلد الزامی است.</small>
                                        </div>
                                        <div class="col-4 my-2">
                                            <b-form-file id="logo"
                                                         ref="logo" placeholder="لوگو" class="form-control"
                                                         v-model="formData.logo"></b-form-file>
                                            <small v-if="validation_errors.logo" class="text-danger px-2">تکمیل
                                                این فیلد الزامی است.</small>

                                            <div class="m-auto pt-2 pr-2">
                                                <hr>
                                                <label class="my-2">اطلاعات مورد نیاز از مشتری</label>
                                                <div class="w-100 text-right">
                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.phone_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        شماره موبایل
                                                    </div>
                                                </div>
                                                <div class="w-100 text-right">
                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.email_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        ایمیل

                                                    </div>
                                                </div>
                                                <div class="w-100 text-right">
                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.address_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        آدرس
                                                    </div>
                                                </div>
                                                <div class="w-100 text-right">

                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.name_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        نام و نام خانوادگی
                                                    </div>
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

                                <div class="d-flex align-items-center px-3 mt-4">
                                    <div>
                                    </div>
                                    <div class="mr-auto">
                                        <button
                                            @click="goto_step(2)"
                                            type="submit"
                                            class="btn btn-success px-4"
                                            style="border-radius: 10px"
                                        >
                                            <span>مرحله بعد</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div v-show="wizard.current_step === 2">
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
                                                placeholder="زمان ارسال شهر خود (روز)"
                                                v-model="formData.own_city_delivery_time"
                                            />
                                        </div>
                                        <div class="col-4 col-md-4 my-2">
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="time_send_others"
                                                ref="time_send_others"
                                                placeholder="زمان ارسال سایر شهر ها (روز)"
                                                v-model="formData.other_cities_delivery_time"
                                            />
                                        </div>
                                        <!--<div class="col-4 col-md-4 my-2 d-none">
                                            <select class="form-control" v-model="formData.own_city_payment_method">
                                                <option :value="null">
                                                    شیوه پرداخت شهر خود
                                                </option>
                                                <option selected value="0">
                                                    آنلاین
                                                </option>
                                                <option value="1">
                                                    در محل
                                                </option>-
                                            </select>
                                        </div>-->
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
                                        <!--<div class="col-4 my-2">
                                            <select class="form-control" v-model="formData.other_cities_payment_method">
                                                <option :value="null">
                                                    شیوه پرداخت سایر شهرها
                                                </option>
                                                <option selected value="0">
                                                    آنلاین
                                                </option>
                                                <option value="1">
                                                    در محل
                                                </option>
                                            </select>
                                        </div>-->
                                    </div>
                                </div>
                                <div class="d-flex align-items-center px-3 mt-4">
                                    <div>
                                        <button
                                            @click="goto_step(1)"
                                            type="submit"
                                            class="btn btn-success px-4"
                                            style="border-radius: 10px"
                                        >
                                            <span>مرحله قبل</span>
                                        </button>
                                    </div>
                                    <div class="mr-auto">
                                        <button
                                            @click="goto_step(3)"
                                            type="submit"
                                            class="btn btn-success px-4"
                                            style="border-radius: 10px"
                                        >
                                            <span>مرحله بعد</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-show="wizard.current_step === 3">
                                <template v-for="port in ports">
                                    <hr>
                                    {{ port.fa_name + ' ' + PortTypes.getType(port.type) }}
                                    <hr>
                                    <div class="row">
                                        <div v-if="gateway.type === port.type" class="col-sm my-2"
                                             v-for="gateway in gateways">
                                            <div
                                                :class="formData.gateways.includes(gateway) ? 'card  border-primary' : 'card'"
                                                style="width: 18rem;cursor: pointer;"
                                                @click="addGateway(gateway,port.id)">
                                                <div class="card-body">
                                                    <h5 class="card-title">{{ gateway.title }}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">
                                                        {{ GatewayTypes.getType(gateway.type) }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <div class="d-flex align-items-center px-3 mt-4">
                                    <div>
                                        <button
                                            @click="goto_step(2)"
                                            type="submit"
                                            class="btn btn-success px-4"
                                            style="border-radius: 10px"
                                        >
                                            <span>مرحله قبل</span>
                                        </button>
                                    </div>
                                    <div class="mr-auto">
                                        <button
                                            @click="createStore"
                                            type="submit"
                                            class="btn btn-success px-4"
                                            style="border-radius: 10px"
                                        >
                                            <span>ثبت فروشگاه</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
import {provinces} from '~/constants/Provinces'
export default {
    layout: "main-content",
    data() {
        return {
            provinces,
            GatewayTypes,
            PortTypes,
            active_component: "recordgetway",
            wizard: {
                show: true,
                current_step: 1,
                navigable: true,
            },
            step: 1,
            message: null,
            error: null,
            gateways: null,
            ports: null,
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
                own_city_payment_method: 0,
                other_cities_payment_method: 0,
                gateways: []
            },
            validation_errors: {
                fa_name: null,
                en_name: null,
                description: null,
                province: null,
                city: null,
                phone_number: null,
                logo: null,
                name_option: false,
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
        getPorts() {
            api.get('gateway/get-active-ports', this.$cookies.get('token')).then(res => {
                this.ports = res.data.data.data
            })
        },
        addGateway(gateway, port_id) {
            gateway.port_id = port_id,
                gateway.port_type = gateway.type
            if (this.formData.gateways.includes(gateway)) {
                var index = this.formData.gateways.indexOf(gateway);
                if (create > -1) {
                    this.formData.gateways.splice(create, 1);
                }
                return this.formData.gateways;
            } else {
                this.formData.gateways.push(gateway)
            }

        },
        goto_step(selected_step) {
            if (this.validate()) {
                this.wizard.current_step = selected_step;
            }
        },
        validate() {
            let spy = this.validation_errors
            Object.keys(spy).forEach(function (key) {
                spy[key] = null
            });
            let res = true
            if (!this.formData.fa_name) {
                this.validation_errors.fa_name = true
                res = false
            }
            if (!this.formData.phone_number) {
                this.validation_errors.phone_number = true
                res = false
            }
            if (!this.formData.en_name) {
                this.validation_errors.en_name = true
                res = false
            }
            if (!this.formData.logo) {
                this.validation_errors.logo = true
                res = false
            }
            if (!this.formData.province) {
                this.validation_errors.province = true
                res = false
            }
            if (!this.formData.city) {
                this.validation_errors.city = true
                res = false
            }
            return res
        },
        createStore() {
            if (!this.validate()) {
                //alert(this.validate())
            } else {
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
                        if (key === 'gateways') {
                            for (let item in this.formData.gateways) {
                                for (let key in Object.keys(this.formData.gateways[item])) {
                                    key = Object.keys(this.formData.gateways[item])[key]
                                    if (key === 'port_config') {
                                        for (let config in Object.keys(this.formData.gateways[item]['port_config'])) {
                                            config = Object.keys(this.formData.gateways[item]['port_config'])[config]
                                            form_data.append('gateways' + '[' + item + ']' + '[port_config]' + '[' + config + ']', this.formData.gateways[item]['port_config'][config]);
                                        }
                                    } else {
                                        form_data.append('gateways' + '[' + item + ']' + '[' + key + ']', this.formData.gateways[item][key]);
                                    }
                                }
                            }
                        }
                    }
                }
                api.post('store/create', form_data, this.$cookies.get('token')).then(response => {
                    this.message = response.data.message
                }).catch(({response}) => {
                    this.error = response.data.data[Object.keys(response.data.data)[0]]
                })
            }


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
.filter_green {
    filter: invert(68%) sepia(25%) saturate(7218%) hue-rotate(130deg) brightness(91%) contrast(101%);
}

.filter_gray {
    filter: invert(87%) sepia(1%) saturate(200%) hue-rotate(314deg) brightness(101%) contrast(86%);
}

.label-file {
    border: 1px solid #ccc;
    width: fit-content;
    cursor: pointer;
    min-width: 200px;
}

input[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
}

.custom-file-label {
    border: none;
    background: none;
}

.custom-file-label::after {
    display: none;
}
</style>
