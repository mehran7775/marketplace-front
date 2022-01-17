<template>
    <div class="row">
        <div class="col-12 p-5">
            <div class="card mt-2">
                <div class="card-body" v-if="user">
                    <div class="pt-2 mb-4"><h5 class="font-weight-bold">جزئیات مشتری</h5></div>
                    <ValidationObserver ref="formCustomer">
                        <b-form-row>
                            <b-col sm="12" md="6">
                                <ValidationProvider vid="first_name" name="نام" rules="required"  v-slot="{ valid, errors }">
                                    <b-form-group label="نام">
                                        <b-form-input v-model="user.first_name"
                                        :state="errors[0] ? false : (valid ? true : null)"
                                        ></b-form-input>
                                        <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </ValidationProvider> 
                            </b-col>
                            <b-col sm="12" md="6">
                                <ValidationProvider vid="last_name" name="نام خانوادگی" rules="required"  v-slot="{ valid, errors }">
                                    <b-form-group label="نام خانوادگی">
                                        <b-form-input v-model="user.last_name"
                                        :state="errors[0] ? false : (valid ? true : null)"
                                        ></b-form-input>
                                        <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </ValidationProvider> 
                            </b-col>
                        </b-form-row>
                        <b-form-row>
                            <b-col cols="sm">
                                <b-form-group label="شناسه">
                                    <div class="border bg-light rounded-lg p-2 mb-3" readonly v-text="user.id"></div>
                                </b-form-group>
                                
                            </b-col>
                        </b-form-row>
                        <b-form-row v-show="user.email">
                            <b-col col="sm">
                                <b-form-group label="ایمیل">
                                <div class="border bg-light rounded-lg p-2" readonly v-text="user.email"></div>      
                                </b-form-group>
                            </b-col>
                        </b-form-row>
                        <b-form-row>
                            <b-col cols="sm">
                                <b-form-group label="شماره همراه">
                                    <div disabled class="border bg-light rounded-lg p-2 mb-3" readonly v-text="user.phone"></div>
                                </b-form-group>
                            </b-col>
                        </b-form-row>
                        <b-form-row>
                            <b-col cols="sm">
                                <ValidationProvider vid="status" name="وضعیت" rules="required"  v-slot="{ valid, errors }">
                                    <b-form-group  label="وضعیت"
                                    >
                                        <b-form-select style="border-radius:10px" v-model="user.status" :state="errors[0] ? false : (valid ? true : null)">
                                            <option v-for="(status, index) in CustomerStatus.userStatus" :key="index" :value="status.value">{{status.text}}</option>
                                        </b-form-select>
                                        <b-form-invalid-feedback class="mt-2" id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </ValidationProvider>
                            </b-col>
                        </b-form-row>
                        
                        <b-form-row>
                            <Xbutton
                            :on_click="()=> updateCustomer()"
                            class="btn mr-1"
                            :variant="'success'"
                            text="ذخیره تغییرات"
                            :disable="btnDisable"
                            >
                                <template #spinner>
                                    <b-spinner v-show="laodingSpinner" small ></b-spinner>
                                </template>            
                            </Xbutton>
                        </b-form-row>
        
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "~/services/api";
import CustomerStatus from '~/constants/CustomerStatus'
import { userService } from '~/services/apiServices'
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
    name: "find",
    layout: "main-content",
    components:{ValidationProvider,ValidationObserver},
    data() {
        return {
            CustomerStatus,
            user: null,
            orders : [],
            btnDisable: false,
            laodingSpinner: false
        }
    },
    async mounted() {
        let res = await api.get('customer/find/' + this.$route.params.id)
        this.user = res.data.data
        let response = await  api.get('order/customer/' + this.$route.params.id)
        this.orders = response.data.data
    },
    methods:{
        updateCustomer(){
            this.$refs.formCustomer.validate().then(async (res) => {
                if (res) {
                    const payload = {
                        data: {
                            first_name: this.user.first_name,
                            last_name: this.user.last_name,
                            status: this.user.status,
                            userId: this.$route.params.id
                        },
                        token: this.$cookies.get('token')
                    }
                    try{
                        this.btnDisable = true
                        this.laodingSpinner = true
                        const { data } = await userService.updateCustomer(payload)
                        this.$store.commit("open_toast", {
                            msg: data.message,
                            variant: "success",
                        });
                        this.$router.push('/admin/customers')
                    }catch(e){
                        if(e.response.status === 400){
                            this.$refs.formCustomer.setErrors(e.response.data.data);
                        }
                        this.$store.commit("open_toast", {
                            msg: e.response.data.message,
                            variant: "error",
                        });
                    }finally{
                        this.btnDisable= false
                        this.laodingSpinner= false
                    }
                }else{
                    return
                }
            })
        }
    }

}
</script>

<style scoped>

</style>
