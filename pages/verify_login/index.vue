<template>
  <div class="verify-login">
    <div class="w-75 p-5 mx-auto mt-5">
      <div class="form-group">
        <label class="font-weight-bold">کد تایید را وارد کنید</label>
        <input type="text" name="code" class="form-control" ref="code" />
        <Xbutton text='ارسال'  :on_click="()=> verify_code()"
        class="btn btn-success mt-2 mr-2"
        :disabled="btnDisable"
         >
          <template #spinner>
              <b-spinner v-show="laodingSpinner" small ></b-spinner>
          </template>   
         </Xbutton>
        <div v-if="errors.length > 0" class="text-center pt-3">
          <p
            v-for="error in errors"
            :key="error"
            v-text="error"
            class="text-danger"
          ></p>
        </div>
        <div class="text-center pt-3">
          <p v-if="error" v-text="error" class="text-danger"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authService } from '@/services/apiServices'
import { mapState } from "vuex";
export default {
  middleware: "guest",
  data() {
    return {
      errors: [],
      error: "",
      btnDisable: false,
      laodingSpinner: false

    };
  },
  computed: mapState({
    phone_number: (state) => state.user.phone_number,
  }),
  methods: {
    async verify_code() {
      const data = {
        phone: this.$route.query.phone_number,
        code: this.$refs.code.value,
      };
      try {
        this.errors = [];
        this.error = "";
        this.btnDisable= true
        this.laodingSpinner= true
        const res= await authService.verifyLogin(data)
        console.log(res)
        if (res.status === 200) {
          this.$cookies.set("token-buyer", res.data.data.api.token);
          const res_current= await authService.currentUser( res.data.data.api.token )
          if(res_current.status == 200){
            localStorage.setItem('userDetail',JSON.stringify(res_current.data.data))
          }
          this.btnDisable= false
          this.laodingSpinner= false
          this.$router.replace("/")
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
        this.btnDisable= false
        this.laodingSpinner= false
        if (e.response.data.status === "error") {
          Object.keys(e.response.data.data).forEach((element) => {
            this.errors.push(e.response.data.data[element][0]);
          });
        } else {
          this.error = e.response.data.message;
        }
      }
    },
  },
};
</script>

<style scoped>
</style>