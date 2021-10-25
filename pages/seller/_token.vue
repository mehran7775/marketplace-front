<template>
  <div>
    {{ $route.params.token }}
  </div>
</template>

<script>
export default {
  async mounted() {
    try {
      const {data} = await this.$axios.get("/user/current", {
        headers: {
          'Authorization': "Bearer " + this.$route.params.token,
        },
      });
      if(data.status==="ok"){
          this.$cookies.set("token", this.$route.params.token);
          this.$router.push('/seller/stores')
      }
    } catch (e) {
        console.log(e)
    }
  },
};
</script>

<style scoped>
</style>
