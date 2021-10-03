<template>
  <div>
    <div class="sign">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.sign {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); /* for IE 9 */
  -webkit-transform: translate(-50%, -50%); /* for Safari */
  border-radius: 10px;
  box-shadow: 1px 1px 12px 0 $secondary;
  text-align: right;
  padding: 30px;
  max-width: 320px;
  min-width: 300px;
}
</style>