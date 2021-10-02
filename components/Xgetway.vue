<template>
  <div class="w-100 col" id="getway">
    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-lg-5 card_getway">
        <div><span class="">درگاه پرداخت یار پی استار</span></div>
        <div class="mt-5 d-flex justify-content-around">
          <Xbutton variant='primary' text="عنوان درگاه"></Xbutton>
          <Xbutton variant='info' text="نام درگاه"></Xbutton>
        </div>
      </div>
      <div class="col-10 col-md-8 col-lg-5 card_getway">
        <div><span class="">درگاه پرداخت یار پی استار</span></div>
        <div class="mt-5 d-flex justify-content-around">
          <Xbutton variant='primary' text="عنوان درگاه"></Xbutton>
          <Xbutton variant='info' text="نام درگاه"></Xbutton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#getway {
    min-height: 280px;
  .card_getway {
    border-radius: 10px;
    border: 1px solid $border_whitesmoke;
    margin: 1rem 2rem;
    text-align: center;
    padding: 10px;
    background-color: $back_dark;
  }
}
</style>
