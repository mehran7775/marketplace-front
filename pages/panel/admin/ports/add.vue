<template>
   <div>
        <div class="row">
            <div class="col-12 p-5 mt-5">
                <div class="alert alert-danger" role="alert" v-if="message">
                    {{message}}
                </div>
                <div class="card">
                    <div class="card-body">
                        <b-form @submit="onSubmit">
                            <b-form-group label="شرکت پرداخت" label-for="input-1">
                                <b-form-select v-model="form.payment_company">
                                    <b-form-select-option value="paystar">پی استار</b-form-select-option>
                                </b-form-select>
                            </b-form-group>
                            <b-form-group label="نوع پورت" label-for="input-1">
                                <b-form-select v-model="form.port_type" :options="PortTypes.portTypes">
                                </b-form-select>
                            </b-form-group>
                            <b-form-group label="وضعیت" label-for="input-1">
                                <b-form-select v-model="form.status" :options="PortStatus.portStatus">
                                </b-form-select>
                            </b-form-group>
                            <Xbutton
                            is_submit
                            class="rounded-0"
                            text="ثبت پورت"
                            :variant="'primary'"
                            :disable="btnDisable"
                            >
                                <template #spinner>
                                    <b-spinner v-show="laodingSpinner" small ></b-spinner>
                                </template>            
                            </Xbutton>
                        </b-form>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import PortTypes from "~/constants/PortTypes";
import PortStatus from "~/constants/PortStatus";
import api from "~/services/api";

export default {
    name: "add",
    layout: "main-content",
    data() {
        return {
            PortTypes,
            message : null,
            PortStatus,
            form: {
                payment_company: 'paystar',
                port_type: 'PF',
                status: 1
            },
            btnDisable: false,
            laodingSpinner: false

        }
    },
    methods: {
        onSubmit(event) {
                event.preventDefault()
                this.btnDisable= true
                this.laodingSpinner= true
                api.post('gateway/port/create', this.form).then(response => {
                       this.message =  response.data.message
                    }).catch(({response}) => {
                    this.message = response.data.message
                }).finally(() => {
                    this.btnDisable= false
                    this.laodingSpinner= false
                })
        },
    }
}
</script>

<style scoped>

</style>
