<template>
    <div class="row">
        <div class="col-12 p-5 mt-5">
            <router-link class="btn btn-success my-3" to="/admin/ports/add">ساخت پورت جدید</router-link>
            <div class="card" v-if="ports.length > 0">
                <div class="card-body">
                    <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">عنوان</th>
                        <th scope="col">نوع</th>
                        <th scope="col">وضعیت</th>
                        <th scope="col">عملیات</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="port in ports" :key="port.id" v-if="!port.is_deleted">
                        <td>{{port.id}}</td>
                        <td>{{port.en_name}}</td>
                        <td>{{ PortTypes.getType(port.type) }}</td>
                        <td><b-badge :variant="PortStatus.getStatus(port.status).variant">{{PortStatus.getStatus(port.status).text}}</b-badge></td>
                        <td>
                            <b-btn variant="danger" @click="deletePort(port.id)">حذف</b-btn>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PortTypes from "~/constants/PortTypes";
import PortStatus from "~/constants/PortStatus";
export default {
    name: "index",
    layout: "main-content",
    data(){
        return {
            PortTypes,
            PortStatus,
            ports : []
        }
    },
    mounted(){
        this.getPorts()
    },
    methods : {
        async deletePort(id){
            let r = confirm('آیا از حذف پورت اطمینان دارید؟')
            if(r == true){
                let res = await this.$axios.post('gateway/port/delete/' + id)
                alert(res.data.message)
                this.getPorts()
            }
        },
        async getPorts(){
            let res = await this.$axios.get('gateway/get-ports')
            this.ports = res.data.data.data
        }
    }

}
</script>

<style scoped>

</style>
