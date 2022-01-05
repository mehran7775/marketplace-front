<template>
    <div>
        <client-only>
         <div class="w-100">
                <div v-if="onClient" class="w-100">
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
                                            <div class="col-12 col-md-4 my-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="title"
                                                    ref="title"
                                                    placeholder="عنوان فارسی"
                                                    v-model="formData.fa_name"
                                                />
                                            </div>
                                            <div class="col-12 col-md-4 my-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    ref="name"
                                                    placeholder="نام انگلیسی"
                                                    v-model="formData.en_name"
                                                />
                                            </div>
                                            <div class="col-12 col-md-4 my-2">
                                            <client-only placeholder="loading...">
                                                <ckeditor-nuxt v-model="formData.description" :config="editorConfig"  ref="description"/>
                                            </client-only>
                                            </div>
                                            <div class="col-12 col-md-4 my-2">
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
                                            <div class="col-12 col-md-4 my-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="city"
                                                    ref="city"
                                                    placeholder="شهر"
                                                    v-model="formData.city"
                                                />
                                            </div>
                                            <div class="col-12 col-md-4 my-2">
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
                                                    v-model="formData.logo">
                                                </b-form-file>
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
                                                <client-only placeholder="loading...">
                                                    <ckeditor-nuxt v-model="formData.shop_terms" :config="editorConfig2"   id="lows"
                                                    ref="logo"/>
                                                </client-only>
                                            </div>
                                        </div>
                                        <div class="row justify-content-around align-content-center pb-3">
                                            <div class="col-12 col-lg-4 my-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="title"
                                                    ref="title"
                                                    placeholder="عنوان فارسی"
                                                    v-model="formData.fa_name"
                                                />
                                            </div>
                                            <div class="col-12 col-lg-4 my-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    ref="name"
                                                    placeholder="نام انگلیسی"
                                                    v-model="formData.en_name"
                                                />
                                            </div>
                                            <div class="col-12 col-lg-4 my-2">
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
                                            <div class="col-12 col-lg-4 my-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="city"
                                                    ref="city"
                                                    placeholder="شهر"
                                                    v-model="formData.city"
                                                />
                                            </div>
                                            <div class="col-12 col-lg-4 my-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="phone_number"
                                                    ref="phone_number"
                                                    placeholder="شماره همراه"
                                                    v-model="formData.phone_number"
                                                />
                                            </div>
                                            <div class="col-12 col-lg-4 my-3">
                                                <div class="row">
                                                    <div class="d-flex align-items-center mr-4 ">
                                                        <div class="pb-4">
                                                            <b-form-file
                                                                v-model="formData.logo"
                                                                accept="image/*"
                                                                class="rounded"
                                                                style="width: max-content;box-shadow:0 0 0 0.5px whitesmoke;"
                                                                placeholder="یک فایل انتخاب کنید"
                                                                plain
                                                                @change="onFileChange"
                                                            ></b-form-file>
                                                            <small v-if="validation_errors.logo" class="text-danger px-2">تکمیل
                                                                    این فیلد الزامی است.</small>
                                                            <small v-if="validation_errors.logo_size" class="text-danger px-2">
                                                                    حجم لوگو نباید بیشتر از یک مگابایت باشد
                                                            </small>
                                                            <small v-if="validation_errors.logo_type" class="text-danger px-2">
                                                                    فرمت لوگو معتبر نمی باشد
                                                            </small>
                                                        </div>
                                                        <div class="m-auto pt-2 pr-2">
                                                            <img width="80" height="50"
                                                            :src="urlLogo ? urlLogo :formData.logo"
                                                            class="rounded"
                                                            style="max-width:80px;max-height:50px"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 my-2">
                                                <client-only placeholder="loading...">
                                                    <ckeditor-nuxt v-model="formData.description" :config="editorConfig"  id="description"
                                                        ref="description"/>
                                                </client-only>
                                            </div>
                                            <div class="col-12 my-2">
                                                <client-only placeholder="loading...">
                                                    <ckeditor-nuxt v-model="formData.shop_terms" :config="editorConfig2"   id="lows"
                                                    ref="logo"/>
                                                </client-only>
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
                                                            موقعیت فروشگاه (استان و شهر)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <Xbutton
                                        :on_click="()=> updateSetting()"
                                        class="btn"
                                        :variant="'primary'"
                                        text="ذخیره تغییرات"
                                        :disable="btnDisable"
                                        >
                                            <template #spinner>
                                                <b-spinner v-show="laodingSpinner" small ></b-spinner>
                                            </template>            
                                        </Xbutton>
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
                                                <b-form-group label="هزینه ارسال شهر خود (تومان)">
                                                    <b-form-input type="number"
                                                                v-model="store.shipping_setting.own_city_shipping_cost"></b-form-input>
                                                </b-form-group>
                                            </b-col>
                                            <b-col col="sm">
                                                <b-form-group label="هزینه ارسال سایر شهر ها (تومان)">
                                                    <b-form-input type="number"
                                                                v-model="store.shipping_setting.other_cities_shipping_cost"></b-form-input>
                                                </b-form-group>
                                            </b-col>
                                        </b-form-row>
                                        <hr>
                                        <Xbutton
                                        :on_click="()=> updateShippingSetting()"
                                        class="btn"
                                        :variant="'primary'"
                                        text="ذخیره تغییرات"
                                        :disable="btnDisable"
                                        >
                                            <template #spinner>
                                                <b-spinner v-show="laodingSpinner" small ></b-spinner>
                                            </template>            
                                        </Xbutton>
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
                                        <Xbutton
                                        :on_click="()=> updateGatewaySetting()"
                                        class="btn"
                                        :variant="'primary'"
                                        text="ذخیره تغییرات"
                                        :disable="btnDisable"
                                        >
                                            <template #spinner>
                                                <b-spinner v-show="laodingSpinner" small ></b-spinner>
                                            </template>            
                                        </Xbutton>
                                    </div>
                                </b-tab>
                                <!--<b-tab title="وضعیت درگاه" >

                                </b-tab>-->
                            </b-tabs>
                        </div>
                    </div>
                </div>
            </div>
         </div>
   
        </client-only> 
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
    layout: "main-content",
    components:{
        PageTitle,
        'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
    },
    data() {
        return {
            onClient:false,
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
            urlLogo:null,
            one: 1,
            zero: 0,
            store: {
                shipping_setting: {}
            },
            btnDisable:false,
            laodingSpinner:false,
            editorConfig: {
                removePlugins: ['Title','Table','PageBreak','Subscript','SuperScript','CodeBlock','Code','Strikethrough','ChemType'],
                placeholder:"توضیحات",
                language:{
                    ui: 'fa',
                    content: 'fa'
                },
                contentsLangDirection:'rtl',
                smiley_path : '@/assets/ckeditor/smiley/images',
                smiley_images : [
                    'regular_smile.png','sad_smile.png','wink_smile.png','teeth_smile.png','confused_smile.png','tongue_smile.png',
                    'embarrassed_smile.png','omg_smile.png','whatchutalkingabout_smile.png','angry_smile.png','angel_smile.png','shades_smile.png',
                    'devil_smile.png','cry_smile.png','lightbulb.png','thumbs_down.png','thumbs_up.png','heart.png',
                    'broken_heart.png','kiss.png','envelope.png'
                ],
                smiley_descriptions : [
                    ':)', ':(', ';)', ':D', ':/', ':P', ':*)', ':-o',
                    ':|', '>:(', 'o:)', '8-)', '>:-)', ';(', '', '', '',
                    '', '', ':-*', ''
                ],
                smiley_columns : 6

            },
             editorConfig2: {
                removePlugins: ['Title','Table','PageBreak','Subscript','SuperScript','CodeBlock','Code','Strikethrough','ChemType'],
                placeholder:"قوانین و مقررات فروشگاه",
                language:{
                    ui: 'fa',
                    content: 'fa'
                },
                contentsLangDirection:'rtl',      
            },
            validation_errors:{
                logo: null,
                logo_size: null,
                logo_type: null,
            }
        }
    },
    async created() {
        if(process.client){
            await this.getPorts()
            await this.getGateways()
            await this.getShippingData()
            await this.getData()
            this.onClient= true
        }
       
    },
    methods: {
        onFileChange(payload) {
            this.validation_errors.logo_size=false
            this.validation_errors.logo_type=false
            this.validation_errors.logo_size=false
            const file = payload.target.files[0]; // use it in case of normal HTML input
             if (file) {
                 const acceptedImageTypes = ['image/svg+xml', 'image/jpeg', 'image/png','image/webp'];
                if(acceptedImageTypes.includes(file.type)){
                    if(file.size >  ((1024 * 1024) * 1)){
                        this.validation_errors.logo_size =true
                        this.urlLogo=null
                        return
                    }
                    this.urlLogo = URL.createObjectURL(file);
                    URL.revokeObjectURL(file); // free memory
                }else{
                    this.validation_errors.logo_type= true
                     this.urlLogo=null
                }
               
            }
        },
          validate(){
            let spy = this.validation_errors
            Object.keys(spy).forEach(function (key) {
                spy[key] = null
            });
            let res = true
            if(this.formData.logo){
                if (this.formData.logo.size > ((1024 * 1024) * 1)) {
                    this.validation_errors.logo_size = true
                    res = false
                }
                 const acceptedImageTypes = ['image/svg+xml', 'image/jpeg', 'image/png','image/webp'];
                 if(!acceptedImageTypes.includes(this.formData.logo.type)){
                    this.validation_errors.logo_type = true
                    res = false
                }
            }else{
                 this.validation_errors.logo= true
                res = false
            }
         
            return res
        },
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
        async getShippingData() {
            await api.get('store/find/' + this.$route.params.id)
                .then(res => {
                    this.store = res.data.data
                })
        },
        updateShippingSetting() {
            this.btnDisable= true
            this.laodingSpinner= true
            this.store.shipping_setting.own_city_shipping_cost= store.shipping_setting.own_city_shipping_cost + '0'
            this.store.shipping_setting.other_cities_shipping_cost= store.shipping_setting.other_cities_shipping_cost + '0'
            api.post('store/update-shipping/' + this.$route.params.id, this.store.shipping_setting)
                .then(response => {
                    this.message = response.data.message
                    //this.getData()
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
                if (!response.data.data[Object.keys(response.data.data)[0]]){
                    this.error = response.data.message
                }
            }).finally(()=>{
                this.btnDisable= false
                this.laodingSpinner= false
            })
        },
        async getGateways() {
            await api.getUrl('https://core.paystar.ir/api/gateway/user-gateways-data', this.$cookies.get('token'))
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
        async  getPorts() {
            await api.get('gateway/get-active-ports', this.$cookies.get('token')).then(res => {
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
            this.btnDisable= true
            this.laodingSpinner= true
            api.post('store/update-gateways/' + this.$route.params.id, form_data, this.$cookies.get('token'))
                .then(response => {
                    this.message = response.data.message
                    this.getData()
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            }).finally(()=>{
                this.btnDisable= false
                this.laodingSpinner= false
            })
        },
        async getData() {
            await api.get('store/find/' + this.$route.params.id, this.$cookies.get('token'))
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
            if(!this.validate()){

            }else{
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
                this.btnDisable= true
                this.laodingSpinner= true
                api.post('store/update/' + this.$route.params.id, form_data, this.$cookies.get('token'))
                    .then(response => {
                        this.message = response.data.message
                    //this.getData()
                    }).catch(({response}) => {
                    this.error = response.data.data[Object.keys(response.data.data)[0]]
                    if (!response.data.data[Object.keys(response.data.data)[0]]){
                        this.error = response.data.message
                    }
                }).finally(()=>{
                    this.btnDisable= false
                    this.laodingSpinner= false
                })
            }
        }
    }
}
</script>
<style scoped>

</style>