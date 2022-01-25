<template>
  <div
    id="item"
    class="mx-auto pb-4"
    @mouseover="item_hover()"
    @mouseleave="is_hover = false"
  >
    <h5 class="d-none d-md-block font-weight-bold px-3 text-dark mb-4 mx-auto ">
      <p class="product-title" v-text="title"></p>
    </h5>
    <h6 class="d-md-none font-weight-bold px-3 text-dark mb-4 mx-auto ">
      <p class="product-title" v-text="title"></p>
    </h6>
    <nuxt-link
      :to="`/${$route.params.store_slug}/${id}`"
      class="d-flex align-items-center justify-content-center mt-2"
    >
      <img
        :src="image ? image : '/images/default-image.png'"
        alt="تصویر محصول"
      />
    </nuxt-link>
    <div id="box_hover">
      <div v-if="is_hover" class="d-flex justify-content-center">
        <Xbutton
          :on_click="
            () => {
              $router.push(`${$route.params.store_slug}/${id}`);
            }
          "
          variant="outline-success"
          :text="lang.btn.detail"
          class="text mx-1"
        ></Xbutton>
        <Xbutton
          variant="success"
          :text="lang.btn.add"
          :on_click="add_item"
          :disabled="quantity >= 1 || quantity == 'نامحدود' ? false : true"
          class="mx-1"
        ></Xbutton>

      </div>
      <div v-if="!is_hover" >
        <template v-if="quantity >= 1 || quantity == 'نامحدود' ">
         <div class="d-flex flex-column">
            <div v-show="discount_percent && discount_percent != 0" id="main-price">
                <span v-text="price"></span>
                <span class="discount-percent bg-success text-white text-center" v-text="`%${ discount_percent }`"></span>
            </div>
            <div class="price">
              <strong>
                <span v-text="sell_price"></span>
              </strong>
              <span v-text="lang.price"></span>
            </div>
         </div>
        </template>
        <template v-else>
          <span class="text-danger font-weight-bold">ناموجود</span>
        </template>
       
      </div>
    </div>
  </div>
</template>
<script>
import { tr } from "@/services/lang";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: String | Number,
      default: 0,
    },
    sell_price: {
      type: String | Number,
      default: 0,
    },
    discount_percent: {
      type: String | Number,
      default: 0,
    },
    id: {
      type: String,
      default: 0,
    },
    quantity: {
      type: Number | String,
      default: 0,
    },
    is_multiple:{
      type: Boolean,
      default:false
    }
  },
  computed: {
    lang() {
      return tr();
    },
  },
  data() {
    return {
      is_hover: false,
    };
  },
  methods: {
    item_hover() {
      if (window.innerWidth > 768) {
        this.is_hover = true;
      }
    },
    add_item() {
      let product = {
        id: this.id,
        name: this.title,
        price: this.sell_price,
        img: this.image,
        quantity: this.quantity,
        is_multiple : this.is_multiple,
        count: 1
      };
      this.$store.dispatch("cart/addProductToCart", product);
    },
  },
};
</script>

<style lang="scss" scoped>
#item {
  width: 260px;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: border linear 0.2s;
  background-color: $white;
  padding: 10px 0;

  h5,h6 {
    height: 35px;
    white-space: pre-wrap;
    text-overflow: clip;
    overflow: hidden;
  }
  .product-title{
    max-width: 180px;
    @include mx_medium{
      max-width: 130px;
    }
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @include medium {
    padding: 15px 30px 10px 30px;
    border-radius: 10px;
    border: 1px solid $border;
    &:hover,
    &:focus-within {
      border-color: $border_whitesmoke;
      cursor: grab;
    }
  }
  @include mx_medium {
    width: 100%;
  }

  a {
    display: block;
    color: inherit;
    padding-bottom: 10px;
    max-width: 240px;
    height: 9rem;
     @include mx_medium {
        max-height: 7.3rem;
      }
      @include mx_small{
         max-height: 4.6rem;
      }
    img {
      max-width: 100%;
      max-height: 100%;
      @include mx_medium {
        margin: 0.5rem 0.3rem;
      }
    }
  }
  a:hover {
    text-decoration: none;
  }
  #box_hover {
    div{
      height: 30px;
    }
    .price {
      color: $success;
    }
    #main-price{
      &>span:not(.discount-percent){
        text-decoration: line-through;
      }
      .discount-percent{
        display: inline-block;
        width: 40px;
        height: 20px;
        padding-top: 2px;
        border-radius: 10px;
      }
    }
  }
}
</style>
