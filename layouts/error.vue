<template>
  <div class="container-fluid">
    <div class="row">
      <div class="hv-center rounded-0">
        <h1 v-if="error.statusCode === 404">
          <ErrorsNotFound :pageNotFound="pageNotFound"></ErrorsNotFound>
        </h1>
        <h1 v-else-if="error.statusCode === 400">
          {{ badError }}
        </h1>
        <h1 v-else-if="error.statusCode === 403">
          {{ forbiddenError }}
        </h1>
        <h1 v-else-if="error.statusCode === 401">
          {{ unauthorizedError }}
        </h1>
        <h1 v-else-if="error.statusCode === 500" v-text="error.message">
        </h1>
        <h1 v-else>
          {{ otherErrors }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "این صفحه پیدا نشد",
      badError: "درخواست صحیح نیست یامنقضی شده است",
      forbiddenError: "شما دسرسی لازم را ندارید",
      unauthorizedError: "خطا در احراز هویت",
      otherErrors: "خطایی اتفاق افتاده است",
    } 
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
