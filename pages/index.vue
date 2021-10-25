<template>
    <div>صفحه اول</div>
</template>

<script>
export default {
    async created() {
        try {
            const {data} = await this.$axios.get("/user/current", {
                headers: {
                    'Authorization': "Bearer " + this.$cookies.get('token')
                },
            });
            if (data.status === "ok") {
                this.$router.push('/seller/stores')
            }
        } catch (e) {
            console.log(e)
        }
    },
};
</script>
