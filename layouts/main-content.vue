<template>
    <div>
        <app-header></app-header>
        <mobile-header></mobile-header>

        <sidebar></sidebar>
        <mobile-aside></mobile-aside>
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
export default {
    components: {
        MobileAside,
        MobileHeader,
        sidebar,
        appHeader,
    },

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
