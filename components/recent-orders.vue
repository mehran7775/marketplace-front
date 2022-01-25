<template>
    <div class="bg-white shadow-sm py-3 h-100" style="border-radius: 20px;">
        <div class="d-flex align-items-center">
            <div class="px-4 ml-auto">سفارش ‌های اخیر</div>
            <div class="px-4">
                <router-link class="text-success" :to="'/panel/'+ $route.params.store_slug +'/admin/orders'">مشاهده کل</router-link>
            </div>
        </div>
        <hr>
        <div v-if="status == 'ok' && orders.length > 0">
            <div v-for="(order , index) in orders" :key="index" v-if="index <= 5">
                <div class="px-3 my-4 d-flex align-items-center">
                    <div class="ml-auto d-flex align-items-center">
                        <div>
                            <div class="pr-3" dir="ltr">{{ order.created_at }}</div>
                            <div class="pr-3 mt-2">{{order.tracking_number }}</div>
                        </div>
                    </div>
                    <div>
                        <div class="pl-3"><b>{{ order.payment_price }} ریال</b></div>
                        <div class="pl-3 mt-2 text-left"><small>
                            <b>
                                {{
                                    OrderStatus.getStatus(order.status).text
                                }}
                            </b>
                        </small></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "~/services/api";
import OrderStatus from "~/constants/OrderStatus";
export default {
    name: "recent-orders",
    data() {
        return {
            OrderStatus,
            orders: null,
            status: 'loading'
        }
    },
    created() {
        api.get('order?store_id=' + this.$route.params.store_slug).then(res => {
            this.orders = res.data.data.data;
            this.status = 'ok';
        })
    },
    methods : {
    }
}
</script>

<style scoped>

</style>
