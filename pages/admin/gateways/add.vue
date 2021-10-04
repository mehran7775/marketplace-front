<template>
    <div class="row">
        <div class="col-12 p-5 mt-5">
            <div class="card">
                <div class="card-body">
                    <b-form @submit="onSubmit">
                        <b-form-group label="عنوان" label-for="input-1">
                            <b-form-input v-model="form.title"></b-form-input>
                        </b-form-group>
                        <b-form-group label="پورت" label-for="input-1">
                            <b-form-select  class="form-control" v-model="port" :options="ports">
                            </b-form-select>
                        </b-form-group>
                        <b-form-group label="شناسه درگاه پرداخت یاری" label-for="input-1" v-if="port && port.type == 'PF'">
                            <b-form-input v-model="port_config"></b-form-input>
                        </b-form-group>
                        <b-form-group label="توکن درگاه کارت به کارت" label-for="input-1"  v-if="port && port.type == 'Card'">
                            <b-form-input v-model="port_config"></b-form-input>
                        </b-form-group>
                        <b-form-group label="توکن درگاه تلفنی" label-for="input-1"  v-if="port && port.type == 'IVR'">
                            <b-form-input v-model="port_config"></b-form-input>
                        </b-form-group>
                        <b-form-group label="شماره ترمینال درگاه مستقیم" label-for="input-1"  v-if="port && port.type == 'Dedicated'">
                            <b-form-input v-model="port_config"></b-form-input>
                        </b-form-group>
                        <b-form-group label="وضعیت" label-for="input-1">
                            <b-form-select class="form-control" v-model="form.status" :options="GatewayStatus.gatewayStatus">
                            </b-form-select>
                        </b-form-group>
                        <b-button type="submit" variant="primary">ثبت پورت</b-button>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PortTypes from "~/constants/PortTypes";
import GatewayStatus from "~/constants/GatewayStatus";

export default {
    name: "add",
    layout: "main-content",
    data() {
        return {
            PortTypes,
            GatewayStatus,
            port: null,
            form: {
                title: '',
                port_config : null,
                port_id : null,
                status: 1
            },
            ports : [],
            port_config : null
        }
    },
    watch : {
        port_config : function (val){
            if (this.port.type == 'PF'){
                this.form.port_config = {sequence : val}
            }
            if (this.port.type == 'Card'){
                this.form.port_config = {token : val}
            }
            if (this.port.type == 'IVR'){
                this.form.port_config = {token : val}
            }
            if (this.port.type == 'Dedicated'){
                this.form.port_config = {terminal_id : val}
            }
        }
    },
    methods: {
        async onSubmit(event) {
            try {
                event.preventDefault()
                this.form.port_id = this.port.id
                let res = await this.$axios.post('gateway/create', this.form)
                alert(res.data.message)
            } catch (e) {
                alert(e.message)
            }
        },
        async getPorts(){
            let res = await this.$axios.get('gateway/get-ports')
            for (let port in res.data.data.data){
                port = res.data.data.data[port]
                console.log(port)
                if (!port.is_deleted){
                    this.ports.push({
                        text : port.en_name +  " " + PortTypes.getType(port.type),
                        value : port
                    })
                }
            }
        },
    },
    mounted() {
        this.getPorts()
    }
}
</script>

<style scoped>

</style>
