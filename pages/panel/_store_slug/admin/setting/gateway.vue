<template>
   <div>
        <div id="edit_store">
        <page-title title_text="ویرایش درگاه های متصل به فروشگاه" icon="product">
            <div @click="updateSetting">
                <Xbutton variant="success" v-text="'بروزرسانی تنظیمات'"></Xbutton>
            </div>
        </page-title>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <div class="bg-white shadow-sm py-4 my-2 px-5" style="border-radius: 10px;">
            <template v-for="port in ports"  v-if="port_types.includes(port.type)">
                <hr>
                {{port.fa_name + ' ' +  PortTypes.getType(port.type)}}
                <hr>
                <div class="row">
                    <div v-if="gateway.type === port.type" class="col-sm my-2" v-for="gateway in gateways">
                        <div :class="formData.gateways.includes(gateway) ? 'card  border-primary' : 'card'" style="width: 18rem;cursor: pointer;" @click="addGateway(gateway,port.id)">
                            <div :class="'card-body'">
                                <h5 class="card-title">{{ gateway.title }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ GatewayTypes.getType(gateway.type) }}</h6>
                                <hr>
                                <span class="text-success" v-if="isSelected(gateway)">ثبت شده</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        </div>
             
   </div>
</template>

<script>
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";
import GatewayTypes from "~/constants/GatewayTypes";
import PortTypes from "~/constants/PortTypes";

export default {
    components: {PageTitle},
    layout: "main-content",
    data() {
        return {
            port_types : [

            ],
            GatewayTypes,
            PortTypes,
            message: null,
            error: null,
            gateways: null,
            ports : null,
            formData: {
                gateways : []
            },
            selected_gateways : []
        }
    },
    async created() {
       
        await this.getData()
        await this.getPorts()
        await this.getGateways()

    },
    methods: {
        getData() {
            api.get('store/find/' + this.$route.params.store_slug, this.$cookies.get('token'))
                .then(res => {
                    this.selected_gateways =  res.data.data.gateways
                })
        },
        isSelected(gateway){
            if (gateway.type == 'PF'){
                let key = gateway.port_config.sequence
                let sequences = [];
                for (let index in this.selected_gateways){
                    sequences.push(this.selected_gateways[index].port_config.sequence)
                }
                if (sequences.includes(key)){
                    return true
                }
            }
            if (gateway.type == 'Card'){
                let key = gateway.port_config.token
                let sequences = [];
                for (let index in this.selected_gateways){
                    sequences.push(this.selected_gateways[index].port_config.token)
                }
                if (sequences.includes(key)){
                    return true
                }
            }
            if (gateway.type == 'IVR'){
                let key = gateway.port_config.sequence
                let sequences = [];
                for (let index in this.selected_gateways){
                    sequences.push(this.selected_gateways[index].port_config.sequence)
                }
                if (sequences.includes(key)){
                    return true
                }
            }
            if (gateway.type == 'Dedicated'){
                let key = gateway.port_config.terminal_id
                let sequences = [];
                for (let index in this.selected_gateways){
                    sequences.push(this.selected_gateways[index].port_config.terminal_id)
                }
                if (sequences.includes(key)){
                    return true
                }
            }
        },
        getGateways() {
            api.getUrl('https://core.paystar.ir/api/gateway/user-gateways-data', this.$cookies.get('token'))
                .then(res => {
                    this.gateways = res.data.data
                    for (let key in this.gateways){
                        let item = this.gateways[key]
                        if (!this.port_types.includes(item.type)){
                            this.port_types.push(item.type)
                        }
                    }
                })
        },
        getPorts(){
            api.get('gateway/get-active-ports',this.$cookies.get('token')).then(res => {
                this.ports = res.data.data.data
            })
        },
        addGateway(gateway,port_id){
            gateway.port_id = port_id,
                gateway.port_type = gateway.type
            if (this.formData.gateways.includes(gateway)){
                var index = this.formData.gateways.indexOf(gateway);
                if (index > -1) {
                    this.formData.gateways.splice(index, 1);
                }
                return this.formData.gateways;
            }else {
                this.formData.gateways.push(gateway)
            }

        },
        updateSetting() {
            let form_data = new FormData();
            for (let item in this.formData.gateways){
                for(let key in Object.keys(this.formData.gateways[item])){
                    key = Object.keys(this.formData.gateways[item])[key]
                    if (key === 'port_config'){
                        for(let config in Object.keys(this.formData.gateways[item]['port_config'])){
                            config = Object.keys(this.formData.gateways[item]['port_config'])[config]
                            form_data.append('gateways' + '['+ item +']' + '[port_config]' + '['+ config +']', this.formData.gateways[item]['port_config'][config]);
                        }
                    }else {
                        form_data.append('gateways' + '['+ item +']' + '['+ key +']', this.formData.gateways[item][key]);
                    }
                }
            }

            api.post('store/update-gateways/' + this.$route.params.store_slug, form_data, this.$cookies.get('token'))
                .then(response => {
                    this.message = response.data.message
                    this.getData()
                }).catch(({response}) => {
                this.error = response.data.data[Object.keys(response.data.data)[0]]
            })
        }
    }
}
</script>

<style>
#edit_store .custom-file-label {
    border: none;
    background: none;
}

#edit_store .custom-file-label::after {
    display: none;
}
</style>
