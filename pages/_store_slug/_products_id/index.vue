<template>
 <div class="row">
    <div id="product" class="container body-hv-fit">
      <div class="row mt-0 mt-sm-3 mt-md-5">
        <div class="col">
          <div v-if="product" class="row mt-0 mt-sm-3 mt-md-5">
            <div class="col-12 mx-auto p-5 bg-white scaffold">
              <div class="d-flex justify-content-between">
                <h2 class="h4 mt-1 pt-1" >
                  <p v-text="product.title"></p>
                </h2>
                <div v-if="product.discount_percent && product.discount_percent != 0" id="discount" class="text-white bg-success text-center d-flex align-items-center justify-content-center mt-5">
                  <span title="درصد تخفیف"  v-text="`%${ product.discount_percent }`"></span>
                </div>
              </div>
              <div class="product w-100 mt-5">
                <client-only placeholder="loading">
                  <carousel
                    :rtl="true"
                    v-bind="options"
                    pagination-color="#dee2e6"
                    pagination-active-color="#00c1a4"
                    pagination-padding="2"
                  >
                  <template v-if="product.thumbnails.length > 0">
                    <slide
                      v-for="(thumbnail, index) in product.thumbnails"
                      :key="index"
                      class="img-wrapper text-center mb-4"
                    >
                      <img
                        :src="thumbnail"
                        :alt="`عکس محصول ${ product.title }`"
                        :title="`عکس محصول ${ product.title }`"
                      />
                    </slide>
                  </template>
                  <template v-else>
                    <img
                        src="@/assets/images/default-image.png"
                        :alt="`عکس محصول ${ product.title }`"
                        :title="`عکس محصول ${ product.title }`"
                      />
                  </template>
                    
                  </carousel>
                </client-only>
              </div>
            </div>
            <div class="col-12 py-5" id="detail-product">
              <div class="row">
                <div class="w-100 d-flex justify-content-between flex-wrap px-5 pt-4 align-items-center align-content-center">
                  <div class="d-flex flex-column align-items-center">
                    <span v-show="product.discount_percent && product.discount_percent != 0" class="font-weight-bold h5" v-text="`${product.price} ${ lang.price }`" id="price"></span>
                    <span class="font-weight-bold text-success h5" v-text="`${ product.sell_price } ${ lang.price }`"></span>
                  </div>
                  <div id="enums" class="mr-0 mr-md-5 pr-0 pr-md-5">
                    <div class="d-flex bg-white">
                      <span class="d-flex align-items-center justify-content-center rounded-circle text-white cursor_pointer"
                      @click="minusCount()"
                      >
                      <fa icon="minus" class="m-auto"></fa>
                      </span>
                      <strong class="mx-4 pt-2" v-text="count"></strong>
                      <span class="d-flex align-items-center justify-content-center rounded-circle text-white cursor_pointer"
                      @click="plusCount()"
                      >
                        <fa icon="plus" class="m-auto"></fa >
                      </span>
                    </div>
                  </div>
                  <div id="buy" class="mt-5 mt-md-0 text-center">
                    <Xbutton
                    class="w-100 px-5"
                    :text="lang.btn.buy"
                    :on_click="add_item"
                    :disabled="product.quantity >= 1 || product.quantity == 'نامحدود' ? false : true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="product.description" class="col-12 scaffold bg-white mb-4">
              <div class="row">
                <p class="text-justify p-4" v-html="product.description">
                </p>
              </div>
            </div>
          </div>
          <div v-else class="row">
            <div class="col-6 m-auto text-center p-5">
              <span class="font-weight-bold">محصول پیدا نشد</span>
            </div>
          </div>
        </div>
      </div>
  </div>
 </div>
</template>

<script>
import { tr } from "@/services/lang";
import { productService } from "@/services/apiServices"
import { mapGetters } from 'vuex'
import separatePrice from '@/mixins/separatePrice'
export default {
  layout: "index",
  mixins:[separatePrice],
  head() {
    return {
      title: `فروشگاه ${this.detail.fa_name} - ${this.product.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "محصول x این ویژگی ها را دارد",
        },
      ],
    };
  },
  async asyncData({ error, route}) {
    try {
      const res = await productService.getProduct(
        {
          store_slug: route.params.store_slug,
          products_id: route.params.products_id
        }
      )
      return {
        product: res.data.data,
      };
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: e.response.data.message,
      });
    }
  },
  computed: {
    lang() {
      return tr();
    },
    ...mapGetters([
      'detail',
    ])
  },
  data() {
    return {
      options: {
        loop: false,
        paginationEnabled: true,
        perPage: 1,
        centerMode: true
      },
      count: 1
     
    };
  },
  methods: {
    minusCount(){
      if(this.count > 1){
        this.count-- 
      }
    },
    plusCount(){
      if(this.product.is_multiple){
        if(this.count >= this.product.quantity){
            this.$store.commit(
              "open_toast",
              {
                msg: "تعداد محصول برابر با حداکثر موجودی است",
                variant: "warning",
              }
            )
            return
        }
        this.count++
      }else{
        this.$store.commit(
            "open_toast", {
              msg: "بیشتراز یک عدد ازاین محصول قابل خرید نیست",
              variant: "warning",
            }
          )
      }
    },
    add_item() {
      this.$store.dispatch("cart/addProductToCart", {
        id: this.product.id,
        name: this.product.title,
        price: this.product.sell_price,
        img: this.product.thumbnails[0],
        quantity: this.product.quantity,
        is_multiple: this.product.is_multiple,
        count: this.count
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#product {
  #detail-product{
    background-color: $silver;

    #buy{
      width: 150px;
      @include mx_medium{
        width: 100%;
      }
    }
  }
  .scaffold{
    @include medium{
      border-radius: 10px;
    }
  }
  #discount{
    width: 50px;
    height: 25px;
    border-radius: 20px;
  }
  .product {
    .img-wrapper {
      img {
        max-width: 50%;
        max-height: 250px;
      }
    }
  }
  #price{
    text-decoration: line-through;
  }
  #enums {
    &>div{
      border-radius: 20px;
      height: 28px;
    }
    span{
      background-color: #C5C5C5;
      padding: 5px 10px
    }
  }
}
</style>
