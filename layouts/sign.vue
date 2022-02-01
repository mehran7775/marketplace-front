<template>
  <div>
    <div class="hv-center">
      <transition name="fade">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
       titleTemplate: "فروشگاه ساز پی استار -%s",
    }
  },
}

</script>


<style lang="scss" scoped>

</style>