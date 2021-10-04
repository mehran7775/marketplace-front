<template>
  <div class="sign_up">
    <Xform>
      <template #content>
        <div class="form-group">
          <label>نام</label>
          <input
            v-model="form.first_name"
            ref="fname"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>نام خانوادگی</label>
          <input
            v-model="form.last_name"
            ref="lname"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>شماره تلفن</label>
          <input
            v-model="form.phone"
            ref="phone"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>ایمیل</label>
          <input
            v-model="form.email"
            ref="email"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>استان</label>
          <input
            v-model="form.province"
            ref="province"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>شهر</label>
          <input
            v-model="form.city"
            ref="city"
            type="text"
            class="form-control"
          />
        </div>

        <Xbutton
          :on_click="do_register"
          class="btn-sign m-auto"
          text="ثبت نام"
        ></Xbutton>
        <div class="form-group"></div>
      </template>
    </Xform>
  </div>
</template>

<script>
export default {
  layout: "sign",
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        phone: "",
        password: "",
        email: "",
        province: "",
        city: "",
        address: "",
      },
    };
  },
  methods:{
      do_register(){
          
      }
  }
};
</script>


<style lang="scss" scoped>
</style>