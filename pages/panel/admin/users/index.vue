<template>
   <div>
        <page-title title_text="فروشندگان" icon="gateway">
        </page-title>
        <div>
            <div class="bg-white shadow-sm p-3 my-3" style="border-radius: 10px;">
                <div class="row">
                    <div class="col-sm my-2">
                        <input class="form-control" placeholder="نام کامل" v-model="filter_name">
                    </div>
                    <div class="col-sm my-2">
                        <input class="form-control" placeholder="موبایل" v-model="filter_mobile">
                    </div>
                    <div class="col-sm my-2">
                        <div>
                            <Xbutton
                            :on_click="()=> get_data(users.first_page_url)"
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
            <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="users">
                <div class="px-3">
                    <div class="overflow-auto">
                        <table class="table table-borderless text-center">
                            <thead>
                            <tr>
                                <th scope="col" style="background-color: #eee;border-radius: 0 16px 16px 0;">#</th>
                                <th scope="col" style="background-color: #eee;">نام</th>
                                <th scope="col" style="background-color: #eee;">نوع</th>
                                <th scope="col" style="background-color: #eee;">تلفن</th>
                                <th scope="col" style="background-color: #eee;">وضعیت</th>
                                <th scope="col" style="background-color: #eee;border-radius: 16px 0px 0px 16px;">
                                    جزییات
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user in users.data" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.full_name }}</td>
                                <td>{{ UserTypes.getType(user.user_type) }}</td>
                                <td>{{ user.phone }}</td>
                                <td>
                                    <b-badge :variant="UserStatus.getStatus(user.status).variant">
                                        <span v-if="UserStatus.getStatus(user.status)">{{ UserStatus.getStatus(user.status).text }}</span>
                                    </b-badge>
                                </td>
                                <td>
                                    <nuxt-link class="btn p-0 m-0 text-danger"
                                            :to="'/panel/admin/users/' + user.id + '/find'">
                                <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"
                                    fill="#bbb"><path d="M0 0h24v24H0V0z" fill="none"></path><path
                                    d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                </span>
                                    </nuxt-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr v-if="users.next_page_url || users.prev_page_url">

                <pagination v-if="users.next_page_url || users.prev_page_url" :data="users" :get_data="get_data" :perpage="per_page"></pagination>
            </div>
        </div>
   </div>
</template>

<script>
import UserStatus from "~/constants/UserStatus";
import UserTypes from "~/constants/UserTypes";
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";
import pagination from "~/components/pagination";
export default {
    name: "index",
    components: {PageTitle,pagination,},
    layout: "main-content",
    data() {
        return {
            UserStatus,
            UserTypes,
            users: [],
            per_page: 15,
            filter_name : null,
            filter_mobile : null,
             btnDisableAction: false,
            laodingSpinnerAction: false,
            btnDisableRemove: false,
            laodingSpinnerRemove: false,
        }
    },
    computed: {
        query() {
            let res = '';
            if (this.filter_name != null) {
                res = res + '&query[full_name]=' + this.filter_name;
            }
            if (this.filter_mobile != null) {
                res = res + '&query[phone]=' + this.filter_mobile;
            }
            return res;
        }
    },
    methods: {
        resetQuery() {
            this.filter_name = null;
            this.filter_mobile = null;
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
            let res = await api.getUrl(url  + this.query + '&perpage=' + this.per_page)
            .finally(()=> {
                this.btnDisableAction= false
                this.laodingSpinnerAction= false
                this.btnDisableRemove= false
                this.laodingSpinnerRemove= false
            })
            this.users = res.data.data
        },
        reset_and_get() {
            this.resetQuery();
            this.get_data(this.users.path + '?page=1', 'removeFilter');
        },
    },
    async created() {
        let res = await api.get('user/get')
        this.users = res.data.data
        
    }
}
</script>

<style scoped>

</style>
