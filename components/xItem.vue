<template>
  <div id="item" @mouseover="is_hover = true" @mouseleave="is_hover = false">
    <nuxt-link to="/f">
      <h6>
        <b>کفش مردانه</b>
      </h6>
      <img src="/images/apple-iphone-12-r1.jpg" alt="تصویر محصول" />
    </nuxt-link>
    <div id="box_hover">
      <div v-if="is_hover" class="d-flex">
        <x-button
          variant="outline-success"
          :text="lang.btn.detail"
          class="text"
        ></x-button>
        <x-button variant="success" :text="lang.btn.add"></x-button>
      </div>
      <div v-if="!is_hover" id="price">
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
      type: [Number, String],
      default: 0,
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
};
</script>

<style lang="scss" scoped>
#item {
  //   min-width: 250px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  padding: 15px 30px 10px 30px;
  border: 1px solid $border_success;
  transition: border linear 0.2s;
  a {
    display: block;
    color: inherit;
    img {
      max-width: 160px;
      max-height: 120px;
      margin: 1.3rem 1rem;
    }
  }
  a:hover {
    text-decoration: none;
  }
  #box_hover {
    height: 45px;
    #price {
      color: $success;
    }
  }
}
#item:hover {
  border: 1px solid $success;
}
</style>
