<template>
    <div>
        <page-title title_text="جزییات سفارش">
            <div @click="updateOrder">
                <Xbutton class="px-4" text="ذخیره تغییرات"></Xbutton>
            </div>
        </page-title>
        <div class="row">
            <div class="col-12">
                <div class="card" v-if="order">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm">
                                <label>شناسه</label>
                                <input disabled class="form-control" v-model="order.id"/>
                            </div>
                            <div class="col-sm">
                                <label>عنوان فروشگاه</label>
                                <input disabled class="form-control" v-model="order.store"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <label>قیمت (ریال)</label>
                                <input disabled class="form-control" v-model="order.payment_price"/>
                            </div>
                            <div class="col-sm">
                                <label>وضعیت</label>
                                <select class="form-control" v-model="form.status">
                                    <option v-for="status in OrderStatus.orderStatus" :value="status.value">{{status.text}}</option>
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
import OrderStatus from "~/constants/OrderStatus";
import PageTitle from "~/components/main/pageTitle";
import api from "~/services/api";
export default {
    name: "find",
    components: {PageTitle},
    layout : "main-content",
    data(){
        return {
            OrderStatus,
            order : null,
            form : {
                status : null
            }
        }
    },
    methods : {
        getOrder(){
            api.get('order/find/' + this.$route.params.id )
            .then(res => {
                this.order = res.data.data
                this.form.status = res.data.data.status
            })
        },
        updateOrder(){
            api.put('order/change-status/' + this.$route.params.id , {
                status : this.form.status
            })
                .then(response => {
                    alert(response.data.message)
                }).catch(({response}) => {
                alert(response.data.data[Object.keys(response.data.data)[0]])
            })
        }
    },
    mounted() {
        this.getOrder()
    }
}
</script>

<style scoped>

</style>
