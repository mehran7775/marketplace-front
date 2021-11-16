<template>
  <div class="sign-up text-right">
    <div dir="rtl">
      <ValidationObserver ref="validationObserver">
        <Xform :sub_form="do_register">
          <template #content>
            <div class="form-group">
              <label>نام</label>
              <ValidationProvider rules="required|min:3" v-slot="{ errors }">
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
              <ValidationProvider rules="required|min:3" v-slot="{ errors }">
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
              <ValidationProvider rules="required|regPhone" v-slot="{ errors }">
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
              <ValidationProvider rules="required|email" v-slot="{ errors }">
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
              <ValidationProvider rules="required|min:2" v-slot="{ errors }">
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
              <ValidationProvider rules="required|min:10" v-slot="{ errors }">
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
            ></Xbutton>
            <div class="form-group"></div>
          </template>
        </Xform>
      </ValidationObserver>
      <div v-if="errors" class="bg-danger text-white" v-html="errors"></div>
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
      errors: null,
      valid_province: null,
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
          const data = {
            first_name: this.form.first_name,
            last_name: this.form.last_name,
            email: this.form.email,
            phone: this.form.phone,
            province: this.$refs.province.value,
            city: this.form.city,
            password: this.form.password,
            address: this.form.address,
          };
            authService.registerCustomer(data)
            .then((res) => {
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
              if (e.response.data.status === "error") {
                this.$store.commit(
                  "open_toast",
                  {
                    msg: e.response.data.message,
                    variant: "error",
                  },
                  { root: true }
                );
                this.errors = e.response.data.data;
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
  max-width: 350px;
  min-width: 330px;
  overflow-y: auto;
  height: 90vh;
  direction: ltr;
}
</style>
