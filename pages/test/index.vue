<template>
  <div>
    <x-button :text="lang.btn.submit" icon="check"></x-button>
    <x-button variant="danger" :text="lang.btn.delete" icon="times"></x-button>
    <x-button
      variant="warning"
      :text="lang.label.warning"
      icon="exclamation-triangle"
    ></x-button>
    <x-button variant="info" :text="lang.label.info" icon="info"></x-button>
    <x-button
      variant="primary"
      :text="lang.btn.home_page"
      icon="home"
    ></x-button>
    <x-button variant="secondary" :text="lang.label.no_icon"></x-button>
    <br />
    <div class="w-100">
      <x-brand></x-brand>
      <br>
      <x-search></x-search>
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
};
</script>
