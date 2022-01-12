<template>
    <div class="bg-white shadow-sm pt-2 pb-3 " style="border-radius: 20px;">
        <div class="d-flex align-items-center">
            <div class="px-4 d-flex align-items-center پml-auto">
                <div class="p-2 ml-auto">نمودار بازدید ماهیانه</div>
            </div>
        </div>
        <hr>
        <div id="chart" style="filter: blur(5px);">
        </div>
        <div class="locked-overlay" v-if="status == 'loading'">
            <div style="position: absolute; width: 100%; text-align: center; top: 30%;">
                <div class="btn btn-success mt-5">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="px-2">لطفا صبر کنید</div>
                        <div class="spinner-border spinner-border-sm text-white" role="status"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="locked-overlay" v-else-if="status == 'success'">
            <div style="position: absolute; width: 100%; text-align: center; top: 30%;">
                <div>
                    <div class="btn">
                        <img src="@/assets/new/image/not-found.png" width="200">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "chart",
    props: ['status'],
    mounted() {
    },
}
</script>

<style scoped>
#chart{
    max-width: 700px;
    height: 350px!important;
    margin: auto;
}
</style>
