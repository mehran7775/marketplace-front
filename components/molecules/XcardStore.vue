<template>
  <div class="card_store">
    <div class="head">
      <div class="profile">
        <img src="/images/apple-iphone-12-r1.jpg" alt="عکس پروفایل" />
      </div>
      <div class="title mr-3 mt-1">
        <span class="font-weight-bold">عنوان فروشگاه</span>
        <br />  
        <div class="pt-2"><small 
          >Lorem ipsum dolor sit, amet consectetur elit. Saepe ab vero.</small
        ></div>
      </div>
    </div>
    <div class="detail_store my-4">
      <div class="pair">
        <div class="radius-r">
          <span>فروش</span>
          <spann>125</spann>
        </div>
        <div class="radius-l">
          <span>محصول</span>
          <span>1000</span>
        </div>
      </div>
      <div class="pair">
        <div class="radius-r2">
          <span>خرید</span>
          <span>235</span>
        </div>
        <div class="radius-l2">
          <span>تومان</span>
          <span>1250000</span>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <Xbutton class="px-4 py-1" text="ویرایش"></Xbutton>
      <Xbutton class="px-4 py-1" text="مشاهده"></Xbutton>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card_store {
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
//   background-color: chocolate;
  margin: auto;
  border-radius: 10px;
  padding: 15px;
  text-align: right;
  border:1px solid $border_whitesmoke;
  .head {
    display: flex;

    .profile {
      width: 140px;
      height: 80px;
      border: 1px solid $border_success;
      border-radius: 100%;
      padding: 1px;
      //   background-color: red;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
  }
  .detail_store {
    width: 100%;
    .pair {
        display: flex;
        flex-wrap: nowrap;

      div {
        width: 50%;
        border: 1px solid $border_success;
        padding: 5px 0;
        text-align: center;
      }
      .radius-r{
          border-top-right-radius: 10px;
      }
      .radius-l{
          border-top-left-radius: 10px;
      }
      .radius-r2{
          border-bottom-right-radius: 10px;
      }
      .radius-l2{
          border-bottom-left-radius: 10px;
      }
    }
  }
}
</style>