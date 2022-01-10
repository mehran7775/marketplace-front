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
                                        <div class="col-12 col-lg-4 my-2">
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
                                                <small v-if="api_errors.fa_name" v-text="api_errors.fa_name"></small>
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
                                            <small v-if="validation_errors.en_name" class="text-danger px-2">تکمیل این
                                                فیلد الزامی است.</small>
                                            <small v-if="api_errors.en_name" v-text="api_errors.en_name"></small>
                                        </div>
                                        <div class="col-12 col-lg-4 my-2">
                                            <select
                                                type="text"
                                                class="form-control"
                                                placeholder="استان"
                                                v-model="formData.province"
                                            >
                                                <option :value="null">انتخاب استان</option>
                                                <option :key="item.key" v-for="item in provinces" :value="item.id">
                                                    {{ item.value }}
                                                </option>
                                            </select>
                                            <small v-if="validation_errors.province" class="text-danger px-2">تکمیل این
                                                فیلد الزامی است.</small>
                                            <small v-if="api_errors.fa_name" v-text="api_errors.province"></small>
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
                                            <small v-if="validation_errors.city" class="text-danger px-2">تکمیل این فیلد
                                                الزامی است.</small>
                                            <small v-if="api_errors.city" v-text="api_errors.city"></small>
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
                                            <small v-if="validation_errors.phone_number" class="text-danger px-2">تکمیل
                                                این فیلد الزامی است.</small>
                                            <small v-if="api_errors.phone_number" v-text="api_errors.phone_number"></small>
                                        </div>
                                        <div class="col-12 col-lg-4 my-2">
                                          <div class="row">
                                                <div class="d-flex align-items-center mr-4">
                                                    <div>
                                                    <label for="logo">انتخاب فایل لوگو</label>
                                                    <b-form-file
                                                        v-model="formData.logo"
                                                        id="logo"
                                                        ref="logo" placeholder="انتخاب فایل لوگو" class="rounded mb-0 mb-md-4"
                                                        accept="image/*"
                                                        style="width: max-content;box-shadow:0 0 0 0.5px whitesmoke;"
                                                        @change="onFileChange"
                                                        plain
                                                    ></b-form-file>
                                                    <small v-if="validation_errors.logo" class="text-danger px-2">تکمیل
                                                        این فیلد الزامی است.</small>
                                                    <small v-if="validation_errors.logo_size" class="text-danger px-2">
                                                        حجم لوگو نباید بیشتر از یک مگابایت باشد
                                                    </small>
                                                    <small v-if="validation_errors.logo_type" class="text-danger px-2">
                                                        فرمت لوگو معتبر نمی باشد
                                                    </small>
                                                    <small v-if="api_errors.logo" v-text="api_errors.logo"></small>
                                                </div>
                                            
                                                <div v-if="imagePreviewURL" class="mx-auto pt-2 pr-2">
                                                    <img width="80" height="50"
                                                        :src="imagePreviewURL"
                                                        class="rounded m-auto"
                                                        style="max-width:80px;max-height:50px"/>
                                                </div>
                                            </div>
                                        </div>   
                                        </div>
                                        <div class="col-12 my-2">
                                        <client-only placeholder="loading...">
                                            <ckeditor-nuxt v-model="formData.shop_terms" :config="editorConfig"  />
                                            <small v-if="api_errors.shop_terms" v-text="api_errors.shop_terms"></small>
                                        </client-only>
                                        </div>
                                        <div class="col-12 my-2">
                                        <client-only placeholder="loading...">
                                            <ckeditor-nuxt  v-model="formData.description" :config="editorConfig2"  />
                                            <small v-if="api_errors.description" v-text="api_errors.description"></small>
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
                                                    <small v-if="api_errors.name_option" v-text="api_errors.name_option"></small>
                                                </div>
                                                <div class="w-100 text-right">
                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.phone_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        شماره موبایل
                                                    </div>
                                                    <small v-if="api_errors.phone_option" v-text="api_errors.phone_option"></small>
                                                </div>
                                                <div class="w-100 text-right">
                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.address_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        آدرس
                                                    </div>
                                                    <small v-if="api_errors.address_option" v-text="api_errors.address_option"></small>
                                                </div>
                                                <div class="w-100 text-right">
                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.email_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        ایمیل

                                                    </div>
                                                    <small v-if="api_errors.email_option" v-text="api_errors.email_option"></small>
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
                                                    <small v-if="api_errors.show_phone_option" v-text="api_errors.show_phone_option"></small>
                                                </div>
                                                <div class="w-100 text-right">
                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.show_email_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        ایمیل
                                                    </div>
                                                    <small v-if="api_errors.show_email_option" v-text="api_errors.show_email_option"></small>
                                                </div>
                                                <div class="w-100 text-right">
                                                    <div class="my-3">
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="formData.show_province_option">
                                                            <span class="slider round"></span>
                                                        </label>
                                                        موقعیت فروشگاه (استان و شهر)
                                                    </div>
                                                    <small v-if="api_errors.show_province_option" v-text="api_errors.show_province_option"></small>
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
                                        <div class="col-sm col-md-4 my-2">
                                            <select class="form-control" v-model="formData.shipping_region">
                                                <option :value="null">منطقه ارسال</option>
                                                <option value="0">استان خودم</option>
                                                <option value="1">سراسر کشور</option>
                                            </select>
                                            <small v-if="api_errors.shipping_region" v-text="api_errors.shipping_region"></small>
                                        </div>
                                        <div class="col-sm col-md-4 my-2">
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="time_send_self"
                                                ref="time_send_self"
                                                placeholder="زمان ارسال شهر خود (روز)"
                                                v-model="formData.own_city_delivery_time"
                                            />
                                            <small v-if="api_errors.own_city_delivery_time" v-text="api_errors.own_city_delivery_time"></small>
                                        </div>
                                        <div class="col-sm col-md-4 my-2">
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="time_send_others"
                                                ref="time_send_others"
                                                placeholder="زمان ارسال سایر شهر ها (روز)"
                                                v-model="formData.other_cities_delivery_time"
                                            />
                                            <small v-if="api_errors.other_cities_delivery_time" v-text="api_errors.other_cities_delivery_time"></small>
                                        </div>
                                        <div class="col-sm col-md-4 my-2">
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="cost_send_self"
                                                ref="cost_send_self"
                                                placeholder="هزینه ارسال شهر خود (تومان)"
                                                v-model="formData.own_city_shipping_cost"
                                            />
                                            <small class="text-success px-2">
                                                {{ moneyFormat(formData.own_city_shipping_cost) }}
                                                تومان
                                            </small>
                                            <small v-if="api_errors.own_city_shipping_cost" v-text="api_errors.own_city_shipping_cost"></small>
                                        </div>
                                        <div class="col-sm col-md-4 my-2">
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="cost_send_others"
                                                ref="cost_send_others"
                                                placeholder="هزینه ارسال سایر شهر ها (تومان)"
                                                v-model="formData.other_cities_shipping_cost"
                                            />
                                            <small class="text-success px-2">
                                                {{ moneyFormat(formData.other_cities_shipping_cost) }}
                                                تومان
                                            </small>
                                            <small v-if="api_errors.other_cities_shipping_cost" v-text="api_errors.other_cities_shipping_cost"></small>
                                        </div>
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
                                <template v-for="port in ports" v-if="port_types.includes(port.type)">
                                    <hr>
                                    <span style="font-size: 1.1rem;">
                                        {{ port.fa_name + ' ' + PortTypes.getType(port.type) }}
                                    </span>
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
                                        <small v-if="api_errors.gateways" v-text="api_errors.gateways"></small>
                                    </div>
                                </template>
                                <hr>
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
                                        <Xbutton
                                        :on_click="createStore"
                                        class="btn btn-success px-4"
                                        style="border-radius: 10px"
                                        text="ثبت فروشگاه"
                                        :disable="btnDisable"
                                        >
                                            <template #spinner>
                                                <b-spinner v-show="laodingSpinner" small  class="float-left"></b-spinner>
                                            </template>            
                                        </Xbutton>
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
            imagePreviewURL: null,
            port_types: [],
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
                show_phone_option: false,
                show_email_option: false,
                show_province_option: false,
                shop_terms: null,
                shipping_region: null,
                own_city_delivery_time: null,
                other_cities_delivery_time: null,
                own_city_shipping_cost: null,
                other_cities_shipping_cost: null,
                own_city_payment_method: 0,
                other_cities_payment_method: 0,
                gateways: [],
                instagram_id:'',
                whatsapp_phone:'',
                telegram_id:'',
                aparat_id:''
            },
            validation_errors: {
                fa_name: null,
                en_name: null,
                description: null,
                province: null,
                city: null,
                phone_number: null,
                logo: null,
                logo_size: null,
                logo_type: null,
                name_option: false,
            },
            editorConfig: {
                removePlugins: ['Title','Table','PageBreak','Subscript','Superscript','CodeBlock','Code','Strikethrough','ChemType','MathType','Specialcharacters'],
                placeholder:"قوانین و مقررات فروشگاه",
                language:{
                    ui: 'fa',
                    content: 'fa'
                },
                contentsLangDirection:'rtl',      
            },
            editorConfig2: {

                removePlugins: ['Title','Table','PageBreak','Subscript','Superscript','CodeBlock','Code','Strikethrough','ChemType','MathType','Specialcharacters'],
                placeholder:"توضیحات",
                language:{
                    ui: 'fa',
                    content: 'fa'
                },
                contentsLangDirection:'rtl',      
            },
            btnDisable: false,
            laodingSpinner: false,
            api_errors:{
                fa_name:'',
                en_name:'',
                province:'',
                city:'',
                phone_number:'',
                logo:'',
                shop_terms:'',
                description:'',
                name_option:'',
                phone_option:'',
                address_option:'',
                email_option:'',
                show_phone_option:'',
                show_email_option:'',
                show_province_option:'',
                shipping_region:'',
                own_city_delivery_time:'',
                other_cities_delivery_time:'',
                own_city_shipping_cost:'',
                other_cities_shipping_cost:'',
                gateways:'',

            },
            current_step:{
                1:['fa_name','en_name','province','city','phone_number','logo','shop_terms','description','name_option','phone_option','address_option','email_option','show_phone_option',
                    'show_email_option','show_province_option'
                ],
                2:['shipping_region','own_city_delivery_time','other_cities_delivery_time','own_city_shipping_cost','other_cities_shipping_cost'],
                3:['gateways']
            }
        };
    },
    components: {
        PageTitle,
        'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
    },
    methods: {
        onFileChange(payload) {
            this.validation_errors.logo_size=false
            this.validation_errors.logo_type=false
            this.validation_errors.logo_size=false
            const file = payload.target.files[0];
             if (file) {
                 const acceptedImageTypes = ['image/svg+xml', 'image/jpeg', 'image/png','image/webp'];
                if(acceptedImageTypes.includes(file.type)){
                    if(file.size >  ((1024 * 1024) * 1)){
                        this.validation_errors.logo_size =true
                        this.imagePreviewURL = null
                        return
                    }
                    this.imagePreviewURL = URL.createObjectURL(file);
                    URL.revokeObjectURL(file); 
                }else{
                    this.validation_errors.logo_type= true
                    this.imagePreviewURL = null
                }
               
            } else {
                this.imagePreviewURL =  null
            }
      
           
            
        },
        getGateways() {
            api.getUrl('https://core.paystar.ir/api/gateway/user-gateways-data', this.$cookies.get('token'))
                .then(res => {
                    this.gateways = res.data.data
                    for (let key in this.gateways) {
                        let item = this.gateways[key]
                        if (!this.port_types.includes(item.type)) {
                            this.port_types.push(item.type)
                        }
                    }
                })
        },
        getCardGateways() {
            api.get('user/current').then(res => {
                let phone = res.data.data.phone
                api.getUrl('https://card.paystar.ir/api/acceptor/' + '09386516983',)
                    .then(json => {
                        console.log(json)
                    })
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
                let index = this.formData.gateways.indexOf(gateway);
                if (index > -1) {
                    this.formData.gateways.splice(index, 1);
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
            const acceptedImageTypes = ['image/svg+xml', 'image/jpeg', 'image/png','image/webp'];
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
            if (!this.formData.province) {
                this.validation_errors.province = true
                res = false
            }
            if (!this.formData.city) {
                this.validation_errors.city = true
                res = false
            }
            if (!this.formData.logo) {
                this.validation_errors.logo = true
                res = false
            }
            if (this.formData.logo && (this.formData.logo.size > ((1024 * 1024) * 1))) {
                this.validation_errors.logo_size = true
                res = false
            }
            if (this.formData.logo && !acceptedImageTypes.includes(this.formData.logo.type)) {
                this.validation_errors.logo_type = true
                res = false
            }
            return res
        },
        moneyFormat(price) {
            if (!price) {
                return 0
            }
            const pieces = parseFloat(price).toFixed(0).split("");
            let ii = pieces.length;
            while ((ii -= 3) > 0) {
                pieces.splice(ii, 0, ",");
            }
            return pieces.join("");
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
                this.btnDisable= true
                this.laodingSpinner= true
                form_data.set('own_city_shipping_cost',this.formData.own_city_shipping_cost+'0')
                form_data.set('other_cities_shipping_cost',this.formData.other_cities_shipping_cost+'0')
                // form_data.set('phone_number','')
                api.post('store/create', form_data, this.$cookies.get('token')).then(response => {
                    this.message = response.data.message
                    this.$router.push('/')
                }).catch(({response}) => {
                    this.error = response.data.data[Object.keys(response.data.data)[0]]
                    Object.keys(response.data.data).forEach(key =>{
                        if(this.current_step[1].includes(key)){
                            this.wizard.current_step= 1
                            this.api_errors[key] = response.data.data[key][0]
                            throw new Error()
                        }
                        else if(this.current_step[2].includes(key)){
                           this.wizard.current_step= 2 
                           this.api_errors[key] = response.data.data[key][0]
                           throw new Error()

                        }else if(this.current_step[3].includes(key)){
                            this.wizard.current_step= 3
                            this.api_errors[key] = response.data.data[key][0]
                            throw new Error()

                        }
                    })
                }).finally(()=>{
                    this.btnDisable= false
                    this.laodingSpinner= false
                })
            }


        }
    },
    mounted() {
        this.getPorts()
        this.getGateways()
        this.getCardGateways()
    }
}
;
</script>

<style scoped>
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
.custom-file-label {
    border: none;
    background: url('/images/icons/file_upload_black_24dp.svg');
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 10px;
}

.custom-file-label::after {
    display: none;
}
.custom-block-indent-a {
    margin-left: 10%;
}

.custom-block-indent-b {
    margin-left: 20%;
}

.custom-block-indent-c {
    margin-left: 30%;
}
.ck-editor__editable {
    min-height: 70px;
   }
small{
    color:red;
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
