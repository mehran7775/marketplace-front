<template>
  <div class="verify-login">
    <div class="w-75 p-5 mx-auto mt-5">
      <div class="form-group">
        <label class="font-weight-bold">کد تایید را وارد کنید</label>
        <input type="text" name="code" class="form-control" ref="code" />
        <button class="btn btn-success mt-2 mr-2" @click="verify_code()">
          ارسال
        </button>
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
import { mapState } from "vuex";
export default {
  middleware: "guest",
  data() {
    return {
      errors: [],
      error: "",
    };
  },
  computed: mapState({
    phone_number: (state) => state.users.phone_number,
  }),
  methods: {
    async verify_code() {
      const data = {
        phone: this.phone_number,
        code: this.$refs.code.value,
      };
      try {
        this.errors = [];
        this.error = "";
        const res = await this.$nuxt.context.$axios.post(
          "/customer/verify",
          data
        );
        if (res.status === 200) {
          this.$cookies.set("token-buyer", res.data.data.api.token);
          this.$router.replace("/");
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