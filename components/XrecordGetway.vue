<template>
  <div class="col w-100" id="record_getway">
    <div class="row justify-content-around align-content-center pb-3">
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="title"
          ref="title"
          placeholder="عنوان فارسی"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="name"
          ref="name"
          placeholder="نام انگلیسی"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="description"
          ref="description"
          placeholder="توضیحات"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="privance"
          ref="privance"
          placeholder="استان"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="city"
          ref="city"
          placeholder="شهر"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="phone_number"
          ref="phone_number"
          placeholder="شماره همراه"
        />
      </div>
      <div class="col-4 my-2">
        <input
          type="text"
          class="form-control"
          id="logo"
          ref="logo"
          placeholder="لوگو"
        />

        <div class="m-auto pt-2 pr-2">
          <div class="w-100 text-right">
            <input type="checkbox" id="show_number" name="show_number" />
            <label for="show_number">نمایش شماره موبایل</label>
          </div>
          <div class="w-100 text-right">
            <input type="checkbox" id="show_email" name="show_email" checked />
            <label for="show_email">نمایش ایمیل</label>
          </div>
          <div class="w-100 text-right">
            <input type="checkbox" id="show_address" name="show_address" />
            <label for="show_address">نمایش آدرس</label>
          </div>
          <div class="w-100 text-right">
            <input type="checkbox" id="show_fullname" name="show_fullname" />
            <label for="show_fullname">نمایش نام و نام خانوادگی</label>
          </div>
        </div>
      </div>
      <div class="col-8 my-2">
        <textarea
          rows="6"
          class="form-control"
          id="lows"
          ref="logo"
          placeholder="قوانین و مقررات فروشگاه"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data_store: {
      type: [String, Array, Object],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
#record_getway{
   min-height: 280px;
}
</style>
