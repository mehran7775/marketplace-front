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
                              <ValidationProvider
                                v-if="detail.options.name === 1"
                                vid="first_name"
                                :rules="`${
                                  detail.options.name === 1
                                    ? 'required|min:3'
                                    : 'min:3'
                                }`"
                                v-slot="{ errors, valid }"
                                :name="lang.label.fname"
                              >
                                <b-form-input
                                  type="text"
                                  :readonly="userDetail.first_name ? true : false"
                                  v-model="form.first_name"
                                  :placeholder="lang.label.fname"
                                  :state="
                                    errors[0]? false: valid && form.first_name != ''? true: null
                                  "
                                />
                                <b-form-invalid-feedback
                                  class="mt-2"
                                  id="inputLiveFeedback"
                                  >{{ errors[0] }}</b-form-invalid-feedback
                                >
                              </ValidationProvider>
                            </div>
                            <div class="naming">
                              <ValidationProvider
                                v-if="detail.options.name === 1"
                                vid="last_name"
                                :rules="`${
                                  detail.options.name === 1
                                    ? 'required|min:3'
                                    : 'min:3'
                                }`"
                                v-slot="{ errors, valid }"
                                :name="lang.label.lname"
                              >
                                <b-form-input
                                  :readonly="userDetail.last_name ? true : false"
                                  :state="
                                    errors[0]
                                      ? false
                                      : valid && form.last_name != ''
                                      ? true
                                      : null
                                  "
                                  type="text"
                                  v-model="form.last_name"
                                  :placeholder="lang.label.lname"
                                />
                                <b-form-invalid-feedback
                                  class="mt-2"
                                  id="inputLiveFeedback"
                                  >{{ errors[0] }}</b-form-invalid-feedback
                                >
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mt-3">
                        <div class="row">
                          <div class="w-100">
                            <ValidationProvider
                              v-if="detail.options.email === 1"
                              vid="email"
                              :rules="`${
                                detail.options.email === 1
                                  ? 'required|email'
                                  : 'email'
                              }`"
                              v-slot="{ errors, valid }"
                              :name="lang.label.email"
                            >
                              <b-form-input
                                :state="errors[0]? false: valid && form.email != ''? true: null"
                                type="email"
                                :readonly="userDetail.email ? true : false"
                                v-model="form.email"
                                :placeholder="lang.label.email"
                              />
                              <b-form-invalid-feedback
                                class="mt-2"
                                id="inputLiveFeedback"
                                >{{ errors[0] }}</b-form-invalid-feedback
                              >
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
                              v-if="detail.options.phone === 1"
                              vid="phone"
                              :rules="`${
                                detail.options.phone === 1
                                  ? 'required|regPhone'
                                  : 'regPhone'
                              }`"
                              v-slot="{ errors, valid }"
                              :name="lang.label.phone"
                            >
                              <b-form-input
                                type="text" id="phone" ref="phone"
                                :readonly="userDetail.phone ? true : false"
                                :state="
                                  errors[0]? false: valid && form.phone != ''? true: null
                                "
                                :placeholder="lang.label.phone"
                                v-model="form.phone"
                                maxlength="11"
                              />
                              <b-form-invalid-feedback
                                class="mt-2"
                                id="inputLiveFeedback"
                                >{{ errors[0] }}</b-form-invalid-feedback
                              >
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mt-3">
                        <div class="row" v-if="detail.options.address === 1 && $cookies.get('token-buyer')">
                          <ValidationProvider
                            class="w-100"
                            v-if="detail.options.address === 1"
                            vid="address"
                            :name="lang.label.address"
                            rules="required"
                            v-slot="{ valid, errors }"
                          >
                            <b-form-group id="address">
                              <b-form-select
                                id="address"
                                ref="address"
                                :state="
                                  errors[0]? false: valid && address != null? true: null
                                "
                                :class="[
                                  'form-control',
                                  !address && !errors[0] ? 'pr-4' : null,
                                ]"
                                v-model="address"
                              >
                                <option :value="null">انتخاب آدرس</option>
                                <option
                                  v-for="(address, index) in form.addresses"
                                  :key="index"
                                  :value="address.id"
                                >
                                  {{
                                    `استان ${find_province(address.province)} - شهر ${address.city} - کد پستی ${address.postal_code}`
                                  }}
                                </option>
                              </b-form-select>
                              <b-form-invalid-feedback id="inputLiveFeedback">{{
                                errors[0]
                              }}</b-form-invalid-feedback>
                            </b-form-group>
                          </ValidationProvider>
                        </div>
                        <template v-if="detail.options.address === 1 && !$cookies.get('token-buyer')">
                          <div class="row">
                            <div class="d-flex w-100 justify-content-between">
                            <div class="naming">
                                <ValidationProvider vid="province" :name="lang.label.province"
                                  rules="required"
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
                                vid="city"
                                rules="required|min:2"
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
                          <div class="row">
                            <ValidationProvider
                              vid="address" class="w-100"
                              rules="required|min:10"
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
                          <div class="row mt-3">
                            <ValidationProvider
                              class="w-100"
                              v-if="detail.options.address === 1"
                              vid="postal_code"
                              :name="lang.label.postal_code"
                              rules="required|numeric|length:10"
                              v-slot="{ valid, errors }"
                            >
                              <b-form-group id="postal_code">
                                <b-form-input
                                  type="text"
                                  id="postal_code"
                                  ref="postal_code"
                                  :readonly="userDetail.postal_code ? true : false"
                                  :state="errors[0]? false: valid ? true: null
                                  "
                                  :placeholder="lang.label.postal_code"
                                  v-model="form.postal_code"
                                />
                                <b-form-invalid-feedback id="inputLiveFeedback">{{
                                  errors[0]
                                }}</b-form-invalid-feedback>
                              </b-form-group>
                            </ValidationProvider>
                          </div>
                        </template>
                      </div> 
                    </div>
                    <div v-if="detail.options.address === 1 && $cookies.get('token-buyer')" class="row mb-2">
                      <div class="col-12">
                        <div
                          @click="addAddress()"
                          class="d-flex align-items-center"
                        >
                         
                          <fa icon="plus" class="cursor_pointer"></fa>
                          <span class="mr-1 cursor_pointer">افزودن آدرس جدید</span>
                        </div>
                      </div>
                    </div>
                    <div v-if="!$cookies.get('token-buyer')" class="row">
                      <div class="col-12">
                        <div>
                         <label class="switch">
                              <input type="checkbox" v-model="check_login">
                              <span class="slider round"></span>
                          </label>
                          ثبت&zwnj;نام / ورود (جهت پیگیری راحت تر
                            سفارشات)
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
                        :disabled="btnDisable"
                      >
                        <template #spinner>
                          <b-spinner
                            v-show="laodingRegister"
                            small
                            class="float-left"
                          ></b-spinner>
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
              <ValidationProvider
                vid="phone"
                :name="lang.label.phone"
                rules="required|regPhone"
                v-slot="{ valid, errors }"
              >
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
                    :state="errors[0] ? false : valid ? true : null"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="mt-2"
                    id="inputLiveFeedback"
                    >{{ errors[0] }}</b-form-invalid-feedback
                  >
                </b-form-group>
              </ValidationProvider>
              <transition name="fade">
                <ValidationProvider
                  v-if="showCodeVerify"
                  vid="code"
                  :name="lang.label.code_verify"
                  rules="required"
                  v-slot="{ valid, errors }"
                >
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
                      :state="errors[0] ? false : valid ? true : null"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      class="mt-2"
                      id="inputLiveFeedback"
                      >{{ errors[0] }}</b-form-invalid-feedback
                    >
                  </b-form-group>
                </ValidationProvider>
              </transition>
              <div v-if="sign_form_login" class="mb-4">
                <span>هنوز ثبت نام نکرده اید؟</span>
                <span
                  class="text-info cursor-pointer"
                  @click="changeStateSign(false)"
                  >ثبت نام</span
                >
              </div>
              <div v-else class="mb-4">
                <span>قبلا ثبت نام کرده اید؟</span>
                <span
                  class="text-info cursor-pointer"
                  @click="changeStateSign(true)"
                  >ورود</span
                >
              </div>
              <div>
                <Xbutton
                  v-if="!showCodeVerify"
                  is_submit
                  class="px-5 w-100"
                  text="ثبت"
                  :disabled="btnRegisterDisable"
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
                  :disabled="btnRegisterDisable"
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
        <b-modal
          dir="rtl"
          id="createAddressForm"
          centered
          title="ایجاد آدرس"
          hide-footer
        >
          <ValidationObserver ref="createAddressForm">
            <b-form @submit.prevent="create_address()">
              <div class="col-12 mt-3">
                <div class="row">
                  <div class="d-flex w-100 justify-content-between">
                    <div class="naming">
                      <ValidationProvider
                        vid="province"
                        :name="lang.label.province"
                        rules="required"
                        v-slot="{ valid, errors }"
                      >
                        <b-form-group id="provinceGroup">
                          <b-form-select
                            id="rovince"
                            ref="province"
                            :state="
                              errors[0]? false: valid && adressForm.selected != null? true: null
                            "
                            :class="[
                              'form-control',
                              !adressForm.selected && !errors[0] ? 'pr-4' : null,
                            ]"
                            v-model="adressForm.selected"
                          >
                            <option :value="null">انتخاب استان</option>
                            <option
                              v-for="province in provinces"
                              :key="province.id"
                              :value="province.id"
                              v-text="province.value"
                            ></option>
                          </b-form-select>
                          <b-form-invalid-feedback id="inputLiveFeedback">{{
                            errors[0]
                          }}</b-form-invalid-feedback>
                        </b-form-group>
                      </ValidationProvider>
                    </div>
                    <div class="naming">
                      <ValidationProvider
                        vid="city"
                        rules="required"
                        v-slot="{ errors, valid }"
                        :name="lang.label.city"
                      >
                        <b-form-input
                          type="text"
                          v-model="adressForm.city"
                          :placeholder="lang.label.city"
                          :state="
                            errors[0]
                              ? false
                              : (valid, adressForm.city != '' ? true : null)
                          "
                        />
                        <b-form-invalid-feedback id="inputLiveFeedback">{{
                          errors[0]
                        }}</b-form-invalid-feedback>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <ValidationProvider
                    vid="address"
                    class="w-100"
                    rules="required"
                    v-slot="{ errors, valid }"
                    :name="lang.label.address"
                  >
                    <b-form-input
                      type="text"
                      v-model="adressForm.address"
                      :placeholder="lang.label.address"
                      :state="
                        errors[0]? false: valid && adressForm.address != ''? true: null
                      "
                    />
                    <b-form-invalid-feedback id="inputLiveFeedback">{{
                      errors[0]
                    }}</b-form-invalid-feedback>
                  </ValidationProvider>
                </div>
              </div>
              <div class="col-12">
                <div class="row mt-3">
                  <ValidationProvider
                    vid="postal_code"
                    class="w-100"
                    rules="required|numeric|length:10"
                    v-slot="{ errors, valid }"
                    :name="lang.label.postal_code"
                  >
                    <b-form-input
                      type="text"
                      v-model="adressForm.postal_code"
                      :placeholder="lang.label.postal_code"
                      :state="
                        errors[0]? false: valid && adressForm.postal_code != ''? true: null
                      "
                    />
                    <b-form-invalid-feedback id="inputLiveFeedback">{{
                      errors[0]
                    }}</b-form-invalid-feedback>
                  </ValidationProvider>
                </div>
              </div>
               <Xbutton
                  is_submit
                  class="px-5 mx-auto w-100 mt-4"
                  text="ثبت"
                  :disabled="btnDisable"
                >
                  <template #spinner>
                    <b-spinner
                      v-show="laodingRegister"
                      small
                      class="float-left"
                    ></b-spinner>
                  </template>
                </Xbutton>
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
import { storeService } from "@/services/apiServices";
import { tr } from "@/services/lang";
import { mapGetters } from "vuex";
import { authService } from "@/services/apiServices";
import { userService } from "@/services/apiServices"
import { addressService } from "@/services/apiServices"
export default {
  layout: "index",
  head() {
    return {
      title: `${this.detail.fa_name} - تکمیل اطلاعات`,
    };
  },
  data() {
    return {
      form: {
        phone: "",
        first_name: "",
        last_name: "",
        email: "",
        addresses: [],
        postal_code: '',
        selected: null,
        city: '',
        address: ''
      },
      adressForm:{
        address: '',
        city: '',
        selected: null,
        postal_code:''
      },
      address: null,
      phone: "",
      sign_form_login: true,
      showCodeVerify: false,
      code: "",
      check_login: false,
      laodingRegister: false,
      btnDisable: false,
      laodingAddressRegister: false,
      btnAddressDisable: false,
      btnRegisterDisable: false,
      loadingRegisterSpinner: false,
      userDetail: {
        last_name: '',
        first_name: '',
        email: '',
        phone: '',
        postal_code: "",
      }
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  mounted(){
    if(this.form.addresses.length>0){
      this.form.selected = this.form.addresses[0]
    }
  },
  created() {
    if (process.client) {
      this.set_user_detail()
      this.get_addresses()
    }
  },
  methods: {
    async set_user_detail(){
      if (
        this.$cookies.get("token-buyer") &&
        localStorage.getItem("userDetail")
      ) {
        const detail= await JSON.parse(localStorage.getItem("userDetail"));
        this.userDetail= detail
        this.form.phone = detail.phone;
        this.form.email = detail.email ? detail.email : "";
        this.form.first_name = detail.first_name ? detail.first_name : "";
        this.form.last_name = detail.last_name ? detail.last_name : "";
        this.form.postal_code = detail.postal_code ? detail.postal_code : "";
      }
    },
    async get_addresses() {
      if(this.$cookies.get('token-buyer')){
        try{
          const {data}= await addressService.get_addresses(this.$cookies.get('token-buyer'))
          this.form.addresses = data.data
            
        }catch(e){
          console.log(e)
        }
      }
    },
     find_province(id){
      const province= provinces.find(element =>{
        return element.id === id
      })
      if(province){
        return province.value
      }
      return id
    },
    doValidate() {
      this.$refs.completeInfoForm.validate().then((success) => {
        if (success) {
          if (this.check_login) {
            this.$bvModal.show("sign-form");
          } else {
            const data = {
              store_id: this.$store.state.store.id,
              name: this.form.first_name + " " + this.form.last_name,
              email: this.form.email,
              address: {
                address: this.form.address,
                city: this.form.city,
                province: this.form.selected,
              },
              phone: this.form.phone,
              postal_code: this.form.postal_code
            };
            if (this.$cookies.get("token-buyer")) {
              data["token"] = this.$cookies.get("token-buyer");
            }
            if(this.address){
              data['address_id']= this.address
            }
            this.showCheckout(data);
          }
        } else {
          return;
        }
      });
    },
    register() {
      this.$refs.sign_form.validate().then(async (success) => {
        if (success) {
          const data1 = {
            phone: this.phone,
          };
          try {
            this.btnRegisterDisable = true;
            this.loadingRegisterSpinner = true;
            const res = await authService.registerCustomer(data1);
            if (res.status === 200) {
              this.showCodeVerify = true;
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
          } finally {
            this.btnRegisterDisable = false;
            this.loadingRegisterSpinner = false;
          }
        } else {
          return;
        }
      });
    },
    login() {
      this.$refs.sign_form.validate().then(async (success) => {
        if (success) {
          try {
            this.btnRegisterDisable = true;
            this.loadingRegisterSpinner = true;
            const res = await authService.loginCustomer({
              outh_param: this.phone,
              login_with_verification_code: true,
            });
            if (res.status === 200) {
              this.showCodeVerify = true;
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
          } finally {
            this.btnRegisterDisable = false;
            this.loadingRegisterSpinner = false;
          }
        } else {
          return;
        }
      });
    },
    verify_sign() {
      this.$refs.sign_form.validate().then(async (success) => {
        if (success) {
          try {
            this.btnRegisterDisable = true;
            this.loadingRegisterSpinner = true;
            const data = {
              phone: this.phone,
              code: this.code,
            };
            const res = await authService.verifyLogin(data);
            if (res.status === 200) {
              this.$cookies.set("token-buyer", res.data.data.api.token);
              const res_current = await authService.currentUser(
                res.data.data.api.token
              );
              if (res_current.status == 200) {
                localStorage.setItem(
                  "userDetail",
                  JSON.stringify(res_current.data.data)
                );
              }
              const data = {
                store_id: this.$store.state.store.id,
                name: this.form.first_name + " " + this.form.last_name,
                email: this.form.email,
                phone: this.form.phone,
                address: {
                  address: this.form.address,
                  city: this.form.city,
                  province: this.form.selected,
                },
                postal_code: this.form.postal_code,
                token: this.$cookies.get("token-buyer")
              }
              if(this.address){
                data['address_id']= this.address
              }
              this.showCheckout(data);
            }
          } catch ({ response }) {
            this.$store.commit("open_toast", {
              msg: response.data.message,
              variant: "error",
            });
          } finally {
            this.btnRegisterDisable = false;
            this.loadingRegisterSpinner = false;
          }
        } else {
          return;
        }
      });
    },
    changeStateSign(payload) {
      this.phone = "";
      this.code = "";
      this.showCodeVerify = false;
      this.sign_form_login = payload;
    },
    showCheckout(data) {
      if(this.detail.options.address === 1){
        let canBuy = false
        if(data.address_id){
          const address =this.form.addresses.find(element =>{
            return (element.id === data.address_id)
          })
           
          if (
          this.detail.shipping_settings.shipping_region === 1 ||
          address.province == this.detail.province
          ) {
            canBuy= true
          }

        }else{
          if( this.detail.shipping_settings.shipping_region === 1 ||
               data.address.province == this.detail.province
            ) {
               canBuy= true
            }
        }
        if(canBuy){
          this.select_payment(data)
          return
        }
        this.$store.commit("open_toast", {
          msg: " محصول در منطقه شما قابل ارسال نمی باشد",
          variant: "error",
        })
        this.$bvModal.hide('sign-form')
        return;
      }
      this.select_payment(data)
    },
    addAddress() {
      this.$bvModal.show("createAddressForm")
    },
    create_address(){
      this.$refs.createAddressForm.validate().then(async (success) => {
         if(success) {  
           try{
             this.btnAddressDisable= true
             this.laodingAddressRegister= true
             const payload= {
               data: {
                 'address':this.adressForm.address,
                 'city':this.adressForm.city,
                 'province':this.adressForm.selected,
                 'postal_code' : this.adressForm.postal_code
               },
               token: this.$cookies.get('token-buyer')
             }
            const { data }= await addressService.create_address(payload)
            await this.get_addresses()
             this.$store.commit('open_toast',{
                msg: data.message,
                variant: 'success'
              })
              this.$bvModal.hide('createAddressForm')
              authService.currentUser(this.$cookies.get('token-buyer'))
                .then((res) => {
                  if(res.status == 200){
                    localStorage.setItem('userDetail',JSON.stringify(res.data.data))
                  }
                }).catch(e =>{
                  console.log(e)
                })
           }catch(e){
               if (e.response.status === 400) this.$refs.createAddressForm.setErrors(e.response.data.data);
              this.$store.commit('open_toast',{
                msg: e.response.data.message,
                variant: 'error'
              })
           }finally{
              this.btnAddressDisable= false
              this.laodingAddressRegister= false
           }
         }else {
           return
         }

       })
    },
    async select_payment(payment){
      if(this.$cookies.get('token-buyer')){
        if(this.userDetail.first_name != this.form.first_name || this.userDetail.last_name != this.form.last_name
          || this.userDetail.first_name != this.form.postal_code
        ){
          const payload ={
            data:{
              last_name: this.form.last_name,
              first_name: this.form.first_name,
              postal_code: this.form.postal_code,
            },
            token: this.$cookies.get('token-buyer')
          }
          try{
            await userService.update(payload)
            const res= await authService.currentUser( this.$cookies.get('token-buyer'))
            localStorage.setItem('userDetail', JSON.stringify( res.data.data ))
            this.do_select_payment(payment)      
          }catch(e){
            this.$store.commit("open_toast", {
              msg: e.response.data.message,
              variant: "error",
            })
          }
        }
        return
      }
      this.do_select_payment(payment)
    },
    async do_select_payment(payment) {
      try{
        this.laodingRegister = true;
        this.btnDisable = true;
        await this.$store.dispatch("payment/select_payment", payment);
      }finally{
        this.laodingRegister = false;
        this.btnDisable = false;
    }}
  },
  computed: {
    ...mapGetters(["detail"]),
    provinces() {
      return provinces;
    },
    lang() {
      return tr();
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
.cursor-pointer{
  cursor: pointer;
}
</style>
