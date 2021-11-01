<template>
  <div class="row">
    <MoleculesXheader
      :logo="detail.logo"
      :fa_name="detail.fa_name"
      :address="detail.address"
      :email="detail.email"
    ></MoleculesXheader>
    <div class="container">
      <div class="row">
        <div class="col-10 m-auto col-md-7">
          <div class="row pt-5">
            <h2>تکمیل اطلاعات</h2>
          </div>
          <div class="row text-right">
            <ValidationObserver ref="validationObserver">
              <Xform
                :sub_form="select_way_payment"
                legend="اطلاعات خودرا وارد کنید"
              >
                <template #content>
                  <div class="form-group px-3 pt-3">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="d-flex w-100 justify-content-between">
                            <div class="naming">
                              <ValidationProvider
                                :rules="
                                  detail.options.name === 1 ? 'required' : null
                                "
                                v-slot="{ errors }"
                              >
                                <input
                                  :class="[
                                    errors[0] ? 'xborder-danger' : null,
                                    'form-control',
                                  ]"
                                  type="text"
                                  name="fname"
                                  v-model="form.first_name"
                                  placeholder="نام"
                                />
                                <div v-if="errors[0]" class="py-2 pr-2">
                                  <span class="text-danger">{{
                                    errors[0]
                                  }}</span>
                                </div>
                              </ValidationProvider>
                            </div>
                            <div class="naming">
                              <ValidationProvider
                                :rules="
                                  detail.options.name === 1 ? 'required' : null
                                "
                                v-slot="{ errors }"
                              >
                                <input
                                  :class="[
                                    errors[0] ? 'xborder-danger' : null,
                                    'form-control',
                                  ]"
                                  type="text"
                                  name="lname"
                                  v-model="form.last_name"
                                  placeholder="نام خانوادگی"
                                />
                                <div v-if="errors[0]" class="py-2 pr-2">
                                  <span class="text-danger">{{
                                    errors[0]
                                  }}</span>
                                </div>
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mt-2">
                        <div class="row">
                          <div class="w-100">
                            <ValidationProvider
                              :rules="
                                detail.options.email === 1
                                  ? 'required'
                                  : null | 'email'
                              "
                              v-slot="{ errors }"
                            >
                              <input
                                :class="[
                                  errors[0] ? 'xborder-danger' : null,
                                  'form-control',
                                ]"
                                type="email"
                                name="email"
                                v-model="form.email"
                                placeholder="ایمیل"
                              />
                              <div v-if="errors[0]" class="py-2 pr-2">
                                <span class="text-danger">{{ errors[0] }}</span>
                              </div>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 mt-2">
                        <div class="row">
                          <div class="w-100">
                            <ValidationProvider
                              :rules="
                                detail.options.phone === 1
                                  ? 'required'
                                  : null | 'digits'
                              "
                              v-slot="{ errors }"
                            >
                              <input
                                :class="[
                                  errors[0] ? 'xborder-danger' : null,
                                  'form-control',
                                ]"
                                type="text"
                                id="phone"
                                name="phone"
                                ref="phone"
                                placeholder="موبایل"
                                v-model="form.phone"
                                maxlength="11"
                              />
                              <div v-if="errors[0]" class="py-2 pr-2">
                                <span class="text-danger">{{ errors[0] }}</span>
                              </div>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mt-2">
                        <div class="row">
                          <div class="d-flex w-100 justify-content-between">
                            <div class="naming">
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
                                <span
                                  class="text-danger"
                                  v-text="'این فیلد الزامی است'"
                                ></span>
                              </div>
                            </div>
                            <div class="naming">
                              <ValidationProvider
                                :rules="
                                  detail.options.address === 1
                                    ? 'required'
                                    : null
                                "
                                v-slot="{ errors }"
                              >
                                <input
                                  :class="[
                                    errors[0] ? 'xborder-danger' : null,
                                    'form-control',
                                  ]"
                                  type="text"
                                  v-model="form.city"
                                  placeholder="شهر"
                                />
                                <div v-if="errors[0]" class="py-2 pr-2">
                                  <span class="text-danger">{{
                                    errors[0]
                                  }}</span>
                                </div>
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mt-2">
                        <div class="row">
                          <div class="w-100">
                            <ValidationProvider
                              :rules="
                                detail.options.address === 1 ? 'required' : null
                              "
                              v-slot="{ errors }"
                            >
                              <input
                                :class="[
                                  errors[0] ? 'xborder-danger' : null,
                                  'form-control',
                                ]"
                                type="text"
                                v-model="form.address"
                                placeholder="آدرس"
                              />
                              <div v-if="errors[0]" class="py-2 pr-2">
                                <span class="text-danger">{{ errors[0] }}</span>
                              </div>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <hr class="dash w-100" />
                    </div>
                    <div class="row">
                      <Xbutton
                        is_submit
                        class="px-5 m-auto"
                        text="انتخاب روش پرداخت"
                      ></Xbutton>
                    </div>
                  </div>
                </template>
              </Xform>
            </ValidationObserver>
          </div>
        </div>
      </div>
      <template>
        <MoleculesXmodal title="انتخاب روش پرداخت">
          <template #content-modal>
            <div class="row">
              <div v-for="getway in getways" :key="getway.id" class="col-12">
                <div class="getways">
                  <input
                    class="mr-4"
                    type="radio"
                    name="getway"
                    :value="'getway' + getway.id"
                    :ref="'getway' + getway.id"
                    checked
                  />
                  <span class="mr-3" v-text="getway.title"></span>
                </div>
              </div>
              <div class="col-12 text-center">
                <Xbutton
                  :on_click="do_payment"
                  class="icon-getway"
                  text="پرداخت"
                ></Xbutton>
              </div>
            </div>
          </template>
        </MoleculesXmodal>
      </template>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { provinces } from "@/constants/Provinces";

export default {
  layout: "index",
  middleware: "guest",
  head() {
    return {
      title: `${this.detail.fa_name} -صفحه تکمیل اطلاعات`,
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
      },
      valid_province: null,
    };
  },
  async asyncData({ error, route, $axios, store }) {
    try {
      const res1 = await $axios.get(`/store/${route.params.store_slug}`);
      store.commit("payments/set_getways", res1.data.data.gateways);
      store.commit("stores/set_id", res1.data.data.id);
      return {
        detail: res1.data.data,
      };
    } catch (e) {
      console.log("33", e);
      if (e.response) {
        error({
          statusCode: e.response.status,
          message: e.response.data.message,
        });
      }
      error({
        statusCode: 500,
        message: e
      });
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    select_way_payment() {
      this.validate_province();
      this.$refs.validationObserver.validate().then((success) => {
        if (success && !this.valid_province) {
          const data = {
            store_id: this.$store.state.stores.id,
            name: this.form.first_name + " " + this.form.last_name,
            email: this.form.email,
            address: {
              province: this.$refs.province.value,
              city: this.form.city,
              address: this.form.address,
            },
            phone: this.form.phone,
          };
          this.$store.dispatch("payments/select_way_payment", data);
        } else {
          return;
        }
      });
    },
    do_payment() {
      let getway = null;
      if (this.$refs.getway1.checked) {
        getway = 1;
      } else if (this.$refs.getway2.checked) {
        getway = 2;
      } else if (this.$refs.getway3.checked) {
        getway = 3;
      } else {
        getway = "null";
      }

      this.$store.dispatch("payments/do_payment", {
        getway_id: getway,
      });
    },
    validate_province() {
      if (this.detail.options.address === 1) {
        const e = this.$refs.province.value;
        e !== "" ? (this.valid_province = false) : (this.valid_province = true);
      }
    },
  },
  computed: {
    getways() {
      return this.$store.state.payments.getways;
    },
    provinces() {
      return provinces;
    },
  },
};
</script>

<style scoped lang="scss">
h2 {
  color: $success;
}
.naming {
  width: 48%;
}

.dash {
  border-top: 1px dashed $success;
}
.getways {
  background-color: whitesmoke;
  border-radius: 10px;
  height: 50px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}
.icon-getway {
  padding-right: 6rem;
  padding-left: 6rem;
}
</style>
