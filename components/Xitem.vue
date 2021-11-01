<template>
  <div id="item" @mouseover="item_hover()" @mouseleave="is_hover = false">
    <h5 v-text="title" class="font-weight-bold">کفش مردانه</h5>
    <nuxt-link
      :to="`${$route.params.store_slug}/${id}`"
      class="d-flex align-items-center justify-content-center"
    >
      <img :src="image ? image : '/images/default-image.png'" alt="تصویر محصول" />
    </nuxt-link>
    <div id="box_hover">
      <div v-if="is_hover" class="d-flex">
        <Xbutton
          :on_click="
            () => {
              $router.push(`${$route.params.store_slug}/${id}`);
            }
          "
          variant="outline-success"
          :text="lang.btn.detail"
          class="text"
        ></Xbutton>
        <Xbutton
          variant="success"
          :text="lang.btn.add"
          :on_click="add_item"
          :disabled="quantity > 0 ? false : true"
        ></Xbutton>
      </div>
      <div v-if="!is_hover" class="price">
        <span class="font-weight-bold">قیمت:</span>
        <span v-text="price"></span>
        <strong>
          <span v-text="lang.price"></span>
        </strong>
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
      type: String,
      default: 0,
    },
    id: {
      type: String,
      default: 0,
    },
    mt: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: {
        type: Number,
        default: 0,
      },
    },
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
        price: this.price,
        img: this.image,
        quantity: this.quantity,
      }
      this.$store.dispatch("cart/addProductToCart",product);
    },
  },
};
</script>

<style lang="scss" scoped>
#item {
  max-width: 260px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid $border_half_success;
  transition: border linear 0.2s;
  background-color: $white;
  padding: 10px 0;
  @include medium {
    padding: 15px 30px 10px 30px;
    border-radius: 10px;
  }
  @include mx_medium {
    width: 100%;
  }

  a {
    display: block;
    color: inherit;
    padding: 10px;
    max-width: 240px;
    height: 120px;
    img {
      max-width: 100%;
      max-height: 100%;
      @include mx_medium {
        // max-width: 80px;
        // max-height: 70px;
        margin: 1rem 0.3rem;
      }
    }
  }
  a:hover {
    text-decoration: none;
  }
  #box_hover {
    height: 45px;
    margin: auto;
    .price {
      color: $success;
    }
  }
}
#item:hover,
#item:focus-within {
  border: 1px solid $border_success;
  cursor: grab;
}
</style>
