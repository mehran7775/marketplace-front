<template>
    <div class="hv-center">
        rfg
    </div>
</template>

<script>
export default {
    async asyncData({ $axios, route}){
        try{
            const {data} = await $axios.get(`pay/receipt/${ route.params.trackingNumber }`)
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
}
</script>

<style scoped>

</style>

