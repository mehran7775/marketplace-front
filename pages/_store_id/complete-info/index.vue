<template>
  <div class="container">
    <div class="row">
      <div class="col-10 m-auto col-md-7">
        <div class="row pt-5">
          <h1>تکمیل اطلاعات</h1>
        </div>
        <div class="row text-right">
          <Xform
            :sub_form="select_way_payment"
            legend="اطلاعات خودرا وارد کنید"
          >
            <template #content>
              <div class="form-group px-3 pt-3">
                <!-- <ValidationProvider rules="required|alpha" v-slot="{ errors }"> -->
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="d-flex w-100 justify-content-between">
                        <div class="naming">
                          <input
                            class="form-control"
                            type="text"
                            id="fname"
                            name="fname"
                            ref="fname"
                            placeholder="نام"
                          />
                        </div>
                        <div class="naming">
                          <input
                            class="form-control"
                            type="text"
                            id="lname"
                            name="lname"
                            ref="lname"
                            placeholder="نام خانوادگی"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mt-2">
                    <div class="row">
                      <div class="w-100">
                        <input
                          class="form-control"
                          type="email"
                          id="email"
                          name="email"
                          ref="email"
                          placeholder="ایمیل"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mt-2">
                    <div class="row">
                      <div class="w-100">
                        <input
                          class="form-control"
                          type="text"
                          id="phone"
                          name="phone"
                          ref="phone"
                          placeholder="موبایل"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-12 mt-2">
                    <div class="row">
                      <div class="d-flex w-100 justify-content-between">
                        <div class="naming">
                          <input
                            class="form-control"
                            type="text"
                            id="province"
                            name="province"
                            ref="province"
                            placeholder="استان"
                          />
                        </div>
                        <div class="naming">
                          <input
                            class="form-control"
                            type="text"
                            id="city"
                            name="city"
                            ref="city"
                            placeholder="شهر"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mt-2">
                    <div class="row">
                      <div class="w-100">
                        <input
                          class="form-control"
                          type="text"
                          id="address"
                          name="address"
                          ref="address"
                          placeholder="آدرس"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="row">
                 
                </div> -->
                <div class="row mt-2">
                  <hr class="dash w-100" />
                </div>
                <!-- <button v-b-modal.modal-prevent-closing>Open Modal</button> -->
                <div class="row">
                  <Xbutton
                    is_submit
                    class="px-5 m-auto"
                    text="انتخاب روش پرداخت"
                  ></Xbutton>
                </div>
                <!-- <input type="text" v-model="form.fname" /> -->
                <div>
                  <!-- <span>{{ errors[0] }}</span> -->
                </div>
                <!-- </ValidationProvider> -->
              </div>
            </template>
          </Xform>
        </div>
      </div>
    </div>
    <template>
      <MoleculesXmodal>
        <template #content-modal>
          <div class="row">
            <div class="col-12">
              <div class="getways">
                <input
                  class="mr-4"
                  type="radio"
                  name="getway"
                  value="pardakhtyari_pay"
                  ref="pardakhtyari_pay"
                  checked
                />
                <span class="mr-3">درگاه پرداخت یاری پی استار</span>
              </div>
            </div>
            <div class="col-12">
              <div class="getways">
                <input
                  class="mr-4"
                  type="radio"
                  name="getway"
                  value="cart-to-cart-pay"
                  ref="cart_to_cart_pay"
                />
                <span class="mr-3">درگاه کارت به کارت پی استار</span>
              </div>
            </div>
            <div class="col-12">
              <div class="getways">
                <input
                  class="mr-4"
                  type="radio"
                  name="getway"
                  value="direct-pay"
                  ref="direct_pay"
                />
                <span class="mr-3">درگاه مستقیم پی استار</span>
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
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  layout: "index",
  head() {
    return {
      title: "صفحه تکمیل اطلاعات",
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
        fname: "",
      },
    };
  },
  components: {
    ValidationProvider,
  },
  methods: {
    select_way_payment() {
      const data_user = {
        name: this.$refs.fname.value + " " + this.$refs.lname.value,
        email: this.$refs.email.value,
        address: {
          province: this.$refs.province.value,
          city: this.$refs.city.value,
          address:this.$refs.address.value
        },
        phone: this.$refs.phone.value,
      };
      const items = JSON.parse(localStorage.getItem("cartItems"));
      const items_second = [];
      items.forEach((element) => {
        items_second.push({
          id: element.id,
          quantity: element.count,
        });
      });
      const items_end = {
        store: this.$route.params.store_id,
        products: items_second,
      };
      this.$bvModal.show("modal-prevent-closing");
      //   this.$store.dispatch("payment/select_way_payment", [data_user, items_end]);
    },
    do_payment() {
      // console.log(this.$refs.pardakhtyari_pay.checked)
      let getway = "";
      if (this.$refs.pardakhtyari_pay.checked) {
        getway = this.$refs.pardakhtyari_pay.value;
      } else if (this.$refs.cart_to_cart_pay.checked) {
        getway = this.$refs.cart_to_cart_pay.value;
      } else if (this.$refs.direct_pay.checked) {
        getway = this.$refs.direct_pay.value;
      } else {
        getway = "null";
      }
      console.log(getway);
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
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
