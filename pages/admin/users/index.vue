<template>
    <div>
        <page-title title_text="فروشندگان" icon="gateway">
        </page-title>
        <div>
            <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;" v-if="users.length > 0">
                <div class="px-3">
                    <div class="table-responsive">
                        <table class="table  table-responsive table-borderless text-center">
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
                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.full_name }}</td>
                                <td>{{ UserTypes.getType(user.user_type) }}</td>
                                <td>{{ user.phone }}</td>
                                <td>
                                    <b-badge :variant="UserStatus.getStatus(user.status).variant">
                                        {{ UserStatus.getStatus(user.status).text }}
                                    </b-badge>
                                </td>
                                <td>
                                    <nuxt-link class="btn p-0 m-0 text-danger"
                                               :to="'/admin/users/' + user.id + '/find'">
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
            </div>
        </div>
    </div>
</template>

<script>
import UserStatus from "~/constants/UserStatus";
import UserTypes from "~/constants/UserTypes";
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";

export default {
    name: "index",
    components: {PageTitle},
    layout: "main-content",
    data() {
        return {
            UserStatus,
            UserTypes,
            users: []
        }
    },
    async created() {
        let res = await api.get('user/get', this.$cookies.get('token'))
        this.users = res.data.data.data
    }
}
</script>

<style scoped>

</style>
