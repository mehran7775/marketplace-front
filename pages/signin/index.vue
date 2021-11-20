<template>
  <div class="sign-in">
    <ValidationObserver ref="validationObserver">
      <Xform>
        <template #content>
          <div class="form-group">
            <label>نام کاربری</label>
            <ValidationProvider rules="required|min:3" v-slot="{ errors }">
              <input
                v-model="outh_param"
                ref="auth_path"
                type="text"
                id="نام کاربری"
                maxlength="35"
                placeholder="شماره تلفن یا ایمیل"
                :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
              />
              <div v-if="errors[0]" class="py-2 pr-2">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>کلمه عبور</label>
            <ValidationProvider
              rules="required|min:6|max:20"
              v-slot="{ errors }"
            >
              <input
                v-model="password"
                ref="password"
                type="text"
                placeholder="مثال: 1234565"
                id="کلمه عبور"
                maxlength="25"
                class="form-control"
              />
              <div v-if="errors[0]" class="py-2 pr-2">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <Xbutton :on_click="do_login" class="w-100 mt-3" text="ورود"></Xbutton>
          <div v-if="errors.length > 0" class="text-center pt-3">
            <p
              v-for="error in errors"
              :key="error"
              v-text="error"
              class="text-danger"
            ></p>
          </div>
          <div class="text-center mt-3">
            <span>هنوز ثبت نام نکرده اید؟</span>
            <router-link to="/signup">کلیک کنید</router-link>
          </div>
        </template>
      </Xform>  
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { authService } from "@/services/apiServices";
export default {
  middleware: "guest",
  layout: "sign",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      outh_param: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    do_login() {
      this.errors = [];
      this.$refs.validationObserver.validate().then((res) => {
        if (res) {
          authService.loginCustomer({
              outh_param: this.outh_param,
              password: this.password,
              login_with_verification_code: false,
            })
            .then((res) => {
              if (res.status === 200) {
                this.$cookies.set("token-buyer", res.data.data.api.token);
                authService.currentUser(res.data.data.api.token)
                  .then((res) => {
                    this.$store.commit(
                      "user/set_current_user", res.data.data,{ root: true }
                    );
                    this.$router.replace("/admin-buyer");
                    this.$store.commit(
                      "open_toast",{
                        msg: res.data.message,
                        variant: "success",
                      },{ root: true }
                    );
                  })
                  .catch(e =>{
                    console.log(e)
                  })
              }
            })
            .catch(e => {
              if (e.response.status === 401){
                this.$store.commit("open_toast",{
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
                })
              }
            })
        } else {
          return;
        }
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.sign-in {
  border-radius: 10px;
  box-shadow: 1px 1px 12px 0 $secondary;
  padding: 30px;
  max-width: 350px;
  min-width: 330px;
  a {
    color: $success;
  }
}
</style>
