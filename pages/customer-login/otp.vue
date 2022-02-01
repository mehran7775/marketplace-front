<template>
  <div class="sign-in">
     <div class="text-center mb-3">
      <img width="130" src="@/assets/images/logo.svg" alt="لوگوی پی استار">
    </div>
    <ValidationObserver ref="validationObserver">
      <Xform :sub_form="() => do_login()">
        <template #content>
          <div>
            <ValidationProvider vid="outh_param" :name="lang.label.phone" rules="required|regPhone" v-slot="{ valid, errors }">
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
        
            <router-link to="/customer-login" class="text-info">ورود با رمز ثابت</router-link>
          <Xbutton :disable="btnDisable" is_submit class="w-100 mt-3" :text="lang.svg.signIn">
            <template #spinner>
              <b-spinner v-show="laodingLogin" small  class="float-left"></b-spinner>
            </template>
          </Xbutton>
          <div class="text-center mt-3">
           
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
  data() {
    return {
      outh_param: "",
      laodingLogin:false,
      btnDisable:false,
    };
  },
  head(){
    return{
      title: 'ورود'
    }
  },
  methods: {
     do_login() {
      this.$refs.validationObserver.validate().then((res) => {
        if (res) {
          this.btnDisable= true
          this.laodingLogin= true
          authService.loginCustomer({
              outh_param: this.outh_param,
              login_with_verification_code: true,
            })
            .then((res) => {
                console.log(res)
                if(res.status === 200){
                    this.$router.push({path:"/verify_login",query: { phone_number: this.outh_param }})
                    this.$store.commit("open_toast",
                    {
                        msg: res.data.message,
                        variant: "success",
                    },
                    { root: true });
                }
            })
            .catch(e => {
              if (e.response.status === 400) {
                this.$refs.validationObserver.setErrors(e.response.data.data);
                return
              }
               this.$store.commit("open_toast",{
                  msg: e.response.data.message,
                  variant: "error",
                },
                { root: true }
              );
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
