<template>
    <div>
        <page-title title_text="فروشگاه ها" icon="store">
        </page-title>
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-3 my-2">
                <input class="form-control" placeholder="نام فروشگاه" v-model="filter_title">
            </div>
            <div class="col-12 col-sm-6 col-lg-3 my-2">
                <input class="form-control" placeholder="نام انگلیسی فروشگاه" v-model="filter_slug">
            </div>
            <div class="col-12 col-sm-6 col-lg-3 my-2">
                <input class="form-control" placeholder="تاریخ ایجاد" v-model="filter_created_at">
            </div>
            <div class="col-12 col-sm-6 col-lg-3 my-2">
                <input class="form-control" placeholder="از تاریخ" v-model="filter_from_date">
            </div>
            <div class="col-12 col-sm-6 col-lg-3 my-2">
                <input class="form-control" placeholder="تا تاریخ" v-model="filter_to_date">
            </div>
            <div class="col-12 col-sm-6 col-lg-3 my-2">
                <select class="form-control" id="selectState" v-model="filter_status">
                    <option :value="null">وضعیت</option>
                    <option v-for="status in StoreStatus.storeStatus" :value="status.value">{{status.text}}</option>
                </select>
            </div>
                <div class="col-sm my-2">
                    <div>
                    <Xbutton
                    :on_click="()=> get_data(stores.first_page_url)"
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
        <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="stores">
            <div class="px-3">
                <div class="overflow-auto">
                    <table class="table table-borderless text-center">
                        <thead>
                        <tr>
                            <th scope="col" style="background-color: #eee;  border-radius: 0 16px 16px 0;">#</th>
                            <th scope="col" style="background-color: #eee;">عنوان</th>
                            <th scope="col" style="background-color: #eee;">نام فروشنده</th>
                            <th scope="col" style="background-color: #eee;">تاریخ ثبت</th>
                            <th scope="col" style="background-color: #eee;">وضعیت</th>
                            <th scope="col" style="background-color: #eee; border-radius: 16px 0px 0px 16px;" >عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(store, index) in stores.data" :key="index">
                            <td>{{ store.id }}</td>
                            <td>{{ store.fa_name }}</td>
                            <td>
                                <!-- admin/users/pq93n/find -->
                                <nuxt-link :to="`/admin/users/${ store.seller_id }/find`" class="text-info">{{ store.seller_name }}</nuxt-link>
                            </td>
                            <td>{{ store.create_at }}</td>
                            <td>
                                <b-badge :variant="StoreStatus.getStatus(store.status).variant">
                                    {{ StoreStatus.getStatus(store.status).text }}
                                </b-badge>

                            </td>
                            <td>
                                <nuxt-link class="btn p-0 m-0 text-danger" :to="'stores/' + store.id + '/find'">
                                <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#bbb"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                </span>
                                </nuxt-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr v-if="stores.next_page_url || stores.prev_page_url">

            <pagination v-if="stores.next_page_url || stores.prev_page_url" :data="stores" :get_data="get_data" :perpage="per_page"></pagination>
        </div>
    </div>
     
</template>

<script>
import pagination from "~/components/pagination";
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";
//import datePicker from 'vue-persian-datetime-picker'
import StoreStatus from "~/constants/StoreStatus";
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
            StoreStatus,
            filter_title : null,
            filter_slug : null,
            filter_created_at : null,
            filter_from_date : null,
            filter_to_date : null,
            filter_status : null,
            stores: null,
            per_page: 15,
            btnDisableAction:false,
            laodingSpinnerAction:false
            
        }
    },
    computed: {
        query() {
            let res = '';
            if (this.filter_title) {
                res = res + '&query[fa_name]=' + this.filter_title;
            }
            if (this.filter_slug) {
                res = res + '&query[slug]=' + this.filter_slug;
            }
            if (this.filter_created_at) {
                res = res + '&query[created_at]=' + this.filter_created_at;
            }
            
            if (this.filter_from_date) {
                res = res + '&query[from_date]=' + this.filter_from_date;
            }
            if (this.filter_to_date) {
                res = res + '&query[to_date]=' + this.filter_to_date;
            }
            if (this.filter_status != null) {
                res = res + '&query[status]=' + this.filter_status;
            }
            return res;
        }
    },
    methods: {
        resetQuery() {
            this.filter_title = null;
            this.filter_slug = null;
            this.filter_created_at = null;
            this.filter_from_date = null;
            this.filter_to_date = null;
            this.filter_status = null;
        },
        async get_data(url) {
            this.btnDisableAction= true
            this.laodingSpinnerAction= true
            let res = await api.getUrl(url + this.query + '&perpage=' + this.per_page)
            .finally(()=>{
                this.btnDisableAction= false
                this.laodingSpinnerAction= false
            })
            this.stores = res.data.data
        },
        reset_and_get() {
            this.resetQuery();
            this.get_data(this.stores.path + '?page=1');
        },
    },
    async created() {
       if(process.client){
            await api.get('store/all' + '?perpage=' + this.per_page)
            .then(res => {
                this.stores = res.data.data
            })
       }

    }
}
</script>

<style>
table > tbody > tr:not(:last-child) > td {
    border-bottom: 1px solid #dedede;
    
}

</style>
