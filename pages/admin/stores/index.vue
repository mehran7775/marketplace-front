<template>
    <div>
        <page-title title_text="فروشگاه ها" icon="store">
        </page-title>
        <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="stores">
            <div class="px-3">
                <div class="table-responsive">
                    <table class="table  table-responsive table-borderless text-center">
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
            filter_title: null,
            filter_from_date: null,
            filter_to_date: null,
            filter_status : null,
            stores: null,
            per_page: 15
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
            return res;
        }
    },
    methods: {
        resetQuery() {
            this.filter_title = null;
            this.filter_status = null;
            this.filter_from_date = null;
            this.filter_to_date = null;
        },
        async get_data(url) {
            let res = await api.getUrl(url + this.query + '&perpage=' + this.per_page)
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
