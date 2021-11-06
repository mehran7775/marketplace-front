<template>
  <div class="sign_up">
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
                :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
              />
              <div v-if="errors[0]" class="py-2 pr-2">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>نام خانوادگی</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                v-model="form.last_name"
                ref="last_name"
                type="text"
                
                :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
              />
              <div v-if="errors[0]" class="py-2 pr-2">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>شماره تلفن</label>
            <ValidationProvider rules="required|digits:11" v-slot="{ errors }">
              <input
                v-model="form.phone"
                ref="phone"
                type="text"
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
                type="text"
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
            <div
              v-if="valid_province"
              class="py-2 pr-2"
            >
              <span class="text-danger" v-text="'این فیلد الزامی است'"></span>
            </div>
          </div>
          <div class="form-group">
            <label>شهر</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                v-model="form.city"
                ref="city"
                type="text"
                :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
              />
              <div v-if="errors[0]" class="py-2 pr-2">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>آدرس</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                v-model="form.address"
                ref="city"
                type="text"
                :class="[errors[0] ? 'xborder-danger' : null, 'form-control']"
              />
              <div v-if="errors[0]" class="py-2 pr-2">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>کلمه عبور</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                v-model="form.password"
                ref="city"
                type="password"
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
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { provinces } from "@/constants/Provinces";
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
    async do_register() {
      this.validate_province();
      this.$refs.validationObserver.validate().then((success) => {
        if (success && !this.valid_province) {
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
          this.$nuxt.context.$axios
            .post("customer/register", data)
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


<style lang="scss" scoped>
</style>
