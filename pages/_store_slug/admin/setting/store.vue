<template>
  <div>
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
                <div class="col-12 col-md-6">
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
                <div class="col-12 col-md-6">
                        <div class="m-auto pt-2 pr-2">
                        <hr>
                        <label class="my-2">اطلاعات زیر در صفحه عمومی فروشگاه نمایش داده شوند</label>
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
                <div class="col-12">
                    <div id="social-items" class="p-1">
                                <hr>
                                <label class="my-2">شبکه های اجتماعی شما(اختیاری)</label>
                                <div class="form-group p-1">
                                    <label for="instagram">
                                        <fa :icon="['fab','instagram']" class="fa-lg"></fa>
                                        <span>اینستاگرام</span>
                                    </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="instagram"
                                            ref="instagram"
                                            placeholder="شناسه اینستاگرام"
                                            v-model="formData.instagram_id"
                                        />
                                </div>
                                <div class="form-group p-1">
                                    <label for="whatsapp">
                                        <fa :icon="['fab','whatsapp']" class="fa-lg"></fa>
                                        <span>واتساپ</span>
                                    </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="whatsapp"
                                            ref="whatsapp"
                                            placeholder="شماره تلفن"
                                            v-model="formData.whatsapp_phone"
                                        />
                                </div>
                                <div class="form-group p-1">
                                    <label for="telegram">
                                        <fa :icon="['fab','telegram']" class="fa-lg"></fa>
                                        <span>تلگرام</span>
                                    </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="telegram"
                                            ref="telegram"
                                            placeholder="شناسه تلگرام"
                                            v-model="formData.telegram_id"
                                        />
                                </div>
                                <div class="form-group p-1">
                                    <label for="aparat">
                                        <svg fill="rgb(102, 102, 102)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="18px" height="18px"><path d="M 15.173828 2.609375 C 11.917119 2.5264688 8.94875 4.7335781 8.1875 8.0332031 L 7.078125 12.837891 C 10.172125 7.7938906 15.497719 4.4664844 21.386719 3.8964844 L 16.582031 2.7871094 C 16.110656 2.6782344 15.639072 2.6212187 15.173828 2.609375 z M 24 7 C 14.628921 7 7 14.628928 7 24 C 7 33.371072 14.628921 41 24 41 C 33.371079 41 41 33.371072 41 24 C 41 14.628928 33.371079 7 24 7 z M 35.162109 7.078125 C 40.206109 10.172125 43.533516 15.497719 44.103516 21.386719 L 45.212891 16.582031 C 46.083891 12.811031 43.737797 9.0575 39.966797 8.1875 L 35.162109 7.078125 z M 24 10 C 31.74976 10 38 16.250245 38 24 C 38 31.749755 31.74976 38 24 38 C 16.25024 38 10 31.749755 10 24 C 10 16.250245 16.25024 10 24 10 z M 20.228516 13.697266 A 3.5 3.5 0 1 0 20.228516 20.697266 A 3.5 3.5 0 1 0 20.228516 13.697266 z M 30.802734 16.728516 A 3.5 3.5 0 1 0 30.802734 23.728516 A 3.5 3.5 0 1 0 30.802734 16.728516 z M 24 22.001953 A 1.999 1.999 0 1 0 24 25.998047 A 1.999 1.999 0 1 0 24 22.001953 z M 17.197266 24.271484 A 3.5 3.5 0 1 0 17.197266 31.271484 A 3.5 3.5 0 1 0 17.197266 24.271484 z M 3.8964844 26.615234 L 2.7871094 31.419922 C 1.9171094 35.190922 4.2622031 38.943453 8.0332031 39.814453 L 12.837891 40.923828 C 7.7948906 37.829828 4.4664844 32.504234 3.8964844 26.615234 z M 27.771484 27.302734 A 3.5 3.5 0 1 0 27.771484 34.302734 A 3.5 3.5 0 1 0 27.771484 27.302734 z M 40.923828 35.162109 C 37.829828 40.205109 32.504234 43.533516 26.615234 44.103516 L 31.419922 45.212891 C 35.190922 46.082891 38.943453 43.737797 39.814453 39.966797 L 40.923828 35.162109 z"/></svg>
                                        <span>آپارات</span>
                                    </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="aparat"
                                            ref="aparat"
                                            placeholder="شناسه آپارات"
                                            v-model="formData.aparat_id"
                                        />
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
import {provinces} from "~/constants/Provinces";

export default {
    components: {
        PageTitle,
        'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
    },
    layout: "main-content",
    
    data() {
        return {
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
                instagram_id:'',
                whatsapp_phone:'',
                telegram_id:'',
                aparat_id:'',
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
                removePlugins: ['Title','Table','PageBreak','Subscript','Superscript','CodeBlock','Code','Strikethrough','ChemType','MathType','Specialcharacters'],
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
                removePlugins: ['Title','Table','PageBreak','Subscript','Superscript','CodeBlock','Code','Strikethrough','ChemType','MathType','Specialcharacters'],
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
                    for (let key in this.formData) {
                        this.formData[key] = this.store[key]
                    }
                    this.formData.instagram_id= res.data.data.social_page['instagram_id'] ? res.data.data.social_page['instagram_id'] : ''
                    this.formData.whatsapp_phone= res.data.data.social_page['whatsapp_phone'] ? res.data.data.social_page['whatsapp_phone'] : '' 
                    this.formData.telegram_id= res.data.data.social_page['telegram_id'] ? res.data.data.social_page['telegram_id'] : ''
                    this.formData.aparat_id= res.data.data.social_page['aparat_id'] ? res.data.data.social_page['aparat_id'] : ''
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

<style scoped>
#edit_store .custom-file-label {
    border: none;
    background: none;
}

#edit_store .custom-file-label::after {
    display: none;
}
#social-items{
    width: 50%;
}
@media screen and (max-width:768px) {
    #social-items{
        width: 100%;
    }
}
</style>
