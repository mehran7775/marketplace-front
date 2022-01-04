<template>
    <div>
        <client-only>
            <div class="w-100">
                <div v-if="onClient" class="w-100">
                    <page-title title_text="پورت ها" icon="customer">
                        <router-link to="/admin/ports/add" class="btn btn-success shadow-sm mx-2 px-4 py-2"
                                    style="border-radius: 20px; border-color: #bbb;">
                            <span class="pr-2">ساخت پورت جدید</span>
                        </router-link>
                    </page-title>
                    <div class="bg-white shadow-sm py-3 my-2" style="border-radius: 10px;">
                        <div class="px-3" v-if="ports.length > 0">
                            <div class="table-responsive">
                                <table class="table  table-responsive table-borderless text-center">
                                    <thead>
                                    <tr>
                                        <th scope="col" style="background-color: #eee;  border-radius: 0 16px 16px 0;">#</th>
                                        <th scope="col" style="background-color: #eee;">عنوان</th>
                                        <th scope="col" style="background-color: #eee;">نوع</th>
                                        <th scope="col" style="background-color: #eee;">وضعیت</th>
                                        <th scope="col" style="background-color: #eee;border-radius:16px 0 0 16px ;">عملیات</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="port in ports" :key="port.id" v-if="!port.is_deleted">
                                        <td>{{ port.id }}</td>
                                        <td>{{ port.en_name }}</td>
                                        <td>{{ PortTypes.getType(port.type) }}</td>
                                        <td>
                                            <b-badge :variant="PortStatus.getStatus(port.status).variant">
                                                {{ PortStatus.getStatus(port.status).text }}
                                            </b-badge>
                                        </td>
                                        <td>
                                            <button class="btn p-0 m-0 text-danger" @click="deletePort(port.id)">
                                            <span class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm">
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#ff6060"><path
                                    d="M0 0h24v24H0V0z" fill="none"/><path
                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
                                </span>
                            </span>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>
import PortTypes from "~/constants/PortTypes";
import PortStatus from "~/constants/PortStatus";
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";

export default {
    name: "index",
    components: {PageTitle},
    layout: "main-content",
    data() {
        return {
            onClient:false,
            PortTypes,
            PortStatus,
            ports: []
        }
    },
    mounted() {
        this.getPorts()
    },
    methods: {
        async deletePort(id) {
            let r = confirm('آیا از حذف پورت اطمینان دارید؟')
            if (r == true) {
                let res = await this.$axios.post('gateway/port/delete/' + id)
                alert(res.data.message)
                this.getPorts()
            }
        },
        async getPorts() {
            if(process.client){
                let res = await api.get('gateway/get-ports',this.$cookies.get('token'))
                this.ports = res.data.data.data
                this.onClient= true
            }
        }
    }

}
</script>

<style scoped>

</style>
