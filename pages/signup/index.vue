<template>
  <div class="sign_up">
    <Xform>
      <template #content>
        <div class="form-group">
          <label>شماره تلفن</label>
          <input
            v-model="form.phone"
            ref="phone"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>ایمیل</label>
          <input
            v-model="form.email"
            ref="email"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>استان</label>
          <input
            v-model="form.province"
            ref="province"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>شهر</label>
          <input
            v-model="form.city"
            ref="city"
            type="text"
            class="form-control"
          />
        </div>
          <div class="form-group">
              <label>آدرس</label>
              <input
                  v-model="form.address"
                  ref="city"
                  type="text"
                  class="form-control"
              />
          </div>
          <div class="form-group">
              <label>کلمه عبور</label>
              <input
                  v-model="form.password"
                  ref="city"
                  type="text"
                  class="form-control"
              />
          </div>
          <div class="form-group">
              <label>تکرار کلمه عبور</label>
              <input
                  v-model="re_password"
                  ref="city"
                  type="text"
                  class="form-control"
              />
          </div>

        <Xbutton
          :on_click="do_register"
          class="btn-sign m-auto"
          text="ثبت نام"
        ></Xbutton>
        <div class="form-group"></div>
      </template>
    </Xform>
  </div>
</template>

<script>
import api from "~/services/api";

export default {
  layout: "sign",
  data() {
    return {
      re_password : "" ,
      form: {
        phone: "",
        password: "",
        email: "",
        province: "",
        city: "",
        address: "",
      },
    };
  },
  methods:{
      validate(){
          if (this.form.phone == ""){
              return  "تلفن همراه الزامی است"
          }
          if (this.form.email == ""){
              return  "ایمیل الزامی است"
          }
          if (this.form.password == ""){
              return  "کلمه عبور الزامی است"
          }
          /*if (this.form.province == ""){
              return  "استان الزامی است"
          }*/
          /*if (this.form.city == ""){
              return  "شهر الزامی است"
          }*/
          /*if (this.form.address == ""){
              return  "آدرس الزامی است"
          }*/
          return true
      },
      do_register(){
          if (this.validate() !== true){
              alert(this.validate())
          }
          let form_data = new FormData();
          for (let key in Object.keys(this.form)) {
              key = Object.keys(this.form)[key]
              if (this.form[key] !== ""){
                  form_data.append(key, this.form[key]);
              }
          }
          if (this.re_password === this.form.password){
              api.post('customer/register' , form_data)
                  .then(response => {
                      alert(response.data.message)
                  }).catch(({response}) => {
                  alert(response.data.data[Object.keys(response.data.data)[0]])
              })
          }else {
              alert('کلمه عبور منطبق نیست')
          }

      }
  }
};
</script>


<style lang="scss" scoped>
</style>
