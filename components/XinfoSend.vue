<template>
  <div class="col w-100" id="info_send">
    <div class="row pb-3">
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="region_send"
          ref="region_send"
          placeholder="منطقه ارسال"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="time_send_self"
          ref="time_send_self"
          placeholder="زمان ارسال شهر خود"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="time_send_others"
          ref="time_send_others"
          placeholder="زمان ارسال سایر شهرها"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="payment_method_self"
          ref="payment_method_self"
          placeholder="شیوه پرداخت شهر خود"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="cost_send_self"
          ref="cost_send_self"
          placeholder="هزینه ارسال شهر خود"
        />
      </div>
      <div class="col-4 col-md-4 my-2">
        <input
          type="text"
          class="form-control"
          id="cost_send_others"
          ref="cost_send_others"
          placeholder="هزینه ارسال سایر شهرها"
        />
      </div>
      <div class="col-4 my-2">
        <input
          type="text"
          class="form-control"
          id="payment_method_othrs"
          ref="payment_method_othrs"
          placeholder="شیوه پرداخت سایر شهرها"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

#info_send{
  min-height: 280px;
}
</style>
