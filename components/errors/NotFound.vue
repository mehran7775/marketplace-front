<template>
    <div class="404 text-center">
        <h1 class="font-weight-bold display-2">
            4<span>0</span>4
        </h1>
        <div>
            <p v-text="pageNotFound"></p>
        </div>
        <div>
            <a class="cursor_pointer" id="back" @click.prevent="() => $router.go(-1)">بازگشت</a>
        </div>
    </div>
</template>

<script>
export default {
    props:['pageNotFound']
}
</script>

<style scoped lang="scss">
h1 > span, #back{
    color: $success;
}

</style>