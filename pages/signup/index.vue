<template>
  <div class="sign_up">
    <Xform :sub_form="do_register">
      <template #content>
        <div class="form-group">
          <label>نام</label>
          <input
            v-model="form.first_name"
            ref="first_name"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>نام خانوادگی</label>
          <input
            v-model="form.last_name"
            ref="last_name"
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
        <div class="form-group">
          <label>آدرس</label>
          <input
            v-model="form.address"
            ref="city"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>کلمه عبور</label>
          <input
            v-model="form.password"
            ref="city"
            type="password"
            class="form-control"
          />
        </div>
        <!-- <div class="form-group">
          <label>تکرار کلمه عبور</label>
          <input
            v-model="re_password"
            ref="city"
            type="text"
            class="form-control"
          />
        </div> -->

        <Xbutton is_submit class="btn-sign m-auto" text="ثبت نام"></Xbutton>
        <div class="form-group"></div>
      </template>
    </Xform>
    <div v-if="errors" class="bg-danger text-white" v-html="errors"></div>
  </div>
</template>

<script>
import api from "~/services/api";

export default {
  layout: "sign",
  middleware: "checkAuth",
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
      errors: null,
    };
  },
  methods: {
    validate() {
      if (this.form.phone == "") {
        return "تلفن همراه الزامی است";
      }
      if (this.form.email == "") {
        return "ایمیل الزامی است";
      }
      if (this.form.password == "") {
        return "کلمه عبور الزامی است";
      }
      /*if (this.form.province == ""){
              return  "استان الزامی است"
          }*/
      /*if (this.form.city == ""){
              return  "شهر الزامی است"
          }*/
      /*if (this.form.address == ""){
              return  "آدرس الزامی است"
          }*/
      return true;
    },
    async do_register() {
      if (this.validate() !== true) {
        alert(this.validate());
      } else {
        console.log(this.form)
        const data={
          "first_name": this.form.first_name,
          "last_name": this.form.last_name,
          "email": this.form.email,
          "phone": this.form.phone,
          "province":this.form.province,
          "city":this.form.city,
          "password":this.form.password,
          "address":this.form.address,
        }
        // console.log(data)
        console.log(JSON.parse(JSON.stringify(data)))
        this.$nuxt.context.$axios.post("customer/register", data)
          .then((res) => {
            this.$router.push('/verify_login')
            if (res.status === 200) {
              this.$store.commit(
                "open_toast",
                {
                  msg: res.data.message,
                  variant: "success",
                },
                { root: true }
              );
            }
          })
          .catch((e) => {
            console.log(e.response);
            if (e.response.data.status === "error") {
              this.$store.commit(
                "open_toast",
                {
                  msg: e.response.data.message,
                  variant: "error",
                },
                { root: true }
              );
              this.errors = e.response.data.data;
            } else {
              this.$store.commit(
                "open_toast",
                {
                  msg: e.response.data.message,
                  variant: "error",
                },
                { root: true }
              );
            }
          });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
