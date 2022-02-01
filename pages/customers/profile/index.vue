<template>
    <div class="row px-0 px-md-4">
        <div class="col">
            <div class="row pt-0 pt-md-2">
                <b-card bg-variant="light" class="w-100 bg-info mt-0 mt-md-5"
                    title="اطلاعات"
                >
                    <ValidationObserver ref="form">
                        <b-form @submit.prevent="updateDetail">
                            <b-form-group
                            label-cols-lg="12"
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
               <div class="row pt-0 pt-md-2 px-2">
                    <b-card bg-variant="light" class="w-100 bg-info mt-0 mt-md-5 font-weight-bold"
                        title="آدرس جدید"
                    >
                        <div class="bg-white py-4 px-2 px-sm-5 my-4 address">
                            <ValidationObserver ref="address_form">
                                <b-form @submit.prevent="create_address()" inline>
                                    <div class="row">
                                        <div class="col-12 col-md-6 my-1">
                                            <ValidationProvider
                                                    vid="province"
                                                    rules="required"
                                                    v-slot="{ errors, valid }"
                                                    :name="lang.label.province"
                                                    >
                                                    <div class="d-flex align-items-start">
                                                        <label class="pt-2 ml-2" for="province">استان</label>
                                                        <div class="w-100">
                                                            <b-form-select
                                                            id="province"
                                                            ref="province"
                                                            :state="errors[0]? false: valid && address_form.province != null? true: null"
                                                            :class="[
                                                            'form-control',
                                                            !address_form.province && !errors[0] ? 'pr-4' : null,
                                                            ]"
                                                            v-model="address_form.province"
                                                        >
                                                            <option :value="null">انتخاب آدرس</option>
                                                            <option
                                                            v-for="province in provinces"
                                                            :key="province.id"
                                                            :value="province.id"
                                                            v-text="province.value"
                                                            >

                                                            </option>
                                                        </b-form-select>
                                                            <b-form-invalid-feedback
                                                                class="mt-2"
                                                                id="inputLiveFeedback"
                                                                >{{ errors[0] }}</b-form-invalid-feedback
                                                            >
                                                        </div>
                                                    </div>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-12 col-md-6 my-1">
                                            <ValidationProvider
                                                vid="city"
                                                rules="required"
                                                v-slot="{ errors, valid }"
                                                :name="lang.label.city"
                                                >
                                                <div class="d-flex align-items-start">
                                                <label class="pt-2 ml-2" for="city">شهر</label>
                                                    <div class="w-100">
                                                            <b-form-input
                                                            type="text"
                                                            id="city"
                                                            v-model="address_form.city"
                                                            :placeholder="lang.label.city"
                                                            :state="errors[0]? false: valid && city != ''? true: null"
                                                        />
                                                        <b-form-invalid-feedback
                                                            class="mt-2"
                                                            id="inputLiveFeedback"
                                                            >{{ errors[0] }}</b-form-invalid-feedback
                                                        > 
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-12 col-md-6 my-1">
                                            <ValidationProvider
                                                    vid="address"
                                                    rules="required"
                                                    v-slot="{ errors, valid }"
                                                    :name="lang.label.address"
                                                    >
                                                <div class="d-flex align-items-start">
                                                <label class="pt-2 ml-2" for="address">آدرس</label>
                                                    <div class="w-100">
                                                            <b-form-input
                                                            type="text"
                                                            id="address"
                                                            v-model="address_form.address"
                                                            :placeholder="lang.label.address"
                                                            :state="errors[0]? false: valid && address != ''? true: null"
                                                        />
                                                        <b-form-invalid-feedback
                                                            class="mt-2"
                                                            id="inputLiveFeedback"
                                                            >{{ errors[0] }}</b-form-invalid-feedback
                                                        > 
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-12 col-md-6 my-1">
                                            <ValidationProvider
                                                    vid="postal_code"
                                                    rules="required|numeric|length:10"
                                                    v-slot="{ errors, valid }"
                                                    :name="lang.label.postal_code"
                                                    >
                                                <div class="d-flex align-items-start">
                                                    <label class="pt-2 ml-2" for="postal_code">کد پستی</label>
                                                    <div class="w-100">
                                                            <b-form-input
                                                            type="text"
                                                            id="postal_code"
                                                            v-model="address_form.postal_code"
                                                            :placeholder="lang.label.postal_code"
                                                            :state="errors[0]? false: valid && postal_code != ''? true: null"
                                                        />
                                                        <b-form-invalid-feedback
                                                            class="mt-2"
                                                            id="inputLiveFeedback"
                                                            >{{ errors[0] }}</b-form-invalid-feedback
                                                        > 
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-11 m-auto">
                                    <div class="row pr-5 pr-lg-4 mr-1 mr-md-0">
                                        <Xbutton
                                            is_submit
                                            class="mt-3 px-4"
                                            text="ثبت"
                                            :disabled="btnDisableRegister"
                                            variant="success"
                                        >
                                            <template #spinner>
                                            <b-spinner
                                                v-show="laodingSpinnerRegister"
                                                small
                                                class="float-left"
                                            ></b-spinner>
                                            </template>
                                        </Xbutton>
                                    </div>
                                    </div>
                                </b-form>
                            </ValidationObserver>
                        </div>
                       
                    </b-card>
                     <b-card bg-variant="light" class="w-100 bg-info mt-0 mt-md-5 font-weight-bold"
                        title="آدرس ها"
                    >
                     <Xaddress v-for="address in addresses" :key="address.id"
                        :id="address.id"
                        :address="address.address"
                        :province="address.province"
                        :city="address.city"
                        :postal_code="address.postal_code"
                        @delete_address="delete_address"
                        />
                     </b-card>
            </div>
        </div>
    </div>
</template>

<script>

import { userService } from '~/services/apiServices'
import { addressService } from '~/services/apiServices'
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { authService } from '@/services/apiServices'
import { tr } from "@/services/lang";
import { provinces } from '@/constants/Provinces'
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
                province: null,
                city: '',
                postal_code: ''
            },
            btnDisable: false,
            laodingSpinner: false,
            btnDisableRegister: false,
            laodingSpinnerRegister: false,
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
                const res= await authService.currentUser(this.$cookies.get('token-buyer'))
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
                const { data }= await addressService.get_addresses(this.$cookies.get('token-buyer'))
                this.addresses = data.data
                
            }catch(e){
                console.log(e)
            }
        },
        create_address(){
            this.$refs.address_form.validate().then(async ( success ) =>{
                if(success){
                    const payload= {
                        data: this.address_form,
                        token: this.$cookies.get('token-buyer'),
                    }
                    this.btnDisableRegister= true
                    this.laodingSpinnerRegister= true
                    try{
                        const {data}= await addressService.create_address(payload)
                        await this.get_addresses()
                        this.$store.commit('open_toast',{
                            msg: data.message,
                            variant: 'success'
                        })
                        this.address_form.province=null
                        this.address_form.address= ''
                        this.address_form.city= ''
                        this.address_form.postal_code= ''
                    }catch(e){
                        if (e.response.status === 400) this.$refs.address_form.setErrors(e.response.data.data);
                        this.$store.commit('open_toast',{
                            msg: e.response.data.message,
                            variant: 'error'
                        })
                    }finally{
                        this.btnDisableRegister= false
                        this.laodingSpinnerRegister= false
                    }
                }else{
                    return
                }
            })
        },
        delete_address(id){
            const item = this.addresses.find(address =>{
                return address.id === id
            })
            this.addresses.splice(item, 1)
        }
    }
}
</script>

<style lang="scss" scoped>
.form-control{
    width:100%;
}

label{
    width: 60px;
    text-align: right;
}

</style>