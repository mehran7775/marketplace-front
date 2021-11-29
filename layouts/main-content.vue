<template>
    <div>
        <app-header></app-header>
        <mobile-header></mobile-header>
        
        <sidebar :InAnticipationShops="InAnticipationShops"></sidebar>
        <mobile-aside :InAnticipationShops="InAnticipationShops"></mobile-aside>
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
           InAnticipationShops:null
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

    created(){
        storeService.getAll( this.$cookies.get('token'),{
            'query[status]' : 0
        } )
        .then(res => {
           this.InAnticipationShops = res.data.data.data.length
        }).catch(e => {
            console.log(e)
        })

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
