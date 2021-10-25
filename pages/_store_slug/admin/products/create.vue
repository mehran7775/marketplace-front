<template>
    <div>
        <page-title title_text="افزودن محصول جدید" icon="product">
            <button class="btn btn-success shadow-sm mx-2 px-4 py-2" @click="createProduct" variant="primary"
                    style="border-radius: 20px; border-color: #bbb;"
            >ثبت محصول</button>
        </page-title>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body" id="create_product">
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
                                </b-form-group>
                            </div>
                            <div class="col-sm">
                                <b-form-group label="تعداد">
                                    <input type="number" class="form-control" v-model="formData.quantity"/>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <b-form-group label="میزان تخفیف">
                                    <input type="number" class="form-control" v-model="formData.discount_amount"/>
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
                                <b-form-group label="محصول چندتایی است">
                                    <div class="form-control">
                                        <label class="switch">
                                            <input type="checkbox" v-model="formData.is_multiple">
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
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
            }
        }
    },
    methods: {
        createProduct() {
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
            if (this.formData.image){
                form_data.append('images[0]',this.formData.image)
            }
            api.post('product/create', form_data,this.$cookies.get('token')).then(response => {
                alert(response.data.message)
            }).catch(({response}) => {
                alert(response.data.data[Object.keys(response.data.data)[0]])
            })
        }
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
