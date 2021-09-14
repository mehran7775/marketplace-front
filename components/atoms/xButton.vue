<template>
  <button
    :type="is_submit ? 'submit' : 'button'"
    :class="`mx-1 btn btn-${variant}`"
    @click="on_click"
  >
    <x-flex>
      <div v-if="text != ''" v-text="text" class="px-1"></div>
      <div v-if="icon != ''" class="px-1">
        <fa :icon="icon"></fa>
      </div>
    </x-flex>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "success",
    },
    is_submit: {
      type: Boolean,
      default: false,
    },
    on_click: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
