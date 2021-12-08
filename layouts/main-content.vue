<template>
    <div>
        <app-header></app-header>
        <mobile-header></mobile-header>
        
        <sidebar :inAnticipationShops="inAnticipationShops" :inMyAnticipationShops="inMyAnticipationShops"></sidebar>
        <mobile-aside :inAnticipationShops="inAnticipationShops" :inMyAnticipationShops="inMyAnticipationShops"></mobile-aside>
        <div id="app_content">
            <div class="container" style="padding-top: 5rem">
                <Nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from "@/components/main/aside.vue";
import appHeader from "@/components/main/header";
import MobileAside from '@/components/main/mobile-aside'
import MobileHeader from '@/components/main/mobile-header'
import { storeService } from "~/services/apiServices";
export default {
    data(){
       return{
           inMyAnticipationShops:null,
           inAnticipationShops:null,
       } 
    },
    head() {
        return {
            title:"فروشگاه ساز پی استار",
        }
    },

    components: {
        MobileAside,
        MobileHeader,
        sidebar,
        appHeader,
    },

    async created(){
        try{
            const res = await storeService.getMyWaiting(this.$cookies.get('token'))
            this.inMyAnticipationShops = res.data.data.badge_count
            const { data } = await storeService.getAllWaiting(this.$cookies.get('token'))
            this.inAnticipationShops = data.data.badge_count
           
           
        }catch(e){
            console.log(e)
        }
    }

}
</script>

<style>
@media (max-width: 800px) {
    .bg-1 .bg-form.bg-white.shadow {
        padding-bottom: 50px;
        height: auto;
    }
}
</style>
