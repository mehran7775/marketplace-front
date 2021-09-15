<template>
  <div id="basket" class="d-flex flex-column">
    <div id="counter">
      <span>2</span>
    </div>
    <fa icon="shopping-basket"></fa>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#basket {
    margin-bottom: 18px;
  #counter {
    width: max-content;
    width: 15px;
    height: 15px;
    padding:2px 4px 0 4px;
    // padding:4px;
    background-color: $success;
    position: relative;
    right: -5px;
    top: 12px;
    border-radius: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 0.8rem;
      color: $white;
    //   background-color: rebeccapurple;
    }
  }
  svg {
    font-size: 1.5rem;
  }
}
</style>
