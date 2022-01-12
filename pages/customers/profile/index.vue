<template>
    <div class="row px-0 px-md-4">
        <div class="col">
            <div class="row pt-0 pt-md-2">
                <b-card bg-variant="light" class="w-100 bg-info mt-0 mt-md-5">
                    <b-form-group
                    label-cols-lg="12"
                    label="اطلاعات کاربری شما"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
                    >
                     <div class="p-3">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4">
                                <b-form-group
                                label="نام :"
                                label-for="first_name"
                                label-align-sm="right"
                                
                                >
                                    <b-form-input
                                    v-model="detail.first_name"
                                    class="rounded-0" id="first_name"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <b-form-group
                                label="نام خانوادگی :"
                                label-for="last_name"
                                label-align-sm="right"
                                
                                >
                                    <b-form-input
                                    v-model="detail.last_name"
                                    class="rounded-0" id="last_name"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <b-form-group
                                label="شماره تلفن :"
                                label-for="phone"
                                label-align-sm="right"
                                 
                                >
                                <b-form-input v-model="detail.phone" 
                                class="rounded-0" id="phone"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <b-form-group
                                label="ایمیل :"
                                label-for="email"
                                label-align-sm="right"
                                  
                                >
                                    <b-form-input type="email"  v-model="detail.email" 
                                    class="rounded-0" id="email"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <b-form-group
                                label="استان :"
                                label-for="province"
                                label-align-sm="right"
                                  
                                >
                                    <b-form-input  v-model="detail.province" class="rounded-0" id="province">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <b-form-group
                                label="شهر :"
                                label-for="city"
                                label-align-sm="right"
                                  
                                >
                                    <b-form-input  v-model="detail.city" 
                                    class="rounded-0" id="city"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <b-form-group
                                label="آدرس :"
                                label-for="address"
                                label-align-sm="right"
                                  
                                >
                                    <b-form-input  v-model="detail.address" 
                                    class="rounded-0" id="address"></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                     </div>
                    </b-form-group>
                    <Xbutton
                    :on_click="()=> updateDetail()"
                    text="ثبت تغییرات"
                    variant="success"
                    :disable="btnDisable"
                    class="mr-3"
                    >
                        <template #spinner>
                            <b-spinner v-show="laodingSpinner" small ></b-spinner>
                        </template>            
                    </Xbutton>
                </b-card>
                 <!-- <b-card bg-variant="light" class="w-100 bg-info mt-0 mt-md-5">
                    <b-form-group
                    label-cols-lg="12"
                    label="تغییر رمز عبور"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
                    >
                     <div class="p-3">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4">
                                <b-form-group
                                label="نام :"
                                label-for="first_name"
                                label-align-sm="right"
                                
                                >
                                    <b-form-input
                                    v-model="detail.first_name"
                                    class="rounded-0" id="first_name"></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                     </div>
                    </b-form-group>
                    <Xbutton
                    :on_click="()=> triggerChangePassword()"
                    text="ثبت تغییرات"
                    variant="success"
                    :disable="btnDisable"
                    class="mr-3"
                    >
                        <template #spinner>
                            <b-spinner v-show="laodingSpinner" small ></b-spinner>
                        </template>            
                    </Xbutton>
                </b-card> -->
            </div>
        </div>
    </div>
</template>

<script>

import { userService } from '~/services/apiServices'

export default {
    layout:'panel-customer',
    data() {
        return {
            detail: {
                first_name:'',
                last_name:'',
                phone:'',
                email:'',
                province:'',
                city:'',
                address:'',
            },
            btnDisable:false,
            laodingSpinner:false,
        }
    },
    mounted () {
        if(localStorage.getItem('userDetail')){
            const info = JSON.parse(localStorage.getItem('userDetail'))
            this.detail.first_name = info.first_name
            this.detail.last_name = info.last_name
            this.detail.phone = info.phone
            this.detail.email = info.email
            this.detail.province = info.addresses[0].province
            this.detail.city = info.addresses[0].city
            this.detail.address = info.addresses[0].address
            
        }
    },
    methods:{
        async updateDetail(){
            const payload = {
                data: this.detail,
                token: this.$cookies.get('token-buyer')
            }
           try{
               const {data} = await userService.updateCustomer(payload)
               console.log(data)
                this.$store.commit("open_toast", {
                    msg: data.message,
                    variant: "success",
                });
           }catch(e){
                this.$store.commit("open_toast", {
                    msg: e.response.data.message,
                    variant: "error",
                });
           }
          
        }
    }
}
</script>

<style lang="scss" scoped>

</style>