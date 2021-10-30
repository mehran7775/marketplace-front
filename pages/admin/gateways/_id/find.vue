<template>
    <div>
        <page-title title_text="ویرایش درگاه">
            <div @click="updateGateway">
                <Xbutton class="px-4" text="ذخیره تغییرات"></Xbutton>
            </div>
        </page-title>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <div class="row" v-if="gateway">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm">
                                <label class="mt-2">شناسه</label>
                                <input disabled class="form-control" v-model="gateway.id"/>
                            </div>
                            <div class="col-sm">
                                <label class="mt-2">عنوان درگاه</label>
                                <input disabled class="form-control" v-model="gateway.title"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <label class="mt-2">تاریخ ثبت</label>
                                <input disabled class="form-control" v-model="gateway.create_at"/>
                            </div>
                            <div class="col-sm">
                                <label class="mt-2">وضعیت</label>
                                <select class="form-control" v-model="form.status">
                                    <option v-for="status in GatewayStatus.gatewayStatus" :value="status.value">{{status.text}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "~/services/api";
import GatewayStatus from "~/constants/GatewayStatus";
import PageTitle from "~/components/main/pageTitle";

export default {
    name: "find",
    components: {PageTitle},
    layout: "main-content",
    data() {
        return {
            message: null,
            error: null,
            GatewayStatus,
            gateway: null,
            form: {
                status : null,
            }
        }
    },
    methods: {
        getGateway() {
            api.get('gateway/find/' + this.$route.params.id)
                .then(res => {
                    this.gateway = res.data.data
                    this.form.status = res.data.data.status
                })
        },
        updateGateway(){
            api.post('gateway/change-status/' + this.$route.params.id , {
                status : this.form.status
            })
                .then(response => {
                    this.message = response.data.message
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            })
        }
    },
    mounted() {
        this.getGateway()
    }
}
</script>

<style scoped>

</style>
