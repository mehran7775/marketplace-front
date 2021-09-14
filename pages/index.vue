<template>
    <x-flex class="pt-5">
        <nuxt-link class="btn btn-primary" to="/test" v-text="lang.label.test"></nuxt-link>
    </x-flex>
</template>

<script>
import { tr } from '@/services/lang'

export default {
    computed: {
        lang() {
            return tr();
        },
    },
};
</script>
