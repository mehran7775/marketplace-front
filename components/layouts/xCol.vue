<template>
    <div :class="`col-${mobile} col-md-${desktop} my-2`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        mobile: {
            type: String,
            default: '12',
        },
        desktop: {
            type: String,
            default: '4',
        },
    }
}
</script>
