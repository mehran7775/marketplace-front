<template>
  <div id="item" @mouseover="item_hover()" @mouseleave="is_hover = false">
    <h3>کفش مردانه</h3>
    <nuxt-link :to="`products/${554}`">
      <img src="/images/apple-iphone-12-r1.jpg" alt="تصویر محصول" />
    </nuxt-link>
    <div id="box_hover">
      <div v-if="is_hover" class="d-flex">
        <Xbutton
          :on_click="detail_item"
          variant="outline-success"
          :text="lang.btn.detail"
          class="text"
        ></Xbutton>
        <Xbutton variant="success" :text="lang.btn.add"
         :on_click="add_item"
        ></Xbutton>
      </div>
      <div v-if="!is_hover" class="price">
        <strong>
          <span v-text="lang.price"></span>
        </strong>
      </div>
    </div>
  </div>
</template>
~/components/Xbutton.vue
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
      type: [Number, String],
      default: 0,
    },
    mt: {
      type: Boolean,
      default: false,
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
    detail_item() {
     this.$router.push(`products/${554}`)
    },
    add_item(){
        this.$store.dispatch("products/addProductToCart",{id:4,name:'کت',price:100000});
    }
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
    img {
      max-width: 160px;
      max-height: 120px;
      margin: 1.3rem 1rem;
      @include mx_medium {
        max-width: 80px;
        max-height: 70px;
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
#item:hover,#item:focus-within {
  border: 1px solid $border_success;
  cursor: grab;
}
</style>
