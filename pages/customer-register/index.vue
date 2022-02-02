<template>
  <div class="sign-up text-right">
     <div class="text-center mb-3">
      <img width="130" src="@/assets/images/logo.svg" alt="لوگوی پی استار">
    </div>
    <div dir="rtl">
      <ValidationObserver ref="validationObserver" >
        <Xform :sub_form="()=> do_register()">
          <template #content>
            <div>
            <ValidationProvider vid="phone" :name="lang.label.phone" rules="required|regPhone"  v-slot="{ valid, errors }">
              <b-form-group
              :label="lang.label.phone"
              class="font-weight-bold"
              >
                  <b-form-input
                    v-model="form.phone"
                    ref="phone"
                    type="text"
                    maxlength="11"
                    placeholder="مثال: 09xxxxxxx23"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
        
            <ValidationProvider
              rules="min:6|max:20"
              v-slot="{ valid, errors }"
              vid="password"
              :name="lang.label.password"
            >
              <b-form-group
              :label="lang.label.password + ' (اختیاری)'"
              class="font-weight-bold"
              >
                  <b-form-input
                    v-model="form.password"
                    ref="city"
                    type="password"
                    maxlength="25"
                    :state="errors[0] ? false : (valid && form.password != '' ? true : null)"
                  ></b-form-input>
                <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <span>قبلا ثبت نام کرده اید؟</span>
            <router-link to="/customer-login" class="text-info">ورود</router-link>
            <Xbutton
              is_submit
              class="btn-sign mx-auto w-100 mt-3"
              text="ثبت نام"
              :disable="btnDisable"
              id="register-button"
            >
              <template #spinner>
                <b-spinner v-show="laodingLogin" small  class="float-left"></b-spinner>
              </template>            
            </Xbutton>
            </div>
          </template>
        </Xform>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { provinces } from "@/constants/Provinces";
import { authService } from '@/services/apiServices'
import { tr } from "@/services/lang";
export default {
  middleware: "guest",
  layout: "sign",
  head(){
    return{
      title: 'ثبت نام'
    }
  },
  data() {
    return {
      form: {
        phone: "",
        password: "",
      },
      btnDisable: false,
      laodingLogin: false
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    do_register() {
      this.$refs.validationObserver.validate().then((res) => {
        if (res) {
          this.btnDisable= true
          this.laodingLogin= true
          const data = {
            phone: this.form.phone,
            password: this.form.password,
          };
            authService.registerCustomer(data)
            .then((res) => {
              this.$router.push({path:"/verify_login",query: { phone_number: this.form.phone }});
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
              if (e.response.data.status === "error") {
                  this.$refs.validationObserver.setErrors(e.response.data.data);
                  return;
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
            })
            .finally(() =>{
              this.btnDisable= false
              this.laodingLogin= false
            })
        } else {
          return;
        }
      });
    },
  },
  computed: {
    provinces() {
      return provinces;
    },
    lang(){
      return tr()
    }
  },
};
</script>


<style scoped lang="scss">
.sign-up {
  border-radius: 10px;
  box-shadow: 1px 1px 12px 0 $secondary;
  padding: 30px;
   max-width: 350px;
  min-width: 330px;
  overflow-y: auto;
  
  direction: ltr;
  #register-button{
    border-radius: 12px;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button { 
	  -webkit-appearance: none;
  }
}
</style>
