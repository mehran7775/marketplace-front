<template>
  <div id="body" class="w-100">
    {{ $route.params.user_id }}
    <div id="lables">
      <div class="lables mb-4">
        <MoleculesXlables v-if="products" :products="products">
        </MoleculesXlables>
        <p v-else>محصولی وجود ندارد</p>
      </div>
    </div>
  </div>
</template>

<script>
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
  data(){
    return{
      products:[

        {
          "id": "zpg3ergr",
          "title": "محصول",
          "thumbnail": "https://coreshop.paystar.ir/storage/images/Se70rRop9RiMLI8Jld3yzoA380IoOSCx7q3Gm4wY.png",
          "description": null,
          "price": "10,000",
          "quantity": 20
        },
        {
          "id": "vr9retkj",
          "title": "vbvvb",
          "thumbnail": "https://coreshop.paystar.ir/storage/images/zXGPi0Z02UwyELxHxHhcYWpeGsuDZaKIkE2xZf5n.png",
          "description": null,
          "price": "20,000",
          "quantity": 20
        },
        {
          "id": "vgr9rgj",
          "title": "vbvvb",
          "thumbnail": "https://coreshop.paystar.ir/storage/images/zXGPi0Z02UwyELxHxHhcYWpeGsuDZaKIkE2xZf5n.png",
          "description": null,
          "price": "20,000",
          "quantity": 20
        },
        {
          "id": "vr9kgthajj",
          "title": "vbvvb",
          "thumbnail": "https://coreshop.paystar.ir/storage/images/zXGPi0Z02UwyELxHxHhcYWpeGsuDZaKIkE2xZf5n.png",
          "description": null,
          "price": "20,000",
          "quantity": 20
        },
        {
          "id": "vr39rgj",
          "title": "vbvvb",
          "thumbnail": "https://coreshop.paystar.ir/storage/images/zXGPi0Z02UwyELxHxHhcYWpeGsuDZaKIkE2xZf5n.png",
          "description": null,
          "price": "20,000",
          "quantity": 20
        },
        {
          "id": "vr90kthjj",
          "title": "vbvvb",
          "thumbnail": "https://coreshop.paystar.ir/storage/images/zXGPi0Z02UwyELxHxHhcYWpeGsuDZaKIkE2xZf5n.png",
          "description": null,
          "price": "20,000",
          "quantity": 20
        },
      ]
    }

  }
  // async asyncData({ $axios, route, error }) {
  //   try {
  //     const { data } = await $axios.get(
  //       `/store/${route.params.store_slug}/products`
  //     );
  //     return {
  //       products: data.data.data
  //     };
  //   } catch (e) {
  //     if (e.response) {
  //       error({
  //         statusCode: e.response.status,
  //         message: e.response.message,
  //       });
  //     } else {
  //       error({
  //         statusCode: "",
  //         message: "خطا در ارتباط",
  //       });
  //     }
  //   }
  // },
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
