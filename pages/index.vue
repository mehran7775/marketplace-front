<template>
  <div id="body" class="w-100">
    <div id="lables">
      <div class="lables mb-4">
        <x-lables> </x-lables>
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from "@/services/lang";
import xLables from "@/components/molecules/xLables";
export default {
  layout: "index",
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
  components: {
    xLables,
  },
  mounted() {
    this.$store.dispatch("users/test");
  },
//   async asyncData({ error }) {
//     try {
//       this.$store.dispatch("products/get_products");
//     } catch (e) {
//       if (e.response) {
//         error({
//           statusCode: e.response.status,
//         });
//       } else {
//         error({
//           statusCode: "",
//           message: "خطا در ارتباط",
//         });
//       }
//     }
//   },
};
</script>

<style scoped lang="scss">
#lables {
  padding: 0;
  @include mx_medium {
    padding: 0.2rem;
  }
}
</style>
