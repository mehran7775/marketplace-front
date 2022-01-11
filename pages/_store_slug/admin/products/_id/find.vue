<template>
    <div >
        <page-title title_text="جزییات محصول" icon="product">
        <button class="btn btn-success shadow-sm mx-2 px-4 py-2" @click="updateProduct" variant="primary"
                style="border-radius: 20px; border-color: #bbb;"
        >
            ذخیره تغییرات
        </button>
        </page-title>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <div class="shadow-sm bg-white rounded p-3">
            <b-tabs content-class="mt-3">
                <b-tab title="ویرایش محصول" active>
                    <div class="row">
                        <div class="col-12">
                            <div>
                                <div class="mx-3" id="create_product">
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="عنوان">
                                                <input class="form-control" v-model="formData.title"/>
                                            </b-form-group>
                                        </div>
                                            <div class="col-sm">
                                            <b-form-group label="کد محصول">
                                            <input class="form-control" v-model="formData.code"/>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="قیمت خط خورده">
                                                <input type="number" class="form-control" v-model="formData.price"/>
                                                <small class="text-success px-2">
                                                    {{moneyFormat(formData.price)}}
                                                    تومان
                                                </small>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm">
                                            <b-form-group label="قیمت فروش">
                                                <input type="number" class="form-control" v-model="strikethroughPrice"/>
                                                <small class="text-success px-2">
                                                    {{ moneyFormat(strikethroughPrice) }}
                                                    تومان
                                                </small>
                                            </b-form-group>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <b-form-group label="درصد تخفیف">
                                                <input type="number" class="form-control" readonly
                                                    :value="discount_percent"/>
                                            </b-form-group>
                                        </div>
                                            <div class="col-sm">
                                            <b-form-group label="تعداد">
                                                <input type="number" class="form-control" v-model="formData.quantity"/>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-xl-3">
                                            <div class="d-flex">
                                                <b-form-group label="تصویر محصول">
                                                <b-form-file
                                                    accept="image/*"
                                                    class="px-5 rounded"
                                                    style="width: max-content;box-shadow:0 0 0 0.5px whitesmoke;"
                                                    placeholder="یک فایل انتخاب کنید"
                                                    plain
                                                    name="images[]"
                                                    @change="selectFiles"
                                                    multiple
                                                    ref="inputFileUpdate"
                                                    id="inputFileUpdate"
                                                ></b-form-file>
                                                    <small v-if="validation_errors.logo" class="text-danger px-2">تکمیل
                                                            این فیلد الزامی است.</small>
                                                    <small v-if="validation_errors.logo_size" class="text-danger px-2">
                                                            حجم عکس نباید بیشتر از پنج مگابایت باشد
                                                    </small>
                                                    <small v-if="validation_errors.logo_type" class="text-danger px-2">
                                                            فرمت عکس معتبر نمی باشد
                                                    </small>
                                                    
                                                </b-form-group>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl-9">
                                            <div class="row mx-1 border border-whitesmok rounded pb-2 px-1 d-flex justify-content-start align-items-start">
                                                <template v-if="images.length > 0">
                                                <div v-for="(image, index) in images" class="image-result mr-2 mb-1" :key="index">
                                                    <fa icon="times" class="fa-lg cursor_pointer delete_item position-relative" @click="removeImage(image)"></fa>
                                                    <div class="d-flex flex-column align-items-center" style="height:78px;width:58px;">
                                                    <img height="58" :class="[image.selected? 'selectedImage': null,'rounded w-100']" :src="image.thumbnail" @click="selectMainPicture(image)">
                                                    <small style="height:17px; margin-top:3px;" v-show="image.selected">تصویر اصلی</small>
                                                    </div>
                                                </div>
                                            
                                                </template>
                                                <template v-else>
                                                <p class="my-4 mr-2">عکس های انتخابی شما</p>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-4 mb-2">
                                        <div class="col-12 col-lg-6">
                                            <b-form-group
                                            id="gParent_id"
                                            label="انتخاب دسته بندی"
                                            label-for="parent_id"
                                            >
                                            <div class="w-100 bg-whitesmok border" id="categories">
                                                <MoleculesXtreeCategories
                                                    v-for="category in categories"
                                                    :key="category.id"
                                                    :node="category"
                                                    type="createProducts"
                                                />
                                            
                                            </div>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm">
                                            <b-form-group label="تعداد محصول نامحدود است">
                                                <div>
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="formData.unlimited">
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm">
                                            <b-form-group label=" امکان انتخاب چند محصول توسط مشتری">
                                                <div class="">
                                                <label class="switch">
                                                    <input type="checkbox" v-model="formData.is_multiple" />
                                                    <span class="slider round"></span>
                                                </label>
                                                </div>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">  
                                            <b-form-group label="توضیحات محصول">
                                                <client-only placeholder="loading...">
                                                    <ckeditor-nuxt v-model="formData.description" :config="editorConfig"  id="description"
                                                    ref="description"/>
                                                </client-only>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="آمار محصول" >
                    <div class="row">
                        <div class="col-12">
                            <div>
                                <div class="mx-2">
                                    <div class="row">
                                        <div class="col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.complete_orders" title="سفارشات تکمیل شده">
                                            </dashboard-box>
                                        </div>
                                        <div class="col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.processing_orders" title="سفارشات در حال پردازش">
                                            </dashboard-box>
                                        </div>
                                        <div class="col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.sales_count" title="تعداد فروش">
                                            </dashboard-box>
                                        </div>
                                        <div class=" col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.total_sell_price" title="کل مبلغ فروش">
                                            </dashboard-box>
                                        </div>
                                        <div class=" col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.views_count? statistics.views_count : 0" title="تعداد بازدید">
                                            </dashboard-box>
                                        </div>
                                        <div class="col-md-4 col-sm my-3">
                                            <dashboard-box :number="statistics.conversion_rates" title="نرخ تبدیل">
                                            </dashboard-box>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";
import DashboardBox from "~/components/dashboard-box";
import { validate } from 'vee-validate';
import { categoryService } from "@/services/apiServices";
import { mapState } from 'vuex'

export default {
    components: {
        DashboardBox, PageTitle,
        'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
    },
    layout: "main-content",
    data() {
        return {
            message: null,
            error: null,
             categories: null,
            formData: {
                title: null,
                store_id: this.$route.params.store_slug,
                price: 0,
                unlimited: false,
                is_multiple: false,
                quantity: 0,
                discount_max_amount: 0,
                description: null,
                code:''
                
            },
            strikethroughPrice : 0,
            validation_errors: {
                logo: null,
                logo_size: null,
                logo_type: null,
            },
            statistics : {},
            images : [],
            editorConfig : {
                removePlugins: ['Title','Table','PageBreak','Subscript','Superscript','CodeBlock','Code','Strikethrough','ChemType','MathType','Specialcharacters'],
                placeholder:"توضیحات",
                language:{
                    ui: 'fa',
                    content: 'fa'
                },
                contentsLangDirection:'rtl',
                smiley_path : '@/assets/ckeditor/smiley/images',
                smiley_images : [
                    'regular_smile.png','sad_smile.png','wink_smile.png','teeth_smile.png','confused_smile.png','tongue_smile.png',
                    'embarrassed_smile.png','omg_smile.png','whatchutalkingabout_smile.png','angry_smile.png','angel_smile.png','shades_smile.png',
                    'devil_smile.png','cry_smile.png','lightbulb.png','thumbs_down.png','thumbs_up.png','heart.png',
                    'broken_heart.png','kiss.png','envelope.png'
                ],
                smiley_descriptions : [
                    ':)', ':(', ';)', ':D', ':/', ':P', ':*)', ':-o',
                    ':|', '>:(', 'o:)', '8-)', '>:-)', ';(', '', '', '',
                    '', '', ':-*', ''
                ],
                smiley_columns : 6

             },
        }
    },
    computed:{
        discount_percent(){
            if(this.strikethroughPrice == ''){
                return 0
            }
            let x= (this.formData.price - this.strikethroughPrice)
            if(this.strikethroughPrice!==0 || !isNaN(this.strikethroughPrice)){
                const p= (x/ this.formData.price)* 100
                let rounded = Math.round((p + Number.EPSILON) * 100) / 100;
                return rounded
            }
            return 0
        },
        user() {
         return JSON.parse(localStorage.getItem("currentUser"));
        },
        ...mapState({
            selectedCategories : state => state.selectedCategories
        })
    },
    async mounted() {
        await this.getProduct()
        await this.getAllCategory()
        this.getStatistics()
    },
    watch:{
        images(value){
            if(value.length >= 1){
                let se=false
                value.forEach(element =>{
                    if(element.selected){
                        se=true
                    }
                })
                if(!se){
                    value[0].selected= true
                }
            }
        },
    },
    destroyed(){
        this.$store.commit('deleteFromState','selectedCategories')
    },
    methods: {
        async getAllCategory() {
            try {
                const res = await categoryService.getAllCategory({
                userId: this.user.id,
                token: this.$cookies.get("token"),
                });
                this.categories = res.data.data;
            } catch (e) {
                console.log(e);
            }
        },
        selectFiles(event){
            if(this.images.length >= 8 || event.target.files.length >= 8){
                this.$store.commit('open_toast',{
                    msg: 'حداکثر تعداد عکس های قابل آپلود هشت عدد می باشد',
                    variant: 'warning'
                })
                return
            }
            this.validation_errors.logo_size= false
            this.validation_errors.logo_type= false
            this.validation_errors.logo_size= false
            let selectedFiles= event.target.files
            const acceptedImageTypes = ['image/svg+xml', 'image/jpeg', 'image/png','image/webp'];
            for(let i= 0; i< selectedFiles.length; i++){
            if(acceptedImageTypes.includes(selectedFiles[i].type)){
                if(selectedFiles[i].size > ((1024 * 1024) * 5)){
                this.validation_errors.logo_size =true
                event.target.value= ''
                break
                }
                let img = {
                    file : selectedFiles[i],
                    thumbnail: null,
                    selected: false
                }
                let reader = new FileReader()
                reader.addEventListener('load',()=>{
                    img.thumbnail= reader.result,
                    this.images.push(img)
                })
                reader.readAsDataURL(selectedFiles[i]);
            }else{
                this.validation_errors.logo_type= true
                event.target.value= ''
                break
            }
            }
        },
         validate(){
            let spy = this.validation_errors
            Object.keys(spy).forEach(function (key) {
                spy[key] = null
            });
            let res = true
           if (this.images.length <= 0) {
                this.validation_errors.logo=true
                res = false;
            }  
         
            return res
        },
         async getProduct() {
            await api.get('product/find/' + this.$route.params.id, this.$cookies.get('token'))
                .then(res => {
                    this.formData.title = res.data.data.title
                    this.formData.price = res.data.data.price
                    this.formData.quantity = res.data.data.quantity
                    this.formData.is_multiple = res.data.data.is_multiple == 1 ? true : false
                    this.formData.unlimited = res.data.data.unlimited == 1 ? true : false
                    this.$store.commit('setToState', {
                        name: 'selectedCategories',
                        data: res.data.data.categories || [] 
                    })
                    this.strikethroughPrice= res.data.data.price*5/100
                    res.data.data.thumbnails.forEach(element =>{
                        this.images.push(
                            {
                                thumbnail:element.thumbnail,
                                selected:element.selected
                            }
                        )
                    })
                })
        },
        updateProduct() {
            if(!this.validate()){
            }else{
                let form_data = new FormData();
                for (let key in this.formData) {
                    if (this.formData[key] === true || this.formData[key] === false) {
                        if (this.formData[key] === true) {
                            form_data.append(key, 1);
                        }
                        if (this.formData[key] === false) {
                            form_data.append(key, 0);
                        }
                    } else {
                        if (this.formData[key] !== null) {
                            form_data.append(key, this.formData[key]);
                        }
                    }
                }
                const current_thumbnails = []
                const new_thumbnails = []
                const deepCopy = this.$lodash.cloneDeep(this.images);
                deepCopy.forEach(element => {
                    if(element.file){
                        delete element.thumbnail
                        new_thumbnails.push(element)
                    }else{
                    
                        current_thumbnails.push(element)
                    }
                })
                form_data.set('current_thumbnails[]',current_thumbnails)
                form_data.set('new_thumbnails[]',new_thumbnails)
                form_data.set('price',this.formData.price +'0')
                form_data.append('discount_percent',this.discount_percent)
                form_data.append("categories",this.selectedCategories)
                api.post('product/update/' + this.$route.params.id, form_data, this.$cookies.get('token')).then(response => {
                    this.message = response.data.message
                    this.$router.push(
                    "/" + this.$route.params.store_slug + "/admin/products"
                    );
                    this.$store.commit('open_toast',{
                        msg: 'آپدیت با موفقیت انجام شد',
                        variant: 'success'
                    })
                }).catch(({response}) => {
                    this.error = response.data.data[Object.keys(response.data.data)[0]]
                })
            }
            
        },
       
        getStatistics() {
            api.get('product/statistics/' + this.$route.params.id)
                .then(res => {
                    this.statistics = res.data.data
                })
        },
        moneyFormat(price) {
            if (!price){
                return 0
            }
            const pieces = parseFloat(price).toFixed(0).split("");
            let ii = pieces.length;
            while ((ii -= 3) > 0) {
                pieces.splice(ii, 0, ",");
            }
            return pieces.join("");
        },
        removeImage(image){
            this.images.splice(this.images.indexOf(image),1)
            // this.$refs.inputFileUpdate.value=''
            document.getElementById('inputFileUpdate').value = ''
        },
        selectMainPicture(image){
            this.images.forEach(element => {
                element.selected= false
            });
            image.selected= true
        }
    },
}
</script>

<style scoped lang="scss">
#create_product .custom-file-label {
    border: none;
    background: none;
}

#create_product .custom-file-label::after {
    display: none;
}
#categories{
  height: 120px;
  overflow-y: auto;
}
.delete_item{
  right: 43px;
  top: 21px;
  color:rgba(0, 0, 0, 0.678);
  &:hover{
    color: $silver!important;
  }
}
.selectedImage{
  border:2px solid $success;
  box-shadow: 0 0 2px 0 $success;
}
</style>
