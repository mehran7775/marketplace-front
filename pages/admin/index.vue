<template>
  <div>index body</div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData(context) {
    try {
       await context.$axios.get("/user/current",{
             headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
       });
    } catch (e) {
      console.log("eee");
      context.error({
        statusCode: 401,
        message: "rtfhb",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
