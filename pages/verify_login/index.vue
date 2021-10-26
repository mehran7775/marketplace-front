<template>
  <div class="verify-login">
      <div class="w-50 p-5 mx-auto mt-5">
          <div class="form-group">
          <label class="font-weight-bold">کد تایید را وارد کنید</label>
          <input type="text" name="code" class="form-control" ref="code">
          <button class="btn btn-success mt-2 mr-2" @click="verify_code()">ارسال</button>
      </div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    phone_number: (state) => state.users.phone_number
  }),
  methods:{
      verify_code(){
          
      }
  }
};
</script>

<style scoped>
</style>