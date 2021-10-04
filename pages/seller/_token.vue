<template>
  <div>
    {{ $route.params.token }}
  </div>
</template>

<script>
export default {
  async fetch() {
    try {
      const {data}=await this.$axios.get("/user/current",null, {
        headers: {
          'Authorization': "Bearer " + this.$route.params.token,
        },
      });
      if(data.status==="ok"){
          this.$cookies.set("token", this.$route.params.token);
      }
    } catch (e) {
        console.log(e)
    }
  },
};
</script>

<style scoped>
</style>