<template>
    <div id="edit_store">
        <page-title title_text="ویرایش درگاه های متصل به فروشگاه" icon="product">
            <div @click="updateSetting">
                <Xbutton variant="success" v-text="'بروزرسانی تنظیمات'"></Xbutton>
            </div>
        </page-title>
        <div class="bg-white shadow-sm py-4 my-2 px-5" style="border-radius: 10px;">
            <template v-for="port in ports" v-if="port.is_deleted == false">
                <hr>
                {{port.en_name + ' ' +  PortTypes.getType(port.type)}}
                <hr>
                <div class="row">
                    <div v-if="gateway.type === port.type" class="col-sm my-2" v-for="gateway in gateways">
                        <div :class="formData.gateways.includes(gateway) ? 'card  border-primary' : 'card'" style="width: 18rem;cursor: pointer;" @click="addGateway(gateway,port.id)">
                            <div class="card-body">
                                <h5 class="card-title">{{ gateway.title }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ GatewayTypes.getType(gateway.type) }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
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
            GatewayTypes,
            PortTypes,
            gateways: null,
            ports : null,
            formData: {
                gateways : []
            }
        }
    },
    created() {
        this.getPorts()
        this.getGateways()
    },
    methods: {
        getGateways() {
            api.getUrl('https://core.paystar.ir/api/gateway/user-gateways-data', this.$cookies.get('token'))
                .then(res => {
                    this.gateways = res.data.data
                })
        },
        getPorts(){
            api.get('gateway/get-ports',this.$cookies.get('token')).then(res => {
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
                    alert(response.data.message)
                    this.getData()
                }).catch(({response}) => {
                alert(response.data.data[Object.keys(response.data.data)[0]])
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
