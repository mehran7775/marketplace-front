<template>
    <div class="row px-0 px-md-4">
        <div class="col">
            <div class="row pt-0 pt-md-2">
                <b-card bg-variant="light" class="w-100 bg-info mt-0 mt-md-5">
                    <ValidationObserver ref="form">
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
                                        <div v-text="detail.phone" 
                                         class="form-control " id="phone"></div>
                                        </b-form-group>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <b-form-group
                                        label="ایمیل :"
                                        label-for="email"
                                        label-align-sm="right"
                                            
                                        >
                                         <div v-text="detail.email" 
                                         class="form-control " id="email"></div>
                                        </b-form-group>
                                    </div>
                                 
                                    <!-- <div class="col-12 col-sm-6 col-md-4">
                                        <b-form-group
                                        label="آدرس :"
                                        label-for="address"
                                        label-align-sm="right"
                                            
                                        >
                                            <b-form-input  v-model="detail.address" 
                                            class="rounded-0" id="address"></b-form-input>
                                        </b-form-group>
                                    </div> -->
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
                    </ValidationObserver>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>

import { userService } from '~/services/apiServices'
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { authService } from '@/services/apiServices'
import { tr } from "@/services/lang";
export default {
    layout:'panel-customer',
    components:{
        ValidationProvider, ValidationObserver
    },
    computed: {
        provinces() {
        return provinces;
        },
        lang(){
        return tr()
        }
    },
    data() {
        return {
            detail: {
                first_name:'',
                last_name:'',
                phone:'',
                email:'',
                // province:'',
                // city:'',
                // address:'',
            },
            btnDisable:false,
            laodingSpinner:false,
        }
    },
    async mounted () {
        this.setDetail()
    },
    methods:{
        async setDetail(){
        try{
            const {data}= await authService.currentUser( this.$cookies.get('token-buyer'))
            this.detail.first_name = data.data.first_name
            this.detail.last_name = data.data.last_name
            this.detail.phone = data.data.phone
            this.detail.email = data.data.email
            this.detail.id = data.data.id
        }catch(e){
            this.$store.commit('open_toast',{
                msg: e.response.data.message,
                variant:'error'
            })
        }
          
        },
        async updateDetail(){
            const payload = {
                data: this.detail,
                token: this.$cookies.get('token-buyer')
            }
           try{
               this.btnDisable = true
               this.laodingSpinner = true
                const {data} = await userService.update(payload)
                this.setDetail()
                this.$store.commit("open_toast", {
                    msg: data.message,
                    variant: "success",
                });
           }catch(e){
                this.$store.commit("open_toast", {
                    msg: e.response.data.message,
                    variant: "error",
                });
           }finally{
               this.btnDisable = false
               this.laodingSpinner = false
           }
          
        }
    }
}
</script>

<style lang="scss" scoped>

</style>