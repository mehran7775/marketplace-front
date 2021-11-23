<template>
    <div class="col">
        <div class="row justify-content-between p-4">
            <div>
                <span class="h4 font-weight-bold">فروشگاه های من</span>
            </div>
            <nuxt-link to="/seller/stores/create">
                <Xbutton variant="success" class="px-4" text="فروشگاه جدید"></Xbutton>
            </nuxt-link>
        </div>
        <div class="row">
            <template v-if="stores">
                <div v-for="store in stores" :key="store.id" class="col-12 col-md-4 my-2">
                    <div class="h-100 bg-white shadow-sm border p-3 m-2"
                         style="border-color: rgb(187, 187, 187) !important; border-radius: 10px;">
                        <div class="d-flex align-items-center">
                            <div class="rounded-circle border border-secondary p-2 bg-light"
                                 style="width: 40px; height: 40px;"><img
                                :src="'https://coreshop.paystar.ir/storage/' + store.logo"
                                alt="logo" class="mw-100 mh-100"></div>
                            <div class="mx-auto">
                                <div class="text-dark bg-white text-center">{{ store.fa_name }}</div>
                                <div class="text-center"><span
                                    :class="'text-' + StoreStatus.getStatus(store.status).variant">
                                    {{ StoreStatus.getStatus(store.status).text }}
                                </span></div>
                            </div>
                        </div>
                        <div class="mt-4 d-flex align-items-center">
                            <a target="_blank" :href="'/@' + store.slug"
                               class="btn btn-block m-2"
                               style="border-radius: 10px; color: rgb(0, 193, 164); background-color: rgb(214, 245, 240);">

                                مشاهده فروشگاه
                            </a>

                            <nuxt-link :to="'/' + store.id + '/admin/products'" class="btn btn-block m-2"
                                       style="border-radius: 10px; color: gray; border: 1px solid darkgray;">
                                مدیریت فروشگاه
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import StoreStatus from "@/constants/StoreStatus";
import api from "~/services/api";

export default {
    layout: "main-content",
    data() {
        return {
            StoreStatus,
            stores: null
        }
    },
    created() {
        api.get('user/current').then(response => {
            api.get('store')
                .then(res => {
                    this.stores = res.data.data.data
                })
        }).catch(({response}) => {
            // this.$router.push('/landing');
        })
    },
};
</script>

<style lang="scss" scoped>
</style>
