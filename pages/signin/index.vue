<template>
  <div class="sign_in">
    <Xform>
      <template #content>
        <div class="form-group">
          <label>نام کاربری</label>
          <input
            v-model="outh_param"
            ref="auth_path"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>رمز عبور</label>
          <input
            v-model="password"
            ref="password"
            type="text"
            class="form-control"
          />
        </div>

        <Xbutton
          :on_click="do_login"
          class="btn-sign m-auto"
          text="ورود"
        ></Xbutton>
        <div v-if="errors.length > 0" class="text-center pt-3">
          <p
            v-for="error in errors"
            :key="error"
            v-text="error"
            class="text-danger"
          ></p>
        </div>
      </template>
    </Xform>
  </div>
</template>

<script>
export default {
  middleware: "guest",
  layout: "sign",
  data() {
    return {
      outh_param: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    validate() {
      if (this.auth_path == "") {
        return "شماره تلفن یا نام کاربری الزامی است";
      }
      if (this.password == "") {
        return "کلمه عبور الزامی است";
      }
      return true;
    },
    async do_login() {
      this.errors = [];
      if (this.validate() !== true) {
        alert(this.validate());
      } else {
        try {
          const res = await this.$nuxt.context.$axios.post("customer/login", {
            outh_param: this.outh_param,
            password: this.password,
            login_with_verification_code: false,
          });
          if (res.status === 200) {
            this.$cookies.set("token-buyer", res.data.data.api.token);
            this.$router.replace("/");
            this.$store.commit(
              "open_toast",
              {
                msg: res.data.message,
                variant: "success",
              },
              { root: true }
            );
          }
        } catch (e) {
          if (e.response.status === 401) {
            this.$store.commit(
              "open_toast",
              {
                msg: e.response.data.message,
                variant: "error",
              },
              { root: true }
            );
          }
          if (e.response.status === 400) {
            console.log(Object.keys(e.response.data.data));
            Object.keys(e.response.data.data).forEach((element) => {
              this.errors.push(e.response.data.data[element][0]);
            });
          }
        }
      }
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
