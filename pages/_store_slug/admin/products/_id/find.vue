<template>
    <div>
        <page-title title_text="جزییات محصول" icon="product">
            <button class="btn btn-success shadow-sm mx-2 px-4 py-2" @click="updateProduct" variant="primary"
                    style="border-radius: 20px; border-color: #bbb;"
            >
                ذخیره تغییرات
            </button>
        </page-title>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <div class="shadow-sm bg-white rounded p-3">
            <b-tabs content-class="mt-3">
                <b-tab title="ویرایش محصول" active>
                    <div class="row">
                        <div class="col-12">
                            <div>
                                <div class="mx-3" id="create_product">
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="عنوان">
                                                <input class="form-control" v-model="formData.title"/>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="قیمت">
                                                <input type="number" class="form-control" v-model="formData.price"/>
                                                <small class="text-success px-2">
                                                    {{moneyFormat(formData.price)}}
                                                    ریال
                                                </small>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm">
                                            <b-form-group label=" امکان انتخاب چند محصول توسط مشتری">
                                                <div class="form-control">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.is_multiple">
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="میزان تخفیف">
                                                <input type="number" class="form-control"
                                                       v-model="formData.discount_amount"/>
                                                <small class="text-success px-2">
                                                    {{moneyFormat(formData.discount_amount)}}
                                                    ریال
                                                </small>
                                            </b-form-group>

                                        </div>
                                        <div class="col-sm">
                                            <b-form-group label="درصد تخفیف">
                                                <input type="number" class="form-control"
                                                       v-model="formData.discount_percent"/>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="حداکثر میزان تخفیف">
                                                <input type="number" class="form-control"
                                                       v-model="formData.discount_max_amount"/>
                                                <small class="text-success px-2">
                                                    {{moneyFormat(formData.discount_max_amount)}}
                                                    ریال
                                                </small>
                                            </b-form-group>

                                        </div>
                                        <div class="col-sm">
                                            <div class="d-flex">
                                                <b-form-group label="تصویر محصول">
                                                <b-form-file
                                                    v-model="formData.image"
                                                    accept="image/*"
                                                    class="px-5 rounded"
                                                    style="width: max-content;box-shadow:0 0 0 0.5px whitesmoke;"
                                                    placeholder="یک فایل انتخاب کنید"
                                                    plain
                                                    @change="onFileChange"
                                                ></b-form-file>
                                                    <small v-if="validation_errors.logo" class="text-danger px-2">تکمیل
                                                            این فیلد الزامی است.</small>
                                                    <small v-if="validation_errors.logo_size" class="text-danger px-2">
                                                            حجم عکس نباید بیشتر از پنج مگابایت باشد
                                                    </small>
                                                    <small v-if="validation_errors.logo_type" class="text-danger px-2">
                                                            فرمت عکس معتبر نمی باشد
                                                    </small>
                                                </b-form-group>
                                                <div class="m-auto pt-2 pr-2">
                                                    <img width="80" height="50"
                                                    :src="urlLogo ? urlLogo :formData.thumbnails"
                                                    class="rounded"
                                                    style="max-width:80px;max-height:50px"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="تعداد">
                                                <input type="number" class="form-control" v-model="formData.quantity"/>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm">
                                            <b-form-group label="تعداد محصول نامحدود است">
                                                <div class="form-control">
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.unlimited">
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="توضیحات محصول">
                                            <textarea class="form-control" v-model="formData.description">
                                            </textarea>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="آمار محصول" >
                    <div class="row">
                        <div class="col-12">
                            <div>
                                <div class="mx-2">
                                    <div class="row">
                                        <div class="col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.complete_orders" title="سفارشات تکمیل شده">
                                            </dashboard-box>
                                        </div>
                                        <div class="col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.processing_orders" title="سفارشات در حال پردازش">
                                            </dashboard-box>
                                        </div>
                                        <div class="col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.sales_count" title="تعداد فروش">
                                            </dashboard-box>
                                        </div>
                                        <div class=" col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.total_sell_price" title="کل مبلغ فروش">
                                            </dashboard-box>
                                        </div>
                                        <div class=" col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.views_count? statistics.views_count : 0" title="تعداد بازدید">
                                            </dashboard-box>
                                        </div>
                                        <div class="col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.conversion_rates" title="نرخ تبدیل">
                                            </dashboard-box>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>

</template>

<script>
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";
import DashboardBox from "~/components/dashboard-box";
import { validate } from 'vee-validate';

export default {
    components: {DashboardBox, PageTitle},
    layout: "main-content",
    data() {
        return {
            message: null,
            error: null,
            formData: {
                title: null,
                store_id: this.$route.params.store_slug,
                price: 0,
                unlimited: false,
                is_multiple: false,
                quantity: 0,
                discount_amount: 0,
                discount_percent: 0,
                discount_max_amount: 0,
                image: null,
                description: null,
                
            },
            urlLogo:null,
               validation_errors:{
                logo: null,
                logo_size: null,
                logo_type: null,
            },
            statistics: {}
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
                    if(file.size >  ((1024 * 1024) * 5)){
                        this.validation_errors.logo_size =true
                        this.urlLogo=null
                        this.formData.image=null
                        return
                    }
                    this.urlLogo = URL.createObjectURL(file);
                    URL.revokeObjectURL(file); // free memory
                }else{
                    this.validation_errors.logo_type= true
                     this.urlLogo=null
                     this.formData.image=null
                }
               
            }
        },
         validate(){
            let spy = this.validation_errors
            Object.keys(spy).forEach(function (key) {
                spy[key] = null
            });
            let res = true
            if(this.formData.image){
                if (this.formData.image.size > ((1024 * 1024) * 5)) {
                    this.validation_errors.logo_size = true
                    res = false
                }
                 const acceptedImageTypes = ['image/svg+xml', 'image/jpeg', 'image/png','image/webp'];
                 if(!acceptedImageTypes.includes(this.formData.image.type)){
                    this.validation_errors.logo_type = true
                    res = false
                }
            }else{
                 this.validation_errors.logo= true
                res = false
            }
         
            return res
        },
        updateProduct() {
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
            if (this.formData.image) {
                form_data.append('images[0]', this.formData.image)
            }
            api.post('product/update/' + this.$route.params.id, form_data, this.$cookies.get('token')).then(response => {
                this.message = response.data.message
                 this.$router.push(
              "/" + this.$route.params.store_slug + "/admin/products"
            );
            }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            })
            }
            
        },
        getProduct() {
            api.get('product/find/' + this.$route.params.id, this.$cookies.get('token'))
                .then(res => {
                    this.formData.title = res.data.data.title
                    this.formData.price = res.data.data.price
                    this.formData.quantity = res.data.data.quantity
                    this.formData.is_multiple = res.data.data.is_multiple == 1 ? true : false
                    this.formData.unlimited = res.data.data.unlimited == 1 ? true : false
                    this.formData.thumbnails= res.data.data.thumbnails
                })
        },
        getStatistics() {
            api.get('product/statistics/' + this.$route.params.id)
                .then(res => {
                    this.statistics = res.data.data
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
    },
    mounted() {
        this.getProduct()
        this.getStatistics()
    }
}
</script>

<style>
#create_product .custom-file-label {
    border: none;
    background: none;
}

#create_product .custom-file-label::after {
    display: none;
}
</style>
