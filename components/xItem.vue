<template>
  <div id="item" @mouseover="item_hover()" @mouseleave="is_hover = false">
    <h3>کفش مردانه</h3>
    <nuxt-link to="/f">
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
import xButton from "@/components/xButton.vue";
export default {
  components: {
    xButton,
  },
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
  methods:{
      item_hover(){
          if(window.innerWidth > 768){
              this.is_hover = true
          }
      }
  }
};
</script>

<style lang="scss" scoped>
#item {
  max-width: 260px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid $border_success;
  transition: border linear 0.2s;
  background-color: $white;
  padding: 10px 0;
  @include medium {
    padding: 15px 30px 10px 30px;
    border-radius: 10px;
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
    #price {
      color: $success;
    }
  }
}
#item:hover {
  border: 1px solid $success;
  cursor: grab;
}
</style>
