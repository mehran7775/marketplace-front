<template>
        <div class="row">
            <div class="col-12 p-5 mt-5">
                <div class="card" v-if="users.length > 0">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">نام</th>
                                <th scope="col">نوع</th>
                                <th scope="col">تلفن</th>
                                <th scope="col">وضعیت</th>
                                <th scope="col">جزییات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user in users" :key="user.id" >
                                <td>{{user.id}}</td>
                                <td>{{user.full_name}}</td>
                                <td>{{ UserTypes.getType(user.user_type) }}</td>
                                <td>{{user.phone}}</td>
                                <td><b-badge :variant="UserStatus.getStatus(user.status).variant">{{UserStatus.getStatus(user.status).text}}</b-badge></td>
                                <td><router-link class="btn btn-primary" :to="'/admin/users/' + user.id + '/find'">جزییات</router-link></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import UserStatus from "~/constants/UserStatus";
import UserTypes from "~/constants/UserTypes";

export default {
    name: "index",
    layout : "main-content",
    data(){
        return {
            UserStatus,
            UserTypes,
            users : []
        }
    },
    async created(){
        let res = await this.$axios.get('user/get')
        this.users = res.data.data.data
    }
}
</script>

<style scoped>

</style>
