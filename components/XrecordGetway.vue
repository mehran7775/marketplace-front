<template>
    <div class="col w-100" id="record_getway">
        <div class="row justify-content-around align-content-center pb-3">
            <div class="col-4 col-md-4 my-2">
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    ref="title"
                    placeholder="عنوان فارسی"
                    @change="setData('fa_name',fa_name)"
                    v-model="fa_name"
                />
            </div>
            <div class="col-4 col-md-4 my-2">
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    ref="name"
                    placeholder="نام انگلیسی"
                    @change="setData('en_name',en_name)"
                    v-model="en_name"
                />
            </div>
            <div class="col-4 col-md-4 my-2">
                <input
                    type="text"
                    class="form-control"
                    id="description"
                    ref="description"
                    placeholder="توضیحات"
                    @change="setData('description',description)"
                    v-model="description"
                />
            </div>
            <div class="col-4 col-md-4 my-2">
                <input
                    type="text"
                    class="form-control"
                    id="privance"
                    ref="privance"
                    placeholder="استان"
                    @change="setData('province',province)"
                    v-model="province"
                />
            </div>
            <div class="col-4 col-md-4 my-2">
                <input
                    type="text"
                    class="form-control"
                    id="city"
                    ref="city"
                    placeholder="شهر"
                    @change="setData('city',city)"
                    v-model="city"
                />
            </div>
            <div class="col-4 col-md-4 my-2">
                <input
                    type="text"
                    class="form-control"
                    id="phone_number"
                    ref="phone_number"
                    placeholder="شماره همراه"
                    @change="setData('phone_number',phone_number)"
                    v-model="phone_number"
                />
            </div>
            <div class="col-4 my-2">
                <b-form-file id="logo"
                             ref="logo" placeholder="لوگو" class="form-control" v-model="logo"></b-form-file>

                <div class="m-auto pt-2 pr-2">
                    <div class="w-100 text-right">
                        <input type="checkbox" id="show_number" name="show_number"
                               @change="setData('name_option',name_option)"
                               v-model="name_option"
                        />
                        <label for="show_number">نمایش شماره موبایل</label>
                    </div>
                    <div class="w-100 text-right">
                        <input type="checkbox" id="show_email" name="show_email" checked
                               @change="setData('address_option',address_option)"
                               v-model="address_option"
                        />
                        <label for="show_email">نمایش ایمیل</label>
                    </div>
                    <div class="w-100 text-right">
                        <input type="checkbox" id="show_address" name="show_address"
                               @change="setData('email_option',email_option)"
                               v-model="email_option"
                        />
                        <label for="show_address">نمایش آدرس</label>
                    </div>
                    <div class="w-100 text-right">
                        <input type="checkbox" id="show_fullname" name="show_fullname"
                               @change="setData('phone_option',phone_option)"
                               v-model="phone_option"
                        />
                        <label for="show_fullname">نمایش نام و نام خانوادگی</label>
                    </div>
                </div>
            </div>
            <div class="col-8 my-2">
        <textarea
            rows="6"
            class="form-control"
            id="lows"
            ref="logo"
            v-model="shop_terms"
            @change="setData('shop_terms',shop_terms)"
            placeholder="قوانین و مقررات فروشگاه"
        ></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data_store: {
            type: [String, Array, Object],
            default: "",
        },
        setData: {
            type: Function
        }
    },
    data() {
        return {
            fa_name: null,
            en_name: null,
            description: null,
            province: null,
            city: null,
            phone_number: null,
            logo: null,
            name_option: null,
            address_option: null,
            email_option: null,
            phone_option: null,
            shop_terms : null
        }
    },
    watch : {
      logo : function (){

          this.setLogo()
      }
    },
    methods : {
        setLogo(){
            alert(this.logo)
            this.setData('logo',this.logo)
        }
    }

};
</script>

<style lang="scss" scoped>
#record_getway {
    min-height: 280px;
}
</style>
