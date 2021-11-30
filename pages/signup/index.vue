<template>
  <div class="sign-up text-right">
    <div dir="rtl">
      <ValidationObserver ref="validationObserver" >
        <Xform :sub_form="do_register">
          <template #content>
            <div class="form-group">
              <label>نام</label>
              <ValidationProvider vid="first_name" rules="required|min:3" v-slot="{ errors }">
                <input
                  v-model="form.first_name"
                  ref="first_name"
                  type="text"
                  id="نام"
                  placeholder="مثال: علی"
                  :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
                />
                <div v-if="errors[0]" class="py-2 pr-2">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label>نام خانوادگی</label>
              <ValidationProvider vid="last_name" rules="required|min:3" v-slot="{ errors }">
                <input
                  v-model="form.last_name"
                  ref="last_name"
                  id="نام خانوادگی"
                  type="text"
                  placeholder="مثال: ابراهیمی"
                  :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
                />
                <div v-if="errors[0]" class="py-2 pr-2">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label>شماره تلفن</label>
              <ValidationProvider vid="phone" rules="required|regPhone" v-slot="{ errors }">
                <input
                  v-model="form.phone"
                  ref="phone"
                  type="text"
                  id="شماره تلفن"
                  maxlength="11"
                  placeholder="مثال: 09xxxxxxx23"
                  :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
                />
                <div v-if="errors[0]" class="py-2 pr-2">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label>ایمیل</label>
              <ValidationProvider vid="email" rules="required|email" v-slot="{ errors }">
                <input
                  v-model="form.email"
                  ref="email"
                  name="ایمیل
                "
                  type="text"
                  placeholder="example@gmail.com"
                  :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
                />
                <div v-if="errors[0]" class="py-2 pr-2">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
                 
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label>استان</label>
              <select
                :class="[
                  valid_province ? 'xborder-danger' : null,
                  'form-control form-control-sm',
                ]"
                ref="province"
                @change="validate_province"
              >
                <option value="">انتخاب استان</option>
                <option
                  v-for="province in provinces"
                  :key="province.id"
                  :value="province.id"
                  v-text="province.value"
                ></option>
              </select>
              <div v-if="valid_province" class="py-2 pr-2">
                <span class="text-danger" v-text="'این فیلد الزامی است'"></span>
              </div>
            </div>
            <div class="form-group">
              <label>شهر</label>
              <ValidationProvider vid="city" rules="required|min:2" v-slot="{ errors }">
                <input
                  v-model="form.city"
                  ref="city"
                  type="text"
                  id="شهر"
                  placeholder="مثال: تهران"
                  :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
                />
                <div v-if="errors[0]" class="py-2 pr-2">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label>آدرس</label>
              <ValidationProvider vid="address" rules="required|min:10" v-slot="{ errors }">
                <input
                  v-model="form.address"
                  ref="address"
                  type="text"
                  id="آدرس"
                  placeholder="مثال: تهران-میدان انقلاب-خیابان آزادی-پلاک30"
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
                vid="password"
              >
                <input
                  v-model="form.password"
                  ref="city"
                  type="password"
                  id="کلمه عبور"
                  maxlength="25"
                  placeholder="مثال: 123456"
                  :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
                />
                <div v-if="errors[0]" class="py-2 pr-2">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
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
      },
      valid_province: null,
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
      this.validate_province();
      this.$refs.validationObserver.validate().then((res) => {
        if (res && !this.valid_province) {
          this.btnDisable= true
          this.laodingLogin= true
          const data = {
            first_name: this.form.first_name,
            last_name: this.form.last_name,
            email: this.form.email,
            phone: this.form.phone,
            province: this.$refs.province.value,
            city: this.form.city,
            password2: this.form.password,
            address: this.form.address,
          };
            authService.registerCustomer(data)
            .then((res) => {
              this.btnDisable= false
              this.laodingLogin= false
              this.$store.commit("user/set_phone_number", data.phone, {
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
              this.btnDisable= false
              this.laodingLogin= false
              if (e.response.data.status === "error") {
                  document.$refs.validationObserver.setErrors(e.response.data.data);
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
            });
        } else {
          return;
        }
      });
    },
    validate_province() {
      const e = this.$refs.province.value;
      e !== "" ? (this.valid_province = false) : (this.valid_province = true);
    },
  },
  computed: {
    provinces() {
      return provinces;
    },
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
}
</style>
