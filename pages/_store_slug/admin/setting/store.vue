<template>
    <div id="edit_store">
        <page-title title_text="ویرایش فروشگاه" icon="product">
            <div @click="updateSetting">
                <Xbutton variant="success" v-text="'بروزرسانی تنظیمات'"></Xbutton>
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
                        <option :key="item.key" v-for="item in provinces" :value="item.id">{{ item.value }}</option>
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

                    <b-link class="btn btn-link" target="_blank" :href="formData.logo">دانلود لوگو</b-link>

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
        </div>
    </div>
</template>

<script>
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";
import {provinces} from "~/constants/Provinces";

export default {
    components: {PageTitle},
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
            }
        }
    },
    created() {
        this.getData()
    },
    methods: {
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
            api.post('store/update/' + this.$route.params.store_slug, form_data)
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

<style>
#edit_store .custom-file-label {
    border: none;
    background: none;
}

#edit_store .custom-file-label::after {
    display: none;
}
</style>
