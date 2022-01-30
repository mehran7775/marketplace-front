<template>
    <div>
     <ValidationObserver ref="category_form">
         <b-form @submit.prevent="update()" inline>
            <b-form-group >
                <ValidationProvider
                vid="first_name"
                rules="required"
                v-slot="{ errors, valid }"
                :name="lang.label.address"
                >
                <b-form-input
                    type="text"
                    v-model="address"
                    :placeholder="lang.label.address"
                    :state="
                    errors[0]? false: valid && address != ''? true: null
                    "
                />
                <b-form-invalid-feedback
                    class="mt-2"
                    id="inputLiveFeedback"
                    >{{ errors[0] }}</b-form-invalid-feedback
                >
                </ValidationProvider>
            </b-form-group>

         </b-form>

     </ValidationObserver>
    </div>
</template>

<script>
    import { ValidationProvider, ValidationObserver } from "vee-validate";
    import { tr } from "@/services/lang";
    export default {
        props:{
            address:{
                required: true,
                type: String
            },
            province:{
                required: true,
                type: String
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
            update(){

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>