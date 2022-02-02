<template>
    <div class="bg-white py-4 px-2 px-sm-5 my-4 address">
        <ValidationObserver ref="addressForm">
            <b-form @submit.prevent="update_address()" inline>
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
                                    :state="errors[0]? false: valid && province != null? true: null"
                                    :class="[
                                    'form-control',
                                    !province && !errors[0] ? 'pr-4' : null,
                                    ]"
                                    v-model="province"
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
                                        v-model="city"
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
                                        v-model="address"
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
                                        v-model="postal_code"
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
                        class="mt-3"
                        text="ویرایش"
                        :disabled="btnDisableUpdate"
                        variant="info"
                      >
                        <template #spinner>
                          <b-spinner
                            v-show="laodingSpinnerUpdate"
                            small
                            class="float-left"
                          ></b-spinner>
                        </template>
                    </Xbutton>
                    <Xbutton
                        class="mt-3 mr-1"
                        text="حذف"
                        :disabled="btnDisableDelete"
                        variant="danger"
                        :on_click="() => delete_address()"
                      >
                        <template #spinner>
                          <b-spinner
                            v-show="laodingSpinnerDelete"
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
</template>

<script>
    import { ValidationProvider, ValidationObserver } from "vee-validate";
    import { tr } from "@/services/lang";
    import { provinces } from '@/constants/Provinces'
    import { addressService } from '@/services/apiServices'
    export default {
        props:{
            id:{
                required: true,
                type: String | Number
            },
            address:{
                required: true,
                type: String
            },
            province:{
                required: true,
                type: String,
                default: null
            },
            city:{
                required: true,
                type: String
            },
            postal_code:{
                required: true,
                type: String
            },
        },
        data() {
            return {
                btnDisableUpdate: false,
                laodingSpinnerUpdate: false,
                btnDisableDelete: false,
                laodingSpinnerDelete: false,
            }
        },
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
        methods:{
            update_address(){
              this.$refs.addressForm.validate().then(async ( success ) => {
                if(success) {
                   
                    this.btnDisableUpdate= true
                    this.laodingSpinnerUpdate= true
                    const payload ={
                        id: this.id,
                        data:{
                            province: this.province,
                            city: this.city,
                            address: this.address,
                            postal_code: this.postal_code,
                        },
                        token: this.$cookies.get('token-buyer')
                    }
                try{
                    const {data}= await addressService.update_address(payload)
                    this.$store.commit("open_toast", {
                        msg: data.message,
                        variant: "success",
                    })
                }catch(e){
                    if (e.response.status === 400) this.$refs.addressForm.setErrors(e.response.data.data);
                    this.$store.commit("open_toast", {
                        msg: e.response.data.message,
                        variant: "error",
                    })

                }finally{
                    this.btnDisableUpdate= false
                    this.laodingSpinnerUpdate= false
                }
                  }else {
                      return
                  }
              })
            },
            async delete_address(){
                const payload= {
                    id: this.id,
                    token: this.$cookies.get('token-buyer')
                }
                this.btnDisableDelete= true
                this.laodingSpinnerDelete= true
                try{
                    const {data}=await addressService.delete_address(payload)
                    this.$emit('delete_address',this.id)
                    this.$store.commit("open_toast", {
                        msg: data.message,
                        variant: "success",
                    })
                }catch(e){
                    this.$store.commit("open_toast", {
                        msg: e.response.data.message,
                        variant: "error",
                    })
                }finally{
                    this.btnDisableDelete= false
                    this.laodingSpinnerDelete= false
                }
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