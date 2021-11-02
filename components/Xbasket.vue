<template>
  <div id="basket" class="d-flex flex-column align-items-center">
    <div id="counter">
      <span v-text="count"></span>
    </div>
    <fa icon="shopping-basket" :title="lang.svg.basket"></fa>
  </div>
</template>
<script>
import { tr } from "@/services/lang";

export default {
  data() {
    return {
      count: null
    };
  },
  computed: {
    lang() {
      return tr();
    },
  },
  created() {
    if (process.browser) {
      this.setCount()
    }
    this.$nuxt.$on("refresh_basket", () => {
      this.setCount()
    })
  },
  methods:{
    setCount(){
      if (localStorage.getItem("cartItems")) {
        this.count = JSON.parse(localStorage.getItem("cartItems")).length
      }else{
        this.count = 0
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#basket {
  margin-bottom: 18px;
  #counter {
    width: max-content;
    width: 15px;
    height: 15px;
    padding: 2px 4px 0 4px;
    background-color: $success;
    position: relative;
    right: -6px;
    top: 12px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 0.8rem;
      color: $white;
    }
  }
  svg {
    font-size: 1.5rem;
    color: $svg_color;
    transition: color 0.2s;
  }
  svg:hover {
    color: black;
    cursor: pointer;
  }
}
</style>
