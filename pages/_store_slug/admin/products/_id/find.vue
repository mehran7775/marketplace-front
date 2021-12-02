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
                                            <b-form-group label="تصویر محصول">
                                                <b-form-file placeholder="تصویر محصول" class="form-control"
                                                             v-model="formData.image"></b-form-file>
                                            </b-form-group>
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
                                            <dashboard-box :number="statistics.price_sum" title="کل مبلغ فروش">
                                            </dashboard-box>
                                        </div>
                                        <div class=" col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.views_count" title="تعداد مشاهده">
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
                description: null
            },
            statistics: {}
        }
    },
    methods: {
        updateProduct() {
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
            }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            })
        },
        getProduct() {
            api.get('product/find/' + this.$route.params.id, this.$cookies.get('token'))
                .then(res => {
                    this.formData.title = res.data.data.title
                    this.formData.price = res.data.data.price
                    this.formData.quantity = res.data.data.quantity
                    this.formData.is_multiple = res.data.data.is_multiple == 1 ? true : false
                    this.formData.unlimited = res.data.data.unlimited == 1 ? true : false
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
