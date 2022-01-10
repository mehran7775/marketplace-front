<template>
    <div>
        <client-only >
           <div class="w-100">
                <div v-if="onClient" class="w-100">
                    <nuxt-link to="products/create" class="btn btn-success shadow-sm mx-2 px-4 py-2"
                    style="border-radius: 20px; border-color: #bbb;">
                    <span class="pr-2">ثبت محصول جدید</span>
                    </nuxt-link>
                    <div class="bg-white shadow-sm p-3 my-3" style="border-radius: 10px;">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-lg-3 my-2">
                                <input class="form-control" placeholder="عنوان محصول" v-model="filter_title">
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3 my-2">
                                <input class="form-control" placeholder="قیمت" v-model="filter_price">
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3 my-2">
                                <input class="form-control" placeholder="تاریخ ایجاد" v-model="filter_created_at">
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3 my-2">
                                <select class="form-control" id="selectState" v-model="filter_status">
                                    <option :value="null">وضعیت</option>
                                    <option v-for="status in ProductStatus.productStatus" :value="status.value">{{status.text}}</option>
                                </select>
                            </div>
                            <div class="col-sm my-2">
                                <div>
                                <Xbutton
                                :on_click="()=> get_data(products.first_page_url)"
                                :class="query ? 'mr-2' : null"
                                text="اعمال فیلتر"
                                variant="success"
                                :disable="btnDisableAction"
                                >
                                    <template #spinner>
                                        <b-spinner v-show="laodingSpinnerAction" small ></b-spinner>
                                    </template>            
                                </Xbutton>
                                <Xbutton
                                v-if="query"
                                :on_click="()=> reset_and_get()"
                                class="mr-3"
                                text="حذف فیلتر"
                                variant="danger"
                                >
                                </Xbutton>
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
                                        <th scope="col" style="background-color: #eee;">تاریخ ایجاد</th>
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
                                            <img :src="product.thumbnail" width="30px" height="30"/>
                                        </td>
                                        <td>{{ product.quantity }}</td>
                                        <td>{{ product.price }}</td>
                                        <td v-text="product.created_at">-</td>
                                        <td>
                                            <b-badge :variant="ProductStatus.getStatus(product.status).variant">
                                                    {{ProductStatus.getStatus(product.status).text}}
                                            </b-badge>
                                        </td>
                                        <td class="d-flex align-items-center justify-content-center flex-wrap">
                                            <nuxt-link class="btn p-0 m-0 text-danger" :to="'products/' + product.id + '/find'" v-b-tooltip.hover title="جزئیات">
                                             <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="rgb(144, 146, 150)"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                            </span>
                                            </nuxt-link>
                                            <Xswitches :value="product.status === 0 ? false : true"  @input="()=> changeProductStatus(product.status,product.id)"
                                                v-b-tooltip.hover title="تغییر وضعیت"
                                            />
                                            <span class="mx-1" v-b-tooltip.hover title="ویرایش سریع">
                                                <fa icon="pencil-alt" class="ficon cursor_pointer fa-lg" 
                                                @click="triggerEditProduct(product)"
                                                ></fa>
                                            </span>
                                            <span v-b-tooltip.hover title="حذف">
                                                <fa icon="trash" class="ficon cursor_pointer fa-lg" 
                                                @click="triggerDeleteProduct(product)"
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
                    <b-modal
                        dir="rtl"
                        id="updateProduct"
                        centered
                        title="ویرایش محصول"
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
                    <b-modal
                    dir="rtl"
                    id="deleteProductModal"
                    centered
                    title="حذف محصول"
                    >
                    <p class="my-4">
                    آیا می خواهید محصول  
                    <span
                        class="text-success font-weight-bold"
                        v-text="titleDelete"
                     ></span>
                    را حذف کنید؟
                    </p>
                    <template #modal-footer>
                    <Xbutton
                        text="انصراف"
                        :on_click="() => $bvModal.hide('deleteProductModal')"
                        variant="info"
                    ></Xbutton>
                    <Xbutton
                        text="تایید"
                        :disable="btnDisable"
                        :on_click="() => deleteProduct()"
                    >
                        <template #spinner>
                        <b-spinner
                            v-show="loadingSpinner"
                            small
                            class="float-left"
                        ></b-spinner>
                        </template>
                    </Xbutton>
                    </template>
                    </b-modal>
                </div>
           </div>
        </client-only>
   </div>
</template>

<script>
import pagination from "~/components/pagination";
import CustomerStatus from "~/constants/CustomerStatus";
import api from "~/services/api";
//import datePicker from 'vue-persian-datetime-picker'
import ProductStatus from "~/constants/ProductStatus";
import { productService } from '~/services/apiServices'
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
    name: "index",
    components: {
        pagination,
        //datePicker
    },
    layout: "main-content",
    async created() {
        if(process.client){
            await this.getProduct()
            this.onClient=true
        }
        
    },
    data() {
        return {
            onClient:false,
            ProductStatus,
            filter_title: null,
            filter_price : null,
            filter_status: null,
            filter_created_at: null,
            products: null,
            per_page: 15,
            product_status : null,
            productUpdate:{},
            btnDisable:false,
            loadingSpinner:false,
            productDe:{},
            tr:false,
            btnDisableAction:false,
            laodingSpinnerAction:false

        }
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    computed: {
        query() {
            let res = '';
            if (this.filter_title) {
                res = res + '&query[title]=' + this.filter_title;
            }
            if (this.filter_status) {
                res = res + '&query[status]=' + this.filter_status;
            }
            if (this.filter_price) {
                res = res + '&query[price]=' + this.filter_price;
            }
            if (this.filter_created_at) {
                res = res + '&query[created_at]=' + this.filter_created_at;
            }
            return res;
        },
        titleDelete(){
            return this.productUpdate.title 
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
            this.filter_price = null
            this.filter_created_at = null
        },
        async get_data(url) {
            this.btnDisableAction= true
            this.laodingSpinnerAction= true
            const res = await api.getUrl(url + this.query + '&perpage=' + this.per_page, this.$cookies.get('token'))
            .finally(()=>{
                this.btnDisableAction= false
                this.laodingSpinnerAction= false
            })
            this.products = res.data.data
        },
        reset_and_get() {
            this.resetQuery();
            this.get_data(this.products.path + '?page=1');
        },
        async changeProductStatus(status,product){
            const changeStatus= ()=>{
                if( status === 1 ){
                    return 0
                }else{
                    return 1
                }
            }
            console.log(changeStatus())
            let res = await api.post('product/change-status/' + product , {status : changeStatus()})
            await this.get_data(this.products.path + '?page=1');
        },
        triggerEditProduct(product){
            Object.assign(this.productUpdate,product)
            setTimeout(() => {
                 this.$bvModal.show('updateProduct')
            }, 500);
           
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
                    console.log(this.productUpdate)
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
           
        },
        triggerDeleteProduct(product){
            this.productUpdate= product
            this.$bvModal.show('deleteProductModal')
        },
       async deleteProduct(){
           try{
               const res= await productService.deleteProduct(
                    {
                        id: this.productDe.id,
                        token : this.$cookies.get('token')
                    }
                )
                if(res.status === 200){
                    this.$bvModal.hide('deleteProductModal')
                    this.$store.commit("open_toast", {
                    msg: res.data.message,
                    variant: "success",
                    });
                    this.getProduct()
                }
           }catch(e){
                this.$store.commit("open_toast", {
                   msg:e.response.data.message,
                  variant: "error",
                });
           }
        }
    }
}
</script>

<style scoped lang="scss">
table > tbody > tr:not(:last-child) > td {
    border-bottom: 1px solid #dedede;
}
.ficon{
    color: rgb(144, 146, 150)!important;
    
}
</style>
