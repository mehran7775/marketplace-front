<template>
  <div>
  </div>
</template>

<script>
import roles from "~/plugins/roles";
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
          roles();
          this.$router.push('/')
      }
    } catch (e) {
      this.$nuxt.error({
        statusCode: e.response.status
      })
    }
  },
};
</script>

<style scoped>
</style>
