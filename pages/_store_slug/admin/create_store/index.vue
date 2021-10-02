<template>
  <div class="col" id="create_store">
    <div class="row justify-content-between p-4">
      <div>
        <span class="display-2 font-weight-bold">افزودن فروشگاه</span>
      </div>
      <div>
        <Xbutton class="px-4" text="ذخیره تغییرات"></Xbutton>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-10 mx-auto mt-1 mb-4 create_store">
        <div class="row">
          <div class="w-100 d-flex justify-content-center" id="tabs">
            <div class="col-4 text-center col-md-4 pt-2" id="t1">
              <button
                @click="select_step(1)"
                :class="[step === 1 ? 'is_active' : null, 'btn']"
              >
                ثبت درگاه
              </button>
            </div>
            <div class="col-4 text-center col-md-4 pt-2" id="t2">
              <button
                @click="select_step(2)"
                :class="[step === 2 ? 'is_active' : null, 'btn']"
              >
                اطلاعات ارسال
              </button>
            </div>
            <div class="col-4 text-center col-md-4 pt-2" id="t3">
              <button
                @click="select_step(3)"
                :class="[step === 3 ? 'is_active' : null, 'btn']"
              >
                درگاه پرداخت
              </button>
            </div>
          </div>
        </div>
        <hr class="line" />

        <div class="row">
          <!-- <transition name=""> -->
            <component :is="active_component" :data_store="'data'"> </component>
          <!-- </transition> -->
        </div>

        <hr class="line" />

        <div class="row align-items-center justify-content-between p-4">
          <div>
            <Xbutton
              :on_click="previuse_step"
              :disabled="previus_btn_status"
              class="px-4"
              text="قبلی"
            ></Xbutton>
          </div>
          <div>
            <Xbutton :on_click="next_step" class="px-4" text="بعدی"></Xbutton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XrecordGetway from "@/components/XrecordGetway";
import XinfoSend from "@/components/XinfoSend";
import Xgetway from "@/components/Xgetway";
export default {
  layout: "admin",
  data() {
    return {
      active_component: "recordgetway",
      step: 1,
    };
  },
  components: {
    recordgetway: XrecordGetway,
    infosend: XinfoSend,
    getway: Xgetway,
  },
  computed: {
    previus_btn_status() {
      if (this.step > 1) {
        return false;
      }
      return true;
    },
  },
  methods: {
    select_step(id) {
      if (id === 1) {
        this.step = 1;
        this.active_component = "recordgetway";
      } else if (id === 2) {
        this.step = 2;
        this.active_component = "infosend";
      } else if (id === 3) {
        this.step = 3;
        this.active_component = "getway";
      }
    },
    previuse_step() {
      if (this.step === 1) {
        return;
      } else if (this.step === 2) {
        this.step--;
        this.active_component = "recordgetway";
      } else if (this.step === 3) {
        this.step--;
        this.active_component = "infosend";
      }
    },
    next_step() {
      if (this.step === 3) {
        return;
      } else if (this.step === 1) {
        this.step++;
        this.active_component = "infosend";
      } else if (this.step === 2) {
        this.step++;
        this.active_component = "getway";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#create_store {
  .create_store {
    background-color: $bac_dark_color;
    border-radius: 10px;
    border: 1px solid $border_whitesmoke;

    #tabs {
      button {
        color: white;
        width: max-content;
        border-radius: 20px;
        transition: all 0.2s;
      }
      button:hover {
        background-color: $back_dark;
      }
      .is_active {
        background-color: $back_dark;
      }
    }
    .line {
      width: 100%;
      border-top: 1px solid $back_dark;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
}
</style>
