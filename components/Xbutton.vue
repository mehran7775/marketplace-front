<template>
  <button
    :type="is_submit ? 'submit' : 'button'"
    :class="`btn btn-${variant}`"
    @click="on_click"
    :disabled="disabled"
  >
    <div class="row mx-auto align-items-center">
      <div v-if="text != ''"  class="px-2 text-center m-auto">
          <span v-text="text"></span>
      </div>
      <div v-if="icon != ''" class="px-1 text-center m-auto">
        <fa :icon="icon"></fa>
      </div>
      <slot name="spinner"></slot>
    </div>
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
    disabled:{
      type:Boolean,
      default: false
    },
  },
};
</script>

<style scoped lang="scss">
button {
    border-radius: 3rem;
  svg {
    color: $svg_color;
  }
}
</style>
