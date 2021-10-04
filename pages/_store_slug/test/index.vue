<template>
  <div>
    <div class="w-100">
      tt
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
