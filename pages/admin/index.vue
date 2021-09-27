<template>
  <div>index body</div>
</template>

<script>
import axios from "axios";
export default {
  layout: "admin",
  async asyncData ({ $axios, error }) {
    try {
      $axios
        .$get("/user/current5")
        .then((res) => {
          console.log("re", res);
        });
    } catch (e) {
      error({
        statusCode: 500,
        message: "rtfhb",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
