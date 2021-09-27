<template>
  <div id="product" class="container pt-2 pb-5">
    <div class="row" v-if="true">
      <div class="col-12 mx-auto my-5 p-5 bg-white">
        <div class="product w-100" dir="ltr">
          <client-only>
            <carousel :per-page="per_page" v-bind="options">
              <slide v-for="i in 3" :key="i" class="img-wrapper">
                <img src="/images/apple-iphone-12-r1.jpg" />
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
      <div class="col-12">
        <div class="row flex-sm-column text-right px-5" id="detail_product">
          <div class="column">
            <h1 v-text="'کفش مردانه'" class="display-5"></h1>
            <p class="pt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              molestiae ut quaerat praesentium. Commodi ad veritatis in minus
              repudiandae qui hic. Inventore aliquam odit rem dolores eveniet
              nisi porro? Aliquam.
            </p>
          </div>
          <div class="buy_cost w-100 text-center mt-2">
            <span id="price">
              <span>قیمت:</span>
              <span class="mx-1" v-text="7000"></span>
              <span>تومان</span>
            </span>
             <Xbutton
              class="px-3"
              :text="lang.btn.buy"
              :on_click="add_item"
            ></Xbutton>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-6 m-auto text-center p-5">
        <span>محصول پیدا نشد</span>
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
      title: "صفحه تک محصول",
      meta:[
        {
          hid:'description',
          name:'description',
          content:'محصول x این ویژگی ها را دارد'
        }
      ]
    };
  },
  //   async asyncData({ error, route,$axios }) {
  //     try {
  //       const res =return await $axios.$get(`/products/${route.params.id}`);
  //       if ((res.status === 200) & res.data) {
  //         return {
  //           product: res.data,
  //         };
  //       } else {
  //         return {
  //           product: null,
  //         };
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
  computed: {
    lang() {
      return tr();
    },
  },
  data() {
    return {
      product: null,
      options: {
        loop: false,
        paginationEnabled: true,
      },
      per_page: 1,
    };
  },
  mounted(){

  },
  methods: {
    add_item() {
      this.$store.dispatch("products/addProductToCart",{id:1,name:'پیراهن',price:200000,img:''});
    },
  },
};
</script>

<style lang="scss" scoped>
#product {
  .product {
    .img-wrapper {
      height: max-content;
      text-align: center;

      img {
        max-width: 280px;
        max-height: 250px;
      }
    }
  }
  #detail_product {
    #price {
      color: $success;
      font-weight: bold;
      margin: auto 4rem;
    }
  }
}
</style>
