<template>
  <div id="body">
    <div id="lables">
      <div class="lables">
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from "@/services/lang";

export default {
  layout: "default",
  head() {
    return {
      title: "صفحه اصلی",
    };
  },
  computed: {
    lang() {
      return tr();
    },
  },
};
</script>

<style scoped>
</style>
