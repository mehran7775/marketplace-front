<template>
  <div>
    <client-only >
       <div class="w-100">
            <div v-if="onClient" class="w-100">
                <div id="edit_store">
                    <page-title title_text="ویرایش فروشگاه" icon="product">
                        <div @click="updateSetting">
                            <Xbutton
                            :disable="btnDisable"
                                variant="success" v-text="'بروزرسانی تنظیمات'">
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
                            <div class="col-12 col-lg-4 my-2">
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
                            <div class="col">
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
                    </div>
                </div>
            </div>
       </div>
    </client-only>
  </div>
</template>

<script>
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";
import {provinces} from "~/constants/Provinces";

export default {
    components: {
        PageTitle,
        'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
    },
    layout: "main-content",
    
    data() {
        return {
            onClient:false,
            provinces,
            store: {},
            message: null,
            error: null,
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
            },
             validation_errors:{
                logo: null,
                logo_size: null,
                logo_type: null,
            },
            btnDisable: false,
            laodingSpinner: false,
             urlLogo:null,
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
        }
    },
    async created() {
        if(process.client){
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
                const acceptedImageTypes = ['image/svg+xml', 'image/jpeg', 'image/png','image/webp'];
                if (this.formData.logo && (this.formData.logo.size > ((1024 * 1024) * 1))) {
                this.validation_errors.logo_size = true
                res = false
                }else if(!acceptedImageTypes.includes(this.formData.logo.size.type)){
                    this.validation_errors.logo_type = true
                    res = false
                }
            }else{
                 this.validation_errors.logo = true
                res = false
            }
            if (this.formData.logo && (this.formData.logo.size > ((1024 * 1024) * 1))) {
                this.validation_errors.logo_size = true
                res = false
            }
            return res
        },
        getData() {
            api.get('store/find/' + this.$route.params.store_slug, this.$cookies.get('token'))
                .then(res => {
                    this.store = res.data.data
                    for (let key in Object.keys(this.formData)) {
                        key = Object.keys(this.formData)[key]
                        this.formData[key] = this.store[key]
                    }
                })
        },
        updateSetting() {
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
                        if (this.formData[key] !== null) {
                            form_data.append(key, this.formData[key]);
                        }
                    }
                }
                this.btnDisable= true
                this.laodingSpinner= true
                api.post('store/update/' + this.$route.params.store_slug, form_data)
                    .then(response => {
                        this.message = response.data.message
                        this.getData()
                    }).catch(({response}) => {
                    this.error = response.data.data[Object.keys(response.data.data)[0]]
                }).finally(()=>{
                    this.btnDisable= false
                    this.laodingSpinner= false
                })
            }
        }
    }
}
</script>

<style>
#edit_store .custom-file-label {
    border: none;
    background: none;
}

#edit_store .custom-file-label::after {
    display: none;
}
</style>
