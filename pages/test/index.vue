<template>
  <div>
    <div class="w-100">
      <x-brand></x-brand>
      <br />
      <x-search></x-search>
      <x-basket></x-basket>
      <x-item></x-item>
    </div>
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
  methods: {
    myfun() {
      console.log("me");
    },
  },
};
</script>
