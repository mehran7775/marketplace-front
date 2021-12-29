<template>
   <client-only v-if="onClient">
        <div>
     
            <page-title title_text="محصولات" icon="product">
                <nuxt-link to="products/create" class="btn btn-success shadow-sm mx-2 px-4 py-2"
                        style="border-radius: 20px; border-color: #bbb;">
                    <span class="pr-2">ثبت محصول جدید</span>
                </nuxt-link>
            </page-title>
            <div class="bg-white shadow-sm p-3 my-3" style="border-radius: 10px;">
                <div class="row">
                    <div class="col-sm my-2">
                        <input class="form-control" placeholder="عنوان محصول" v-model="filter_title">
                    </div>
                    <div class="col-sm my-2">
                        <input class="form-control" placeholder="قیمت" v-model="filter_price">
                    </div>
                    <div class="col-sm my-2">
                        <select class="form-control" id="selectState" v-model="filter_status">
                            <option :value="null">وضعیت</option>
                            <option v-for="status in ProductStatus.productStatus" :value="status.value">{{status.text}}</option>
                        </select>
                    </div>
                    <div class="col-sm my-2">
                        <div>
                            <button :class="query ? 'btn btn-success mr-2' : 'btn btn-success btn-block'" style="border-radius: 10px;"
                                    @click="get_data(products.first_page_url)">اعمال فیلتر
                            </button>
                            <button class="btn btn-danger mr-3" style="border-radius: 10px;"
                                    @click="reset_and_get" v-if="query">حذف فیلتر
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="products">
                <div class="px-3">
                    <div class="table-responsive">
                        <table class="table  table-responsive table-borderless text-center">
                            <thead>
                            <tr>
                                <th scope="col" style="background-color: #eee;  border-radius: 0 16px 16px 0;">#</th>
                                <th scope="col" style="background-color: #eee;">عنوان</th>
                                <th scope="col" style="background-color: #eee;">تصویر</th>
                                <th scope="col" style="background-color: #eee;">تعداد</th>
                                <th scope="col" style="background-color: #eee;">قیمت (ریال)</th>
                                <th scope="col" style="background-color: #eee;">وضعیت</th>
                                <th scope="col" style="background-color: #eee; border-radius: 16px 0px 0px 16px;">عملیات
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(product, index) in products.data" :key="index">
                                <td>{{ product.id }}</td>
                                <td>{{ product.title }}</td>
                                <td>
                                    <img :src="product.thumbnail" width="30px"/>
                                </td>
                                <td>{{ product.quantity }}</td>
                                <td>{{ product.price }}</td>
                                <td>
                                    <b-badge :variant="ProductStatus.getStatus(product.status).variant">
                                            {{ProductStatus.getStatus(product.status).text}}
                                    </b-badge>
                                </td>
                                <td>
                                    <nuxt-link class="btn p-0 m-0 text-danger" :to="'products/' + product.id + '/find'" v-b-tooltip.hover title="جزئیات">
                                    <fa icon="edit" class="edit cursor_pointer fa-lg" 
                                    ></fa>
                                    </nuxt-link>
                                    <b-button variant="link" class="p-0 m-0" v-b-modal="'my-modal' + index" v-b-tooltip.hover title="تغییر وضعیت">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  fill="#bbb"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                                    </b-button>

                                    <b-modal hide-footer hide-header-close :id="'my-modal' + index" title="تغییر وضعیت محصول">
                                        <b-form-group>
                                            <select class="form-control" v-model="product_status">
                                                <option  value="1">فعال</option>
                                                <option value="0">آرشیو</option>
                                            </select>
                                        </b-form-group>
                                        <b-form-group>
                                            <b-button variant="primary" @click="changeProductStatus(product_status,product.id)">
                                                تغییر وضعیت
                                            </b-button>
                                        </b-form-group>
                                    </b-modal>
                                    <span v-b-tooltip.hover title="ویرایش سریع">
                                        <fa icon="pencil-alt" class="edit cursor_pointer fa-lg" 
                                        @click="triggerEditProduct(product)"
                                        ></fa>
                                    </span>
                                 
                                    
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr v-if="products.next_page_url || products.prev_page_url">

                <pagination v-if="products.next_page_url || products.prev_page_url" :data="products" :get_data="get_data"
                            :perpage="per_page"></pagination>
            </div>
            <template>
            <b-modal
                dir="rtl"
                id="updateProduct"
                centered
                title="ویرایش دسته بندی"
                hide-footer
            >
                <ValidationObserver ref="formUpdateProduct">
                <b-form @submit.prevent="updateProduct()">
                    <ValidationProvider
                        vid="title"
                        v-slot="{ valid, errors }"
                        rules="required"
                        name="عنوان"
                    >
                        <b-form-group
                        id="gTitle"
                        class="font-weight-bold"
                        label="نام دسته"
                        label-for="utitle"
                        >
                        <b-form-input
                            id="utitle"
                            v-model="productUpdate.title"
                            placeholder="عنوان را وارد کنید"
                            :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <b-form-invalid-feedback
                            class="pr-2"
                            id="inputLiveFeedback"
                            >{{ errors[0] }}</b-form-invalid-feedback
                        >
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        vid="price"
                        v-slot="{ valid, errors }"
                        rules="required"
                        name="قیمت"
                    >
                        <b-form-group
                        id="gPrice"
                        class="font-weight-bold"
                        label="قیمت     (ریال)"
                        label-for="uprice"
                        >
                        <b-form-input
                            id="uprice"
                            v-model="productUpdate.price"
                            placeholder="قیمت را وارد کنید"
                            :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <b-form-invalid-feedback
                            class="pr-2"
                            id="inputLiveFeedback"
                            >{{ errors[0] }}</b-form-invalid-feedback
                        >
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        vid="quantity"
                        v-slot="{ valid, errors }"
                        rules="required"
                        name="تعداد"
                    >
                        <b-form-group
                        id="gQuantity"
                        class="font-weight-bold"
                        label="تعداد"
                        label-for="uquantity"
                        >
                        <b-form-input
                            id="uquantity"
                            v-model="productUpdate.quantity"
                            placeholder="تعداد را وارد کنید"
                            :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <b-form-invalid-feedback
                            class="pr-2"
                            id="inputLiveFeedback"
                            >{{ errors[0] }}</b-form-invalid-feedback
                        >
                        </b-form-group>
                    </ValidationProvider>
                    <Xbutton
                        is_submit
                        class="px-5 w-100"
                        text="ثبت"
                        :disable="btnDisable"
                        >
                        <template #spinner>
                            <b-spinner
                            v-show="loadingSpinner"
                            small
                            class="float-left"
                            ></b-spinner>
                        </template>
                        </Xbutton>
                </b-form>
                </ValidationObserver>
            </b-modal>
            </template>
        </div>
   </client-only>
</template>

<script>
import pagination from "~/components/pagination";
import CustomerStatus from "~/constants/CustomerStatus";
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";
//import datePicker from 'vue-persian-datetime-picker'
import ProductStatus from "~/constants/ProductStatus";
import { productService } from '~/services/apiServices'
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
    name: "index",
    components: {
        PageTitle,
        pagination,
        //datePicker
    },
    layout: "main-content",
    data() {
        return {
            onClient:false,
            ProductStatus,
            filter_title: null,
            filter_from_date: null,
            filter_to_date: null,
            filter_price : null,
            filter_status: null,
            products: null,
            per_page: 15,
            product_status : null,
            productUpdate:{},
            btnDisable:false,
            loadingSpinner:false
        }
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    computed: {
        query() {
            let res = '';
            if (this.filter_title != null) {
                res = res + '&query[title]=' + this.filter_title;
            }
            if (this.filter_status != null) {
                res = res + '&query[status]=' + this.filter_status;
            }
            if (this.filter_from_date != null) {
                res = res + '&query[from_date]=' + this.filter_from_date;
            }
            if (this.filter_to_date != null) {
                res = res + '&query[to_date]=' + this.filter_to_date;
            }
            if (this.filter_price != null) {
                res = res + '&query[price]=' + this.filter_price;
            }
            return res;
        }
    },
    methods: {
        async getProduct(){
            let res = await api.get('product/' + this.$route.params.store_slug + '?perpage=' + this.per_page, this.$cookies.get('token'))
            this.products = res.data.data
        },
        resetQuery() {
            this.filter_title = null;
            this.filter_status = null;
            this.filter_from_date = null;
            this.filter_to_date = null;
            this.filter_price = null
        },
        async get_data(url) {
            let res = await api.getUrl(url + this.query + '&perpage=' + this.per_page, this.$cookies.get('token'))
            this.products = res.data.data
        },
        reset_and_get() {
            this.resetQuery();
            this.get_data(this.products.path + '?page=1');
        },
        async changeProductStatus(status,product){
            let res = await api.post('product/change-status/' + product , {status : status})
            await this.get_data(this.products.path + '?page=1');
        },
        triggerEditProduct(product){
            Object.assign(this.productUpdate,product)
            this.$bvModal.show('updateProduct')
        },
        async updateProduct(){
            this.$refs.formUpdateProduct.validate().then(async (success) =>{
                if(success){
                    this.btnDisable= true
                    this.loadingSpinner= true
                    while(this.productUpdate.price.includes(",")){
                        this.productUpdate.price=this.productUpdate.price.replace(",", "")
                    }
                    this.productUpdate.store_id= this.$route.params.store_slug
                    try{
                        const res= await productService.updateProduct({
                            data:this.productUpdate,
                            token:this.$cookies.get('token')
                        })
                        .finally(()=>{
                            this.btnDisable= false
                            this.loadingSpinner= false
                        })
                        this.$store.commit('open_toast',{
                            msg:res.data.message,
                            variant:'success'
                        })
                        this.getProduct()
                        this.$bvModal.hide('updateProduct')
                    }catch(e){
                        this.$store.commit('open_toast',{
                            msg:e.response.data.message,
                            variant:'error'
                        })
                        this.$refs.formUpdateProduct.setErrors(e.response.data.data);
                    }   
                }
            })
           
        }
    },
    async created() {
        if(process.client){
            this.getProduct()
            this.onClient=true
        }
        
    }
}
</script>

<style scoped lang="scss">
table > tbody > tr:not(:last-child) > td {
    border-bottom: 1px solid #dedede;
}
.edit{
    color: rgb(144, 146, 150)!important;
    
}
</style>
