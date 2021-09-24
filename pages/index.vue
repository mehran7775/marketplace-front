<template>
  <div id="body" class="w-100">
    <div id="lables">
      <div class="lables mb-4">
        <LazyMoleculesXlables v-if="true" :products="'products'"> </LazyMoleculesXlables>
        <p v-else>محصولی وجود ندارد</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
import { tr } from "@/services/lang";
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
//   async asyncData({ error }) {
//     try {
//       const { data } = await EventService.getProducts();
//       if (data.length > 0) {
//         return {
//           products: data,
//         };
//       }else{
//           return{
//               products:null
//           }
//       }
//     } catch (e) {
//       console.log(e);
//       if (e.response) {
//         error({
//           statusCode: e.response.status,
//           message: e.response.message,
//         });
//       } else {
//         error({
//           statusCode: "",
//           message: "خطا در ارتباط",
//         });
//       }
//     }
//   },
mounted(){
 
}
};
</script>

<style scoped lang="scss">
#lables {
  padding: 0;
  @include mx_medium {
    padding: 0.05rem;
  }
}
</style>
