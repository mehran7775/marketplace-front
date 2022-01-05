<template>
    <div>
        <client-only>
          <div class="w-100">
            <div v-if="onClient" class="w-100">
                <page-title title_text="درگاه ها" icon="gateway">
                </page-title>
                <div class="bg-white shadow-sm p-3 my-3" style="border-radius: 10px;">
                    <div class="row">
                        <div class="col-sm my-2">
                            <input class="form-control" placeholder="نام" v-model="filter_title">
                        </div>
                        <div class="col-sm my-2">
                            <select class="form-control" v-model="filter_status">
                                <option v-for="status in GatewayStatus.gatewayStatus" :value="status.value">
                                    {{status.text}}
                                </option>
                            </select>
                        </div>
                        <div class="col-sm my-2">
                            <div>
                                <Xbutton
                                :on_click="()=> get_data(gateways.first_page_url)"
                                :class="query ? 'mr-2' : 'btn-block'"
                                text="اعمال فیلتر"
                                variant="success"
                                :disable="btnDisableAction"
                                style="border-radius: 10px;"
                                >
                                    <template #spinner>
                                        <b-spinner v-show="laodingSpinnerAction" small ></b-spinner>
                                    </template>            
                                </Xbutton>
                                <Xbutton
                                v-if="query"
                                :on_click="()=> reset_and_get()"
                                class="mr-3"
                                variant="danger"
                                text="حذف فیلتر"
                                :disable="btnDisableRemove"
                                style="border-radius: 10px;"
                                >
                                    <template #spinner>
                                        <b-spinner v-show="laodingSpinnerRemove" small ></b-spinner>
                                    </template>            
                                </Xbutton>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="gateways">

                    <div class="px-3">
                        <div class="table-responsive">
                            <table class="table  table-responsive table-borderless text-center">
                                <thead>
                                <tr>
                                    <th scope="col" style="background-color: #eee;border-radius: 0 16px 16px 0;" >#</th>
                                    <th scope="col" style="background-color: #eee;">عنوان</th>
                                    <th scope="col" style="background-color: #eee;">تاریخ ثبت</th>
                                    <th scope="col" style="background-color: #eee;">وضعیت</th>
                                    <th scope="col" style="background-color: #eee;border-radius: 16px 0px 0px 16px;" >عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(gateway, index) in gateways.data" :key="index">
                                    <td>{{ gateway.id }}</td>
                                    <td>{{ gateway.title }}</td>
                                    <td>{{ gateway.create_at }}</td>
                                    <td>
                                        <b-badge :variant="GatewayStatus.getStatus(gateway.status).variant">
                                        {{ GatewayStatus.getStatus(gateway.status).text}}
                                        </b-badge>
                                    </td>
                                    <td>
                                        <nuxt-link class="btn p-0 m-0 text-danger" :to="'gateways/' + gateway.id + '/find'">
                                        <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#bbb"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                        </span>
                                        </nuxt-link>
                                        <!--begin modal-->
                                        <b-button variant="link" class="p-0 m-0" v-b-modal="'my-modal' + index">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  fill="#bbb"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                                        </b-button>

                                        <b-modal hide-footer hide-header-close :id="'my-modal' + index" title="تغییر وضعیت درگاه">
                                            <b-form-group>
                                                <select class="form-control" v-model="gateway_status">
                                                    <option v-for="status in GatewayStatus.gatewayStatus" :value="status.value">
                                                        {{status.text}}
                                                    </option>
                                                </select>
                                            </b-form-group>
                                            <b-form-group>
                                                <b-button variant="primary" @click="changeGatewayStatus(gateway_status,gateway.id)">
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

                    <hr v-if="gateways.next_page_url || gateways.prev_page_url">

                    <pagination v-if="gateways.next_page_url || gateways.prev_page_url" :data="gateways" :get_data="get_data" :perpage="per_page"></pagination>
                </div>
            </div>
          </div>
        </client-only>
    </div>
</template>

<script>
import pagination from "~/components/pagination";
import CustomerStatus from "~/constants/CustomerStatus";
import PageTitle from "~/components/main/pageTitle";
import GatewayStatus from "~/constants/GatewayStatus";
import api from "~/services/api";
//import datePicker from 'vue-persian-datetime-picker'
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
            GatewayStatus,
            filter_title: null,
            filter_from_date: null,
            filter_to_date: null,
            filter_status : null,
            gateways: null,
            per_page: 15,
            gateway_status : null,
            btnDisableAction: false,
            laodingSpinnerAction: false,
            btnDisableRemove: false,
            laodingSpinnerRemove: false,
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
            return res;
        }
    },
    methods: {
        async changeGatewayStatus(status,id){
            await api.post('gateway/change-status/' + id , {
                status : status
            })
            await this.get_data(this.gateways.path + '?page=1');
        },
        resetQuery() {
            this.filter_title = null;
            this.filter_status = null;
        },
        async get_data(url, removeFilter=null) {
            if(removeFilter){
                this.btnDisableRemove= true
                this.laodingSpinnerRemove= true
            }else{
                this.btnDisableAction= true
                this.laodingSpinnerAction= true
            }
            this.btnDisableAction= true
            this.laodingSpinnerAction= true
            let res= await api.getUrl(url + this.query + '&perpage=' + this.per_page)
            .finally(() => {
                this.btnDisableAction= false
                this.laodingSpinnerAction= false
                this.btnDisableRemove= false
                this.laodingSpinnerRemove= false
            })
            this.gateways= res.data.data
        },
        reset_and_get() {
            this.resetQuery();
            this.get_data(this.gateways.path + '?page=1', 'removeFilter');
        },
    },
    async created() {
        if(process.client){
            let res = await api.get('gateway/all' + '?perpage=' + this.per_page)
            this.gateways = res.data.data
            this.onClient= true
        }
    }
}
</script>

<style>
table > tbody > tr:not(:last-child) > td {
    border-bottom: 1px solid #dedede;
}
</style>
