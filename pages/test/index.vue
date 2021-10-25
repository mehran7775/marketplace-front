<template>
    <div v-show="wizard.show" class="bg-white my-3" style="border-radius: 20px; box-shadow: 0 0 5px #8ce3d6;">
        <div v-if="wizard.current_step > 0" class="d-flex align-items-center justify-content-around mb-3 p-4">
            <div @click="goto_step(1)" :style="wizard.current_step > 0 ? 'cursor: pointer !important;' : ''">
                <div>
                    <img src="./assets/wallet.svg" width="64" height="64" :class="wizard.current_step > 0 ? 'filter_green' : 'filter_gray'">
                </div>
                <div class="text-center mt-2">
                    <span :style="wizard.current_step > 0 ? 'color: #00bea5' :'color: #d2d2d2'">نوع درگاه</span>
                </div>
            </div>
            <div>
                <img src="./assets/left-arrow.svg" width="16" height="16" :class="wizard.current_step > 1 ? 'filter_green' : 'filter_gray'">
            </div>
            <div @click="goto_step(2)" :style="wizard.current_step > 1 ? 'cursor: pointer !important;' : ''">
                <div>
                    <img src="./assets/shop.svg" width="64" height="64" :class="wizard.current_step > 1 ? 'filter_green' : 'filter_gray'">
                </div>
                <div class="text-center mt-2">
                    <span :style="wizard.current_step > 1 ? 'color: #00bea5' :'color: #d2d2d2'">اطلاعات فروشگاه</span>
                </div>
            </div>
            <div>
                <img src="./assets/left-arrow.svg" width="16" height="16" :class="wizard.current_step > 2 ? 'filter_green' : 'filter_gray'">
            </div>
            <div @click="goto_step(3)" :style="wizard.current_step > 2 ? 'cursor: pointer !important;' : ''">
                <div>
                    <img src="./assets/website.svg" width="64" height="64" :class="wizard.current_step > 2 ? 'filter_green' : 'filter_gray'">
                </div>
                <div class="text-center mt-2">
                    <span  :style="wizard.current_step > 2 ? 'color: #00bea5' :'color: #d2d2d2'">اطلاعات درگاه</span>
                </div>
            </div>
        </div>

        <hr class="custom_hr" v-if="wizard.current_step > 0">
    </div>
</template>

<script>
export default {
    layout : "main-content",
    data(){
        return {
            wizard : {
                show : true,
                current_step : 1,
                navigable : true,
            }
        }
    },
    methods : {
        goto_step(selected_step) {
            if (this.wizard.navigable && (this.wizard.current_step > selected_step)) {
                this.wizard.current_step = selected_step;
            }
        },
    }
}
</script>



