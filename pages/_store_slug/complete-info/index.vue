<template>
  <div class="row">
    <div class="container body-hv-fit">
      <div class="row">
        <div class="col-10 m-auto col-md-7">
          <div class="row pt-5">
            <h4 class="font-weight-bold" v-text="lang.label.completeInfo"></h4>
          </div>
          <div class="row text-right">
            <ValidationObserver ref="completeInfoForm">
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
                               <ValidationProvider vid="province" :name="lang.label.province"
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
    </div>   
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { provinces } from "@/constants/Provinces";
import { storeService } from "@/services/apiServices"
import { tr } from "@/services/lang"
import { mapGetters } from 'vuex'
export default {
  layout: "index",
  middleware: "guest",
  head() {
    return {
      title: `${this.detail.fa_name} - تکمیل اطلاعات`,
      // meta:[
      //    {
      //        hid:"description",
      //        name:"description",
      //        content:""
      //    }
      // ]
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
        selected:null
      },
      laodingRegister:false,
      btnDisable:false,
    };
  },
  watch:{
    errorsApi(){
      this.$refs.completeInfoForm.setErrors(this.errorsApi)
    }
  },
  created(){
    this.$store.commit('user/setToState',{
      name:'errorsApi',
      data:''
    })
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    doValidate(){
      this.$refs.completeInfoForm.validate().then((success) => {
        if (success) {
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
        } else {
          return
        }
      })     
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
      const res=this.$store.dispatch("payment/select_payment", data)
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
    ...mapGetters("user",["errorsApi"]),
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
