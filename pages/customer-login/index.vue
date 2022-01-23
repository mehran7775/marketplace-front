<template>
  <div class="sign-in">
    <div class="text-center mb-3">
      <img width="130" src="@/assets/images/logo.svg" alt="لوگوی پی استار">
    </div>
    <ValidationObserver ref="validationObserver">
      <Xform>
        <template #content>
          <div>
            <ValidationProvider vid="outh_param" :name="lang.label.phone" rules="required|regPhone"   v-slot="{ valid, errors }">
            <b-form-group
            :label="lang.label.phone"
            class="font-weight-bold"
            >
                <b-form-input
                  v-model="outh_param"
                  ref="auth_path"
                  type="text"
                  maxlength="11"
                  placeholder="شماره موبایل خود را وارد کنید"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
              <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider 
              vid="password" :name="lang.label.password"
              rules="required|min:6|max:20"
                v-slot="{ valid, errors }"
            >
              <b-form-group
                :label="lang.label.password"
                class="font-weight-bold"
              >
                
                  <b-form-input
                    v-model="password"
                    ref="password"
                    type="text"
                    maxlength="25"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                  <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
          </ValidationProvider>
          <nuxt-link to="/customer-login/otp" class="text-info">ورود با رمز یکبار مصرف</nuxt-link>
          <Xbutton :disable="btnDisable" :on_click="do_login" class="w-100 mt-3" :text="lang.svg.signIn">
            <template #spinner>
              <b-spinner v-show="laodingLogin" small  class="float-left"></b-spinner>
            </template>
          </Xbutton>
          <div class="text-center mt-3">
            <span>هنوز ثبت نام نکرده اید؟</span>
            <router-link to="/customer-register">کلیک کنید</router-link>
          </div>
          </div>
        </template>
      </Xform>  
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { authService } from "@/services/apiServices";
import { tr } from "@/services/lang";

export default {
  middleware: "guest",
  layout: "sign",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  head(){
    return{
      title: 'صفحه ورود مشتری'
    }
  },
  data() {
    return {
      outh_param: "",
      password: "",
      laodingLogin:false,
      btnDisable:false,
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
              if (res.status === 200) {
                this.$cookies.set("token-buyer", res.data.data.api.token);
                authService.currentUser(res.data.data.api.token)
                  .then((res) => {
                     if(res.status == 200){
                      localStorage.setItem('userDetail',JSON.stringify(res.data.data))
                     }
                    this.$store.commit(
                      "user/setToState", {
                        name: 'current_user',
                        data: res.data.data
                      },{ root: true }
                    );
                    this.$router.replace("/customers");
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
                this.$refs.validationObserver.setErrors(e.response.data.data);
              }
            }).finally(() =>{
              this.btnDisable= false
              this.laodingLogin= false
            })
        } else {
          return;
        }
      });
    },
  },
  computed:{
    lang(){
      return tr()
    }
  }
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
