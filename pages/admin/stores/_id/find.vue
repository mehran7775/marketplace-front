<template>
    <div>
        <page-title title_text="ویرایش فروشگاه">
        </page-title>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <div class="row">
            <div class="col  shadow-sm bg-white rounded p-3">
                <div>
                    <b-tabs content-class="mt-3">
                        <b-tab title="اطلاعات فروشگاه" active>
                            <div class="bg-white py-4 my-2 px-5" style="border-radius: 10px;">
                                <div v-if="false" class="row justify-content-around align-content-center pb-3">
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
                                            <option :key="item.key" v-for="item in provinces" :value="item.id">{{
                                                    item.value
                                                }}
                                            </option>
                                        </select>
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

                                        <b-form-file
                                            placeholder="لوگو" class="form-control"
                                            v-model="formData.logo"></b-form-file>

                                        <b-link class="btn btn-link" target="_blank" :href="formData.logo">دانلود لوگو
                                        </b-link>

                                        <div class="m-auto pt-2 pr-2">
                                            <div class="w-100 text-right">
                                                <div class="my-3">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.phone_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    نمایش شماره موبایل
                                                </div>
                                            </div>
                                            <div class="w-100 text-right">
                                                <div class="my-3">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.email_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    نمایش ایمیل

                                                </div>
                                            </div>
                                            <div class="w-100 text-right">
                                                <div class="my-3">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.address_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    نمایش آدرس
                                                </div>
                                            </div>
                                            <div class="w-100 text-right">

                                                <div class="my-3">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.name_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    نمایش نام و نام خانوادگی
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
                                <div class="row justify-content-around align-content-center pb-3">
                                    <div class="col-sm col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="title"
                                            ref="title"
                                            placeholder="عنوان فارسی"
                                            v-model="formData.fa_name"
                                        />
                                    </div>
                                    <div class="col-sm col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            ref="name"
                                            placeholder="نام انگلیسی"
                                            v-model="formData.en_name"
                                        />
                                    </div>
                                    <div class="col-sm col-md-4 my-2">
                                        <select
                                            type="text"
                                            class="form-control"
                                            placeholder="استان"
                                            v-model="formData.province"
                                        >
                                            <option :value="null">انتخاب استان</option>
                                           <option :key="item.key" v-for="item in provinces" :value="item.id">{{ item.value }}</option>
                                        </select>
                                    </div>
                                    <div class="col-sm col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="city"
                                            ref="city"
                                            placeholder="شهر"
                                            v-model="formData.city"
                                        />
                                    </div>
                                    <div class="col-sm col-md-4 my-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="phone_number"
                                            ref="phone_number"
                                            placeholder="شماره همراه"
                                            v-model="formData.phone_number"
                                        />
                                    </div>
                                    <div class="col-sm col-md-4 my-2">

                                        <b-form-file
                                            placeholder="لوگو" class="form-control"
                                            accept="image/*"
                                            v-model="formData.logo"></b-form-file>

                                        <b-link class="btn btn-link" target="_blank" :href="formData.logo">دانلود لوگو</b-link>
                                    </div>

                                    <div class="col-sm col-md-6 my-2">
                                            <textarea
                                                rows="4"
                                                type="text"
                                                class="form-control"
                                                id="description"
                                                ref="description"
                                                placeholder="توضیحات"

                                                v-model="formData.description"
                                            >

                                            </textarea>
                                    </div>
                                    <div class="col-sm col-md-6 my-2">
                                    <textarea
                                        rows="4"
                                        class="form-control"
                                        id="lows"
                                        ref="logo"
                                        v-model="formData.shop_terms"
                                        placeholder="قوانین و مقررات فروشگاه">
                                    </textarea>
                                    </div>

                                    <div class="col-12 col-sm-2">
                                        <div class="m-auto pt-2 pr-2">
                                            <img :src="formData.logo"  style="width: 100%;border-radius: 10px"/>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-5">
                                        <div class="m-auto pt-2 pr-2">
                                            <hr>
                                            <label class="my-2">اطلاعات مورد نیاز از مشتری</label>
                                            <div class="w-100 text-right">

                                                <div class="my-3">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.name_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    نام و نام خانوادگی
                                                </div>
                                            </div>
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
                                                        <input type="checkbox" v-model="formData.address_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    آدرس
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
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-5">
                                        <div class="m-auto pt-2 pr-2">
                                            <hr>
                                            <label class="my-2">نمایش اطلاعات</label>
                                            <div class="w-100 text-right">

                                                <div class="my-3">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.show_phone_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    شماره تلفن
                                                </div>
                                            </div>
                                            <div class="w-100 text-right">
                                                <div class="my-3">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.show_email_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    ایمیل
                                                </div>
                                            </div>
                                            <div class="w-100 text-right">
                                                <div class="my-3">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.show_province_option">
                                                        <span class="slider round"></span>
                                                    </label>
                                                    استان
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <button @click="updateSetting" class="btn btn-primary">
                                    ذخیره تغییرات
                                </button>
                            </div>
                            <hr>
                            <div class="bg-white py-4 my-2 px-5" style="border-radius: 10px;">
                                <b-col col="sm">
                                    <b-form-group label="وضعیت فروشگاه">
                                        <select class="form-control" v-model="status">
                                            <option v-for="status in StoreStatus.storeStatus" :value="status.value">{{status.text}}</option>
                                        </select>
                                    </b-form-group>
                                </b-col>
                                <hr>
                                <button @click="changeStatus" class="btn btn-primary">
                                    تغییر وضعیت
                                </button>
                            </div>
                        </b-tab>
                        <b-tab title="تنظیمات ارسال" >
                            <div class="bg-white  py-4 my-2 px-5" style="border-radius: 10px;">
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
                                <hr>
                                <button @click="updateShippingSetting" class="btn btn-primary">
                                    ذخیره تغییرات
                                </button>
                            </div>
                        </b-tab>
                        <b-tab title="تنظیمات درگاه" >
                            <div class="bg-white py-4 my-2 px-5" style="border-radius: 10px;">
                                <!--<template v-for="port in ports" v-if="port.is_deleted == false">
                                    <hr>
                                    {{ port.en_name + ' ' + PortTypes.getType(port.type) }}
                                    <hr>
                                    <div class="row">
                                        <div v-if="gateway.type === port.type" class="col-sm my-2"
                                             v-for="gateway in gateways">
                                            <div :class="form.gateways.includes(gateway) ? 'card  border-primary' : 'card'"
                                                 style="width: 18rem;cursor: pointer;" @click="addGateway(gateway,port.id)">
                                                <div class="card-body">
                                                    <h5 class="card-title">{{ gateway.title }}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">
                                                        {{ GatewayTypes.getType(gateway.type) }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>-->
                                <template v-for="port in ports" v-if="port_types.includes(port.type)">
                                    <hr>
                                    {{port.fa_name + ' ' +  PortTypes.getType(port.type)}}
                                    <hr>
                                    <div class="row">
                                        <div v-if="gateway.type === port.type" class="col-sm my-2" v-for="gateway in gateways">
                                            <div :class="form.gateways.includes(gateway) ? 'card  border-primary' : 'card'" style="width: 18rem;cursor: pointer;" @click="addGateway(gateway,port.id)">
                                                <div :class="'card-body'">
                                                    <h5 class="card-title">{{ gateway.title }}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">{{ GatewayTypes.getType(gateway.type) }}</h6>
                                                    <hr>
                                                    <span class="text-success" v-if="isSelected(gateway)">ثبت شده</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <hr>
                                <button @click="updateGatewaySetting" class="btn btn-primary">
                                    ذخیره تغییرات
                                </button>
                            </div>
                        </b-tab>
                        <!--<b-tab title="وضعیت درگاه" >

                        </b-tab>-->
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import api from "~/services/api";
import GatewayTypes from "~/constants/GatewayTypes";
import PortTypes from "~/constants/PortTypes";
import {provinces} from "~/constants/Provinces";
import PageTitle from "~/components/main/pageTitle";
import StoreStatus from "~/constants/StoreStatus";
export default {
    components: {PageTitle},
    layout: "main-content",
    data() {
        return {
            provinces,
            StoreStatus,
            GatewayTypes,
            PortTypes,
            status : null,
            message: null,
            error: null,
            gateways: null,
            ports: null,
            form: {
                gateways: []
            },
            port_types : [

            ],
            selected_gateways : [],
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
                show_phone_option: false,
                show_email_option: false,
                show_province_option: false,
                shop_terms: null,
            },
            one: 1,
            zero: 0,
            store: {
                shipping_setting: {}
            }
        }
    },
    created() {
        this.getPorts()
        this.getGateways()
        this.getShippingData()
        this.getData()
    },
    methods: {
        isSelected(gateway){
            if (gateway.type == 'PF'){
                let key = gateway.port_config.sequence
                let sequences = [];
                for (let index in this.selected_gateways){
                    sequences.push(this.selected_gateways[index].port_config.sequence)
                }
                if (sequences.includes(key)){
                    return true
                }
            }
            if (gateway.type == 'Card'){
                let key = gateway.port_config.token
                let sequences = [];
                for (let index in this.selected_gateways){
                    sequences.push(this.selected_gateways[index].port_config.token)
                }
                if (sequences.includes(key)){
                    return true
                }
            }
            if (gateway.type == 'IVR'){
                let key = gateway.port_config.sequence
                let sequences = [];
                for (let index in this.selected_gateways){
                    sequences.push(this.selected_gateways[index].port_config.sequence)
                }
                if (sequences.includes(key)){
                    return true
                }
            }
            if (gateway.type == 'Dedicated'){
                let key = gateway.port_config.terminal_id
                let sequences = [];
                for (let index in this.selected_gateways){
                    sequences.push(this.selected_gateways[index].port_config.terminal_id)
                }
                if (sequences.includes(key)){
                    return true
                }
            }
        },
        changeStatus(){
          api.post('store/change-status/' + this.$route.params.id , {
              status : this.status
          }).then(response => {
              this.message = response.data.message
              this.getData()
          }).catch(({response}) => {
              this.error = response.data.data[Object.keys(response.data.data)[0]]
          })
        },
        getShippingData() {
            api.get('store/find/' + this.$route.params.id)
                .then(res => {
                    this.store = res.data.data
                })
        },
        updateShippingSetting() {
            api.post('store/update-shipping/' + this.$route.params.id, this.store.shipping_setting)
                .then(response => {
                    this.message = response.data.message
                    //this.getData()
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
                if (!response.data.data[Object.keys(response.data.data)[0]]){
                    this.error = response.data.message
                }
            })
        },
        getGateways() {
            api.getUrl('https://core.paystar.ir/api/gateway/user-gateways-data', this.$cookies.get('token'))
                .then(res => {
                    this.gateways = res.data.data
                    for (let key in this.gateways){
                        let item = this.gateways[key]
                        if (!this.port_types.includes(item.type)){
                            this.port_types.push(item.type)
                        }
                    }
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
            if (this.form.gateways.includes(gateway)) {
                var index = this.form.gateways.indexOf(gateway);
                if (index > -1) {
                    this.form.gateways.splice(index, 1);
                }
                return this.form.gateways;
            } else {
                this.form.gateways.push(gateway)
            }

        },
        updateGatewaySetting() {
            let form_data = new FormData();
            for (let item in this.form.gateways) {
                for (let key in Object.keys(this.form.gateways[item])) {
                    key = Object.keys(this.form.gateways[item])[key]
                    if (key === 'port_config') {
                        for (let config in Object.keys(this.form.gateways[item]['port_config'])) {
                            config = Object.keys(this.form.gateways[item]['port_config'])[config]
                            form_data.append('gateways' + '[' + item + ']' + '[port_config]' + '[' + config + ']', this.form.gateways[item]['port_config'][config]);
                        }
                    } else {
                        form_data.append('gateways' + '[' + item + ']' + '[' + key + ']', this.form.gateways[item][key]);
                    }
                }
            }

            api.post('store/update-gateways/' + this.$route.params.id, form_data, this.$cookies.get('token'))
                .then(response => {
                    this.message = response.data.message
                    this.getData()
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            })
        },
        getData() {
            api.get('store/find/' + this.$route.params.id, this.$cookies.get('token'))
                .then(res => {
                    this.store = res.data.data
                    for (let key in Object.keys(this.formData)) {
                        key = Object.keys(this.formData)[key]
                        this.formData[key] = this.store[key]
                        this.status = this.store.status
                    }
                    this.selected_gateways = this.store.gateways
                })
        },
        updateSetting() {
            if (typeof this.formData.logo === 'string') {
                this.formData.logo = null
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
                    if (this.formData[key] !== null) {
                        form_data.append(key, this.formData[key]);
                    }
                }
            }
            api.post('store/update/' + this.$route.params.id, form_data, this.$cookies.get('token'))
                .then(response => {
                    this.message = response.data.message
                   //this.getData()
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
                if (!response.data.data[Object.keys(response.data.data)[0]]){
                    this.error = response.data.message
                }
            })
        }
    }
}
</script>
