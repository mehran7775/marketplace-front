<template>
  <div id="search">
    <input type="search" placeholder="جستوجو کنید ..." />
    <fa icon="search" :title="lang.svg.search" class="fa-lg ml-2 mr-4"></fa>
  </div>
</template>

<script>
import {tr} from '@/services/lang'
export default {
  computed: {
    lang() {
      return tr();
    },
  },
};
</script>

<style lang="scss" scoped>
#search {
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border: 2px solid rgb(190, 190, 190);
  border-radius: 10px;
  padding: 10px;
  input {
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: inherit;
    padding: 0 20px;
    width: 280px;
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
