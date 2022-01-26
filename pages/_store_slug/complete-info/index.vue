<template>
  <div class="row">
    <div class="container body-hv-fit">
      <div class="row">
        <div class="col-10 m-auto col-md-7">
          <div class="row pt-5">
            <h4 class="font-weight-bold" v-text="lang.label.completeInfo"></h4>
          </div>
          <div class="row text-right">
            <ValidationObserver class="w-100" ref="completeInfoForm">
              <Xform
                :sub_form="doValidate"
                legend="لطفا اطلاعات خود را وارد کنید"
              >
                <template #content>
                  <div class="form-group px-3 pt-3">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="d-flex w-100 justify-content-between">
                            <div class="naming">
                              <ValidationProvider v-show="detail.options.name === 1"
                                vid="first_name"
                                :rules="`${ detail.options.name === 1 ? 'required|min:3' : 'min:3'}`"
                                v-slot="{ errors, valid }"
                                :name="lang.label.fname"
                              >
                                <b-form-input
                                  type="text"
                                  v-model="form.first_name"
                                  :placeholder="lang.label.fname"
                                  :state="errors[0] ? false : (valid && form.first_name != '' ? true : null)"
                                />
                                <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                              </ValidationProvider>
                            </div>
                            <div class="naming">
                              <ValidationProvider
                              v-show="detail.options.name === 1"
                                vid="last_name"
                                :rules="`${ detail.options.name === 1 ? 'required|min:3' : 'min:3'}`"
                                v-slot="{ errors, valid }"
                                :name="lang.label.lname"
                              >
                                <b-form-input
                                  :state="errors[0] ? false : (valid && form.last_name != '' ? true : null)"
                                  type="text"
                                  v-model="form.last_name"
                                  :placeholder="lang.label.lname"
                                />
                                <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mt-3">
                        <div class="row">
                          <div class="w-100">
                            <ValidationProvider
                              v-show="detail.options.email === 1"
                              vid="email"
                              :rules="`${ detail.options.email === 1 ? 'required|email' : 'email'}`"
                              v-slot="{ errors, valid }"
                              :name="lang.label.email"
                            >
                              <b-form-input
                                :state="errors[0] ? false : (valid && form.email != '' ? true : null)"
                                type="email"
                                v-model="form.email"
                                :placeholder="lang.label.email"
                              />
                              <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 mt-3">
                        <div class="row">
                          <div class="w-100">
                            <ValidationProvider
                              v-show="detail.options.phone === 1"
                              vid="phone"
                              :rules="`${detail.options.phone === 1 ? 'required|regPhone' : 'regPhone'}`"
                              v-slot="{ errors, valid }"
                              :name="lang.label.phone"
                            >
                              <b-form-input
                                type="text"
                                id="phone"
                                ref="phone"
                                :state="errors[0] ? false : (valid && form.phone!= '' ? true : null)"
                                :placeholder="lang.label.phone"
                                v-model="form.phone"
                                maxlength="11"
                              />
                              <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mt-3">
                        <div class="row ">
                          <div class="d-flex w-100 justify-content-between">
                            <div class="naming">
                               <ValidationProvider
                                v-show="detail.options.address === 1"
                                vid="province" :name="lang.label.province"
                                :rules="`${detail.options.address === 1 ? 'required' : '' }`"
                                v-slot="{ valid, errors }">
                                <b-form-group id="provinceGroup">
                                  <b-form-select
                                    id="rovince"
                                    ref="province"
                                    :state="errors[0] ? false : (valid && form.selected != null ? true : null)"
                                    :class="['form-control', !form.selected && !errors[0] ? 'pr-4' : null]"
                                    v-model="form.selected"
                                    
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
                            </div>
                            <div class="naming">
                              <ValidationProvider
                                v-show="detail.options.address === 1"
                                vid="city"
                                :rules="`${detail.options.address === 1 ? 'required|min:2' : 'min:2'}`"
                                v-slot="{ errors, valid }"
                                :name="lang.label.city"
                              >
                                <b-form-input
                                  type="text"
                                  v-model="form.city"
                                  :placeholder="lang.label.city"
                                  :state="errors[0] ? false : (valid ,form.city != '' ? true : null)"
                                />
                                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row">
                          <ValidationProvider
                            v-show="detail.options.address === 1"
                            vid="address" class="w-100"
                            :rules="`${detail.options.address === 1 ? 'required|min:10' : 'min:10'}`"
                            v-slot="{ errors , valid}"
                            :name="lang.label.address"
                          >
                            <b-form-input
                              type="text"
                              v-model="form.address"
                              :placeholder="lang.label.address"
                              :state="errors[0] ? false : (valid && form.address != '' ? true : null)"
                            />
                            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-12 my-3">
                        <div class="row">
                          <ValidationProvider
                            v-show="detail.options.address === 1"
                            vid="postal_code" class="w-100"
                            :rules="`${detail.options.address === 1 ? 'required|min:10' : 'min:10'}`"
                            v-slot="{ errors , valid}"
                            :name="lang.label.postal_code"
                          >
                            <b-form-input
                              type="text"
                              v-model="form.postal_code"
                              :placeholder="lang.label.postal_code"
                              :state="errors[0] ? false : (valid && form.postal_code != '' ? true : null)"
                            />
                            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                       
                     <div class="d-flex align-items-center">
                          <input type="checkbox" 
                          id="check-login"
                          v-model="check_login"
                          name="check-login"
                          class="mb-2"
                        >
                         <label class="mr-1" for="check-login">ثبت نام انجام شود(جهت پیگیری راحت تر سفارشات)</label>
                       
                     </div>
                          
                       
                      </div>
                    </div>
                    <div class="row mt-2">
                      <hr class="dash w-100" />
                    </div>
                    <div class="row">
                      <Xbutton
                        is_submit
                        class="px-5 m-auto w-100"
                        text="ثبت سفارش"
                        :disable="btnDisable"
                      >
                       <template #spinner>
                         <b-spinner v-show="laodingRegister" small  class="float-left"></b-spinner>
                       </template>
                      </Xbutton>
                    </div>
                  </div>
                </template>
              </Xform>
            </ValidationObserver>
          </div>
        </div>
      </div>
      <template>
      <b-modal
          dir="rtl"
          id="sign-form"
          centered
          :title="sign_form_login ? 'ورود' : 'ثبت نام'"
          hide-footer
      >
          <ValidationObserver ref="sign_form">
         
          <b-form @submit.prevent="sign_form_login ? login() : register()">
              <ValidationProvider vid="phone" :name="lang.label.phone" rules="required|regPhone"  v-slot="{ valid, errors }">
              <b-form-group
              :label="lang.label.phone"
              class="font-weight-bold"
              >
                <b-form-input
                  v-model="phone"
                  ref="phone"
                  type="text"
                  maxlength="11"
                  placeholder="مثال: 09xxxxxxx23"
                  :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <transition name="fade">
              <ValidationProvider v-if="showCodeVerify" vid="code" :name="lang.label.code_verify" rules="required"  v-slot="{ valid, errors }">
                <b-form-group
                :label="lang.label.code_verify"
                class="font-weight-bold"
                >
                  <b-form-input
                    v-model="code"
                    ref="code"
                    type="text"
                    maxlength="11"
                    placeholder="کد اعتبار سنجی را وارد کنید"
                    :state="errors[0] ? false : (valid ? true : null)"
                    ></b-form-input>
                  <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
            </transition>
            <div v-if="sign_form_login" class="mb-4">
                <span>هنوز ثبت نام نکرده اید؟</span>
                <span class="text-info cursor_pointer" @click="changeStateSign(false)">ثبت نام</span>
            </div>
            <div v-else class="mb-4">
                <span>قبلا ثبت نام کرده اید؟</span>
                <span class="text-info cursor_pointer" @click="changeStateSign(true)">ورود</span>
            </div>
            <div>
              <Xbutton
              v-if="!showCodeVerify"
              is_submit
              class="px-5 w-100"
              text="ثبت"
              :disable="btnRegisterDisable"
              >
              <template #spinner>
                  <b-spinner
                  v-show="loadingRegisterSpinner"
                  small
                  class="float-left"
                  ></b-spinner>
              </template>
            </Xbutton>
            <Xbutton
            v-else
            :on_click="() => verify_sign()"
            class="px-5 w-100"
            text="ثبت"
            :disable="btnRegisterDisable"
            >
            <template #spinner>
                <b-spinner
                v-show="loadingRegisterSpinner"
                small
                class="float-left"
                ></b-spinner>
            </template>
            </Xbutton>
            </div>
          </b-form>
         </ValidationObserver>
      </b-modal>
      </template>
    </div>   
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { provinces } from "@/constants/Provinces";
import { storeService } from "@/services/apiServices"
import { tr } from "@/services/lang"
import { mapGetters } from 'vuex'
import { authService } from '@/services/apiServices'
export default {
  layout: "index",
  head() {
    return {
      title: `${this.detail.fa_name} - تکمیل اطلاعات`
    };
  },
  data() {
    return {
      form: {
        phone: "",
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        city: "",
        postal_code: "",
        selected:null
      },
      phone: '',
      sign_form_login: true,
      showCodeVerify: false,
      code: '',
      check_login: false,
      laodingRegister: false,
      btnDisable:false,
      btnRegisterDisable: false,
      loadingRegisterSpinner: false,

    };
  },
    components: {
    ValidationProvider,
    ValidationObserver,
  },
  created(){
   if(process.client){
       if(this.$cookies.get('token-buyer') && localStorage.getItem('userDetail')){
        const detail = JSON.parse(localStorage.getItem('userDetail'))
        this.form.phone = detail.phone
        this.form.email = detail.email ? detail.email : ''
        this.form.first_name = detail.first_name ? detail.first_name : ''
        this.form.last_name = detail.last_name ? detail.last_name : ''
        this.form.address = detail.addresses[0]?.address
        this.form.city = detail.addresses[0]?.city
        this.form.postal_code = detail.postal_code ? detail.postal_code : ''
        this.form.selected = detail.addresses[0]?.province ? detail.addresses[0]?.province : null
      }else{
        return null
      }
   }
  },
  methods: {
    doValidate(){
      this.$refs.completeInfoForm.validate().then((success) => {
        if ( success ) {
          if( this.check_login ) {
            this.$bvModal.show('sign-form')
          }else{
            const data = {
              store_id: this.$store.state.store.id,
              name: this.form.first_name + " " + this.form.last_name,
              email: this.form.email,
              address: {
                province: this.form.selected,
                city: this.form.city,
                address: this.form.address,
              },
              phone: this.form.phone,
            }
            if(this.$cookies.get('token-buyer')){
              data['token'] = this.$cookies.get('token-buyer')
            }
            this.showCheckout(data)
          }
          
        } else {
          return
        }
      })     
    },
    register() {
      this.$refs.sign_form.validate().then(async (success) => {
        if ( success ) {
          const data1 = {
            phone: this.phone
          }
          try{
            this.btnRegisterDisable = true
            this.loadingRegisterSpinner = true
            const res = await authService.registerCustomer(data1)
             if (res.status === 200) {
                this.showCodeVerify= true
                this.$store.commit(
                  "open_toast",
                  {
                    msg: res.data.message,
                    variant: "success",
                  },
                  { root: true }
                );
              }
          }catch(e){
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
          }finally{
            this.btnRegisterDisable = false
            this.loadingRegisterSpinner = false
          }
        }else{
          return
        }
      })
     
    },
    login() {
      this.$refs.sign_form.validate().then(async (success) => {
        if(success) {
          try{
            this.btnRegisterDisable = true
            this.loadingRegisterSpinner = true
            const res = await authService.loginCustomer({
              outh_param: this.phone,
              login_with_verification_code: true,
            })
             if(res.status === 200){
                this.showCodeVerify= true
                this.$store.commit(
                  "open_toast",
                  {
                    msg: res.data.message,
                    variant: "success",
                  },
                  { root: true }
                );
             }
          }catch(e){
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
          }finally{
            this.btnRegisterDisable = false
            this.loadingRegisterSpinner = false
          }
        }else {
          return
        }

      })
       
    },
    verify_sign(){
      this.$refs.sign_form.validate().then(async (success) => {
        if( success ) {
          try{
            this.btnRegisterDisable = true
            this.loadingRegisterSpinner = true
            const data = {
              phone: this.phone,
              code: this.code
            }
            const res= await authService.verifyLogin( data )
            if (res.status === 200) {
              this.$cookies.set("token-buyer", res.data.data.api.token);
              const res_current= await authService.currentUser( res.data.data.api.token )
              if(res_current.status == 200){
                localStorage.setItem('userDetail',JSON.stringify(res_current.data.data))
              }
               const data = {
                  store_id: this.$store.state.store.id,
                  name: this.form.first_name + " " + this.form.last_name,
                  email: this.form.email,
                  address: {
                    province: this.form.selected,
                    city: this.form.city,
                    address: this.form.address,
                  },
                  phone: this.form.phone,
                };
                this.showCheckout(data)
            }
          }catch({ response }){
             this.$store.commit('open_toast',{
              msg: response.data.message,
              variant: 'error'
            })
          }finally{
            this.btnRegisterDisable = false
            this.loadingRegisterSpinner = false
          }
        }else{
          return
        }
      })
    },
    changeStateSign(payload){
      this.phone= ''
      this.code= ''
      this.showCodeVerify= false
      this.sign_form_login= payload
    },
    showCheckout(data){
      if(this.detail.options.address === 1){
        if(this.detail.shipping_settings.shipping_region === 1 || data.address.province == this.detail.province){
          this.laodingRegister=true
          this.btnDisable=true
          const res =this.$store.dispatch("payment/select_payment", data);
          res.finally(()=>{
          this.laodingRegister=false
          this.btnDisable=false
        })
          return
        }
        this.$store.commit('open_toast',{
          msg: ' محصول در منطقه شما قابل ارسال نمی باشد',
          variant: 'error'
        })
        return
      } 
      this.laodingRegister=true
      this.btnDisable=true
      const res = this.$store.dispatch("payment/select_payment", data)
      res.finally(()=>{
        this.laodingRegister=false
        this.btnDisable=false
      }) 
    },
  },
  computed: {
     ...mapGetters([
      'detail',
    ]),
    provinces() {
      return provinces;
    },
    lang(){
      return tr()
    },
  },
};
</script>

<style scoped lang="scss">
h4 {
  color: $success;
}
.naming {
  width: 48%;
}

.dash {
  border-top: 1px dashed $success;
}
</style>
