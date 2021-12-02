<template>
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
                    <select class="form-control" v-model="filter_status">
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
                                <nuxt-link class="btn p-0 m-0 text-danger" :to="'products/' + product.id + '/find'">
                                <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"
                                     fill="#bbb"><path d="M0 0h24v24H0V0z" fill="none"></path><path
                                    d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                </span>
                                </nuxt-link>
                                <!--begin modal-->
                                <b-button variant="link" class="p-0 m-0" v-b-modal="'my-modal' + index">
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
                                 <!-- end modal -->
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
    </div>
</template>

<script>
import pagination from "~/components/pagination";
import CustomerStatus from "~/constants/CustomerStatus";
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";
//import datePicker from 'vue-persian-datetime-picker'
import ProductStatus from "~/constants/ProductStatus";

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
            ProductStatus,
            filter_title: null,
            filter_from_date: null,
            filter_to_date: null,
            filter_price : null,
            filter_status: null,
            products: null,
            per_page: 15,
            product_status : null
        }
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
        }
    },
    async created() {
        let res = await api.get('product/' + this.$route.params.store_slug + '?perpage=' + this.per_page, this.$cookies.get('token'))
        this.products = res.data.data
    }
}
</script>

<style>
table > tbody > tr:not(:last-child) > td {
    border-bottom: 1px solid #dedede;
}
</style>
