<template>
    <div class="row px-0 px-md-4">
        <div class="col">
            <div class="row pt-0 pt-md-2">
                <b-card bg-variant="light" class="w-100 bg-info mt-0 mt-md-5">
                    <ValidationObserver ref="form">
                        <b-form @submit.prevent="updateDetail">
                            <b-form-group
                            label-cols-lg="12"
                            label="اطلاعات"
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
                                                v-model="form.first_name"
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
                                                v-model="form.last_name"
                                                class="rounded-0" id="last_name"></b-form-input>
                                            </b-form-group>
                                        </div>
                                        
                                        <div class="col-12 col-sm-6 col-md-4">
                                            <b-form-group
                                            label="ایمیل :"
                                            label-for="email"
                                            label-align-sm="right"
                                            >
                                                <div v-text="form.email" 
                                                class="form-control " id="email"></div>
                                            </b-form-group>
                                        </div>
                                        
                                    </div>
                                </div>
                            </b-form-group>
                            <Xbutton
                            is_submit
                            text="ثبت تغییرات"
                            variant="success"
                            :disable="btnDisable"
                            class="mr-3"
                            >
                                <template #spinner>
                                    <b-spinner v-show="laodingSpinner" small ></b-spinner>
                                </template>            
                            </Xbutton>
                        </b-form>
                      
                    </ValidationObserver>
                </b-card>
            </div>
               <div class="row pt-0 pt-md-2">
                <b-card bg-variant="light" class="w-100 bg-info mt-0 mt-md-5">
                    <ValidationObserver ref="form">
                        <b-form >
                            <b-form-group
                            label-cols-lg="12"
                            label="آدرس ها"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0"
                            >
                              {{addresses}}
                            </b-form-group>
                            <Xbutton
                            is_submit
                            text="ثبت تغییرات"
                            variant="success"
                            :disable="btnDisable"
                            class="mr-3"
                            >
                                <template #spinner>
                                    <b-spinner v-show="laodingSpinner" small ></b-spinner>
                                </template>            
                            </Xbutton>
                        </b-form>
                      
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
        },
    },
    data() {
        return {
            form:{},
            address_form: {
                address: '',
                province: '',
                city: '',
                postal_code: ''
            },
            btnDisable:false,
            laodingSpinner:false,
            addresses: []
        }
    },
    async created(){
        if(localStorage.getItem('userDetail')){
            await this.set_detail()
            await this.get_addresses()

        }
    },
    methods:{
        set_detail(){
            this.form= JSON.parse(localStorage.getItem('userDetail'))
        },
        async updateDetail(){
            const payload = {
                data: this.form,
                token: this.$cookies.get('token-buyer')
            }
           try{
               this.btnDisable = true
               this.laodingSpinner = true
                const {data} = await userService.update(payload)
                const res= await authService.currentUser( this.$cookies.get('token-buyer'))
                localStorage.setItem('userDetail',JSON.stringify( res.data.data ))
                this.$store.commit("open_toast", {
                    msg: data.message,
                    variant: "success",
                });
                 this.set_detail()
           }catch(e){
                this.$store.commit("open_toast", {
                    msg: e.response.data.message,
                    variant: "error",
                });
           }finally{
               this.btnDisable = false
               this.laodingSpinner = false
           }
          
        },
        async get_addresses() {
            try{
                const { data }= await userService.get_addresses(this.$cookies.get('token-buyer'))
                this.addresses = data.data
                
            }catch(e){
                console.log(e)
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>