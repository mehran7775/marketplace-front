<template>
  <div class="sign-in">
    <template v-if="apiErrors">
          <b-alert
          v-for="error in apiErrors"
          :key="error"
            :show="dismissCountDown"
            dismissible
            fade
            variant="danger"
            @dismiss-count-down="countDownChanged"
            class="mt-2"
            >
            {{ error }}
            </b-alert>
    </template>
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
                :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
              />
              <div v-if="errors[0]" class="py-2 pr-2">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <Xbutton :disable="btnDisable" :on_click="do_login" class="w-100 mt-3" text="ورود">
            <template #spinner>
              <b-spinner v-show="laodingLogin" small  class="float-left"></b-spinner>
            </template>
          </Xbutton>
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
import bAlert from "@/mixins/b-alert"
export default {
  middleware: "guest",
  layout: "sign",
  mixins:[ bAlert ],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      outh_param: "",
      password: "",
      apiErrors: [],
      laodingLogin:false,
      btnDisable:false
    };
  },
  methods: {
    do_login() {
      this.$refs.validationObserver.validate().then((res) => {
        if (res) {
          this.btnDisable= true
          this.laodingLogin= true
          authService.loginCustomer({
              outh_param: this.outh_param,
              password: this.password,
              login_with_verification_code: false,
            })
            .then((res) => {
              this.btnDisable= false
              this.laodingLogin= false
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
              this.btnDisable= false
              this.laodingLogin= false
              if (e.response.status === 401){
                this.$store.commit("open_toast",{
                    msg: e.response.data.message,
                    variant: "error",
                  },
                  { root: true }
                );
              }
              if (e.response.status === 400) {
                this.showAlert()
                Object.keys(e.response.data.data).forEach((element) => {
                  this.apiErrors.push(e.response.data.data[element][0]);
                })
                setTimeout(() =>{
                  this.apiErrors=[]
                },5000)
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
