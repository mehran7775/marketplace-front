<template>
    <div>
        <app-header></app-header>

        <sidebar></sidebar>

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

export default {
    components: {
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
