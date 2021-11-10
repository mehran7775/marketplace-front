<template>
  <div class="search">
    <input type="search" placeholder="جستجو محصول ..." />
    <fa icon="search" :title="lang.svg.search" class="fa-lg ml-2 mr-3"></fa>
  </div>
</template>

<script>
import { tr } from "@/services/lang";
export default {
  computed: {
    lang() {
      return tr();
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $silver;
  border-radius: 20px;
  padding: 8px 10px 8px;
  box-shadow: 0 0 3px 0 $silver;
  input {
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: unset;
    padding: 0 15px 0 0;
    min-width: 280px;
    @include mx_medium {
      min-width: 200px;
    }
  }
  svg {
    color: $svg_color;
    transition: color 0.2s;
  }
  svg:hover {
    color: black;
    cursor: pointer;
  }
}
</style>
