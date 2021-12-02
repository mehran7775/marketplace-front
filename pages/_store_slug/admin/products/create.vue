<template>
    <div>
        <page-title title_text="افزودن محصول جدید" icon="product">
            <button class="btn btn-success shadow-sm mx-2 px-4 py-2" @click="createProduct" variant="primary"
                    style="border-radius: 20px; border-color: #bbb;"
            >ثبت محصول
            </button>
        </page-title>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body" id="create_product">
                        <div class="row">
                            <div class="col-sm">
                                <b-form-group label="عنوان">
                                    <input class="form-control" v-model="formData.title"/>
                                    <small v-if="errors.title" class="text-danger px-2">{{ errors.title }}</small>
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
                                    <input type="number" class="form-control" v-model="formData.discount_amount"/>
                                    <small class="text-success px-2">
                                        {{moneyFormat(formData.discount_amount)}}
                                        ریال
                                    </small>
                                </b-form-group>

                            </div>
                            <div class="col-sm">
                                <b-form-group label="درصد تخفیف">
                                    <input type="number" class="form-control" v-model="formData.discount_percent"/>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <b-form-group label="حداکثر میزان تخفیف">
                                    <input type="number" class="form-control" v-model="formData.discount_max_amount"/>
                                    <small class="text-success px-2">
                                        {{moneyFormat(formData.discount_max_amount)}}
                                        ریال
                                    </small>
                                </b-form-group>

                            </div>
                            <div class="col-sm">
                                <b-form-group label="تصویر محصول">
                                    <b-form-file placeholder="تصویر محصول" class="form-control"
                                                 accept="image/*"
                                                 v-model="formData.image"></b-form-file>
                                    <small v-if="errors.image" class="text-danger px-2">{{ errors.image }}</small>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                                <div class="col-sm">
                                    <b-form-group label="تعداد">
                                        <input type="number" class="form-control" v-model="formData.quantity"/>
                                        <small v-if="errors.quantity" class="text-danger px-2">{{ errors.quantity }}</small>
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
    </div>

</template>

<script>
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";

export default {
    name: "create",
    components: {PageTitle},
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
            errors: {
                title: null,
                image: null,
                quantity: null
            }
        }
    },
    methods: {
        validate() {
            let res = true
            if (!this.formData.title) {
                this.errors.title = 'عنوان الزامی است'
                res = false
            }
            if (!this.formData.image) {
                this.errors.image = 'تصویر محصول الزامی است'
                res = false
            }
            if (this.formData.image && (this.formData.image.size > ((1024 * 1024) * 5))) {
                this.errors.image = 'تصویر محصول نباید بیشتر از ۵ مگ باشد'
                res = false
            }
            if (!this.formData.quantity) {
                this.errors.quantity = 'تعداد محصول الزامی است'
                res = false
            }
            return res
        },
        createProduct() {
            if (this.validate()) {
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
                api.post('product/create', form_data, this.$cookies.get('token')).then(response => {
                    this.message = response.data.message
                    this.$router.push('/'+ this.$route.params.store_slug +'/admin/products')
                }).catch(({response}) => {
                    this.error = response.data.data[Object.keys(response.data.data)[0]]
                })
            }
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
