<template>
    <div>
        <div class="w-100">
            <page-title title_text="پیشخوان" icon="dashboard">
            </page-title>
            <div class="row mt-4">
                <div class="col-12 col-md my-2">
                    <dashboard-box
                        title="سفارشات تکمیل شده"
                        :number="statistics.complete_orders"
                        color="#00bea5"
                        :has_rail="false"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#fff"
                        >
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                            />
                        </svg>
                    </dashboard-box>
                </div>
                <div class="col-12 col-md my-2">
                    <dashboard-box
                        title="سفارشات درحال پردازش"
                        :number="statistics.processing_orders"
                        color="#FF8D8D"
                        :has_rail="false"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#fff"
                        >
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                            />
                        </svg>
                    </dashboard-box>
                </div>
                <div class="col-12 col-md my-2">
                    <dashboard-box
                        title="تعداد کل سفارشات"
                        :number="statistics.orders_count"
                        color="#00bea5"
                        :has_rail="false"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#fff"
                        >
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                            />
                        </svg>
                    </dashboard-box>
                </div>
                <div class="col-12 col-md my-2">
                    <dashboard-box
                        title="فروش کل"
                        :number="statistics.total_sell_price"
                        color="#FF8D8D"
                        :has_rail="true"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#fff"
                        >
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                            />
                        </svg>
                    </dashboard-box>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-5 col-sm my-2">
                    <recent-orders></recent-orders>
                </div>
                <div class="col-md-7 col-sm my-2">
                    <Chart :status="'success'"></Chart>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import PageTitle from "~/components/main/pageTitle";
import DashboardBox from "~/components/dashboard-box";
import api from "~/services/api";
import RecentOrders from "~/components/recent-orders";
import Chart from '@/components/chart_empty'
export default {
    props:{
        store_slug:{
            type: Number | String,
            required: true
        }
    },
    name: "index",
    components: {RecentOrders, DashboardBox, PageTitle ,Chart},
   
    data() {
        return {
            statistics: {}
        }
    },
    methods: {
        getData() {
            api.get('store/statistics/' + this.store_slug)
            .then(res => {
                this.statistics = res.data.data
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>

</style>
