<template>
    <div class="row">
        <div class="col-12 p-5 mt-5">
            <router-link class="btn btn-success my-3" to="/admin/gateways/add">ساخت درگاه جدید</router-link>
        </div>
    </div>
</template>

<script>
import PortTypes from "~/constants/PortTypes";
import PortStatus from "~/constants/PortStatus";
export default {
    name: "index",
    layout: "main-content",
    data(){
        return {

        }
    },

}
</script>

<style scoped>

</style>
