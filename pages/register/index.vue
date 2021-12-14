<template>
  <div class="sign-up text-right">
    <div dir="rtl">
      <ValidationObserver ref="validationObserver" >
        <Xform :sub_form="do_register">
          <template #content>
            <ValidationProvider vid="first_name" :name="lang.label.fname" rules="required|min:3"  v-slot="{ valid, errors }">
              <b-form-group :label="lang.label.fname">
                  <b-form-input
                    v-model="form.first_name"
                    ref="first_name"
                    type="text"
                    placeholder="مثال: علی"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                  <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider vid="last_name" :name="lang.label.lname" rules="required|min:3"  v-slot="{ valid, errors }">
              <b-form-group
              :label="lang.label.lname"
              >
                  <b-form-input
                    v-model="form.last_name"
                    ref="last_name"
                    type="text"
                    placeholder="مثال: ابراهیمی"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                  <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider vid="phone" :name="lang.label.phone" rules="required|regPhone"  v-slot="{ valid, errors }">
              <b-form-group
              :label="lang.label.phone"
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
            <ValidationProvider vid="email" :name="lang.label.email" rules="required|email"  v-slot="{ valid, errors }">
              <b-form-group
              :label="lang.label.email" 
              >
                  <b-form-input
                    v-model="form.email"
                    ref="email"
                    type="text"
                    placeholder="example@gmail.com"
                    :state="errors[0] ? false : (valid ? true : null)"
                  />
                  <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider vid="province" :name="lang.label.province" rules="required" v-slot="{ valid, errors }">
              <b-form-group id="provinceGroup" :label="lang.label.province" label-for="province">
                <b-form-select
                  id="province"
                  :state="errors[0] ? false : (valid && form.selected != null ? true : null)"
                  v-model="form.selected"
                  ref="province"
                  :class="['form-control', !form.selected && !errors[0] ? 'pr-4' : null]"
                >
                <option :value="null">انتخاب استان</option>
                <option
                  v-for="province in provinces"
                  :key="province.id"
                  :value="province.id"
                  v-text="province.value"
                ></option>
                </b-form-select>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider vid="city" :name="lang.label.city" rules="required|min:2"  v-slot="{ valid, errors }">
              <b-form-group
              :label="lang.label.city"
              >
                  <b-form-input
                    v-model="form.city"
                    ref="city"
                    type="text"
                    placeholder="مثال: تهران"
                    :state="errors[0] ? false : (valid ? true : null)"
                  />
                <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider vid="address" :name="lang.label.address" rules="required|min:10"  v-slot="{ valid, errors }">
              <b-form-group
              :label="lang.label.address"
              >
                  <b-form-input
                    v-model="form.address"
                    ref="address"
                    type="text"
                    placeholder="مثال: تهران-میدان انقلاب-خیابان آزادی-پلاک30"
                    :state="errors[0] ? false : (valid ? true : null)"
                  />
                  <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider
              rules="required|min:6|max:20"
                v-slot="{ valid, errors }"
              vid="password"
              :name="lang.label.password"
            >
              <b-form-group
              :label="lang.label.password"
              >
              
                  <b-form-input
                    v-model="form.password"
                    ref="city"
                    type="password"
                    maxlength="25"
                    placeholder="مثال: 123456"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <Xbutton
              is_submit
              class="btn-sign m-auto w-100"
              text="ثبت نام"
              :disable="btnDisable"
            >
              <template #spinner>
                <b-spinner v-show="laodingLogin" small  class="float-left"></b-spinner>
              </template>            
            </Xbutton>
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
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        phone: "",
        password: "",
        email: "",
        city: "",
        address: "",
        selected:null
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
            first_name: this.form.first_name,
            last_name: this.form.last_name,
            email: this.form.email,
            phone: this.form.phone,
            province: this.form.selected,
            city: this.form.city,
            password2: this.form.password,
            address: this.form.address,
          };
            authService.registerCustomer(data)
            .then((res) => {
              this.$store.commit("user/setToState",{
                name: 'phone_number',
                data: data.phone
              }, {
                root: true,
              });
              this.$router.push("/verify_login");
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
  @include medium{
    max-width: 550px;
    min-width: 500px;
  }
  max-width: 350px;
  min-width: 330px;
  overflow-y: auto;
  height: 90vh;
  direction: ltr;
  
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button { 
	-webkit-appearance: none;
}
}
</style>
