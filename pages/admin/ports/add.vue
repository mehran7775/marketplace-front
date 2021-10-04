<template>
    <div class="row">
        <div class="col-12 p-5 mt-5">
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
                        <b-button type="submit" variant="primary">ثبت پورت</b-button>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PortTypes from "~/constants/PortTypes";
import PortStatus from "~/constants/PortStatus";

export default {
    name: "add",
    layout: "main-content",
    data() {
        return {
            PortTypes,
            PortStatus,
            form: {
                payment_company: 'paystar',
                port_type: 'PF',
                status: 1
            }
        }
    },
    methods: {
        async onSubmit(event) {
            try {
                event.preventDefault()
                let res = await this.$axios.post('gateway/port/create', this.form)
                alert(res.data.message)
            } catch (e) {
                alert(e.message)
            }
        },
    }
}
</script>

<style scoped>

</style>
