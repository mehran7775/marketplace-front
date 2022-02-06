<template>
    <div>
      <client-only>
       <div v-if="onClient">
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
      </client-only>
    </div>
</template>

<script>
import sidebar from "@/components/main/aside.vue";
import appHeader from "@/components/main/header";
import MobileAside from '@/components/main/mobile-aside'
import MobileHeader from '@/components/main/mobile-header'
import { userService,storeService } from "~/services/apiServices";
export default {
    data(){
       return{
           onClient:false,
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
         if(process.client){
            try{
                if(this.$cookies.get("token")){
                    const userCurrent = await userService.userCurrent(this.$cookies.get("token"));
                    localStorage.setItem('currentUser',JSON.stringify(userCurrent.data.data))
                    userCurrent.data.data.roles.forEach( async element => {
                        if(element.slug === 'store-manager'){
                            const res = await storeService.getMyWaiting(this.$cookies.get('token'))
                            this.inMyAnticipationShops = res.data.data.badge_count
                            const { data } = await storeService.getAllWaiting(this.$cookies.get('token'))
                            this.inAnticipationShops = data.data.badge_count
                        }
                    });
                    this.onClient= true
                }else{
                    this.$router.replace('/')
                }
            }catch(e){
                console.log(e)
            }

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
.vueSelect{
    border-radius: 15px!important;
}
.vueSelect .vs__selected-options{
    padding: 3px 0;
}

</style>
