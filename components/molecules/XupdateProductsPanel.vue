<template>
    <div >
        <page-title title_text="جزییات محصول" icon="product">
            <Xbutton
                text="ذخیره تغییرات"
                :disable="btnDisable"
                :on_click="() => updateProduct()"
                variant="success"
                class="mx-2 px-4 py-2"
              >
                <template #spinner>
                  <b-spinner
                    v-show="loadingSpinner"
                    small
                    class="float-left"
                  ></b-spinner>
                </template>
             </Xbutton>
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
                                                <input type="number" class="form-control" v-model=" enPrice "/>
                                                <small class="text-success px-2" v-show="enPrice">
                                                    {{moneyFormat( enPrice )}}
                                                    تومان
                                                </small>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm">
                                            <b-form-group label="قیمت فروش">
                                                <input type="number" class="form-control" v-model="strikethroughPrice"/>
                                                <small class="text-success px-2" v-show="strikethroughPrice">
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
                                            <dashboard-box :number="statistics.conversion_rates_visits" title="نرخ تبدیل">
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
import axios from '~/plugins/axios'
import PageTitle from "~/components/main/pageTitle";
import DashboardBox from "~/components/dashboard-box";
import { validate } from 'vee-validate';
import { categoryService } from "@/services/apiServices";
import { mapState } from 'vuex'
import separatePrice from '~/mixins/separatePrice'

export default {
    mixins: [ separatePrice ],
    components: {
        DashboardBox, PageTitle,
        'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
    },
    props:{
        store_slug:{
            type: Number | String,
            required: true
        },
        admin_panel:{
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            message: null,
            error: null,
             categories: null,
            formData: {
                title: null,
                store_id: this.store_slug,
                price: 0,
                unlimited: false,
                is_multiple: false,
                quantity: 0,
                discount_max_amount: 0,
                description: null,
                code:''
                
            },
            discount_percent2: 0,
            strikethroughPrice : 0,
            validation_errors: {
                logo: null,
                logo_size: null,
                logo_type: null,
            },
            statistics : {},
            images : [],
            main_image:null,
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
            btnDisable: false,
            loadingSpinner: false
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
                this.discount_percent2 = p
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
        }),
        enPrice: {
            get(){
                return this.formData.price
            },
            set( value ){
                this.formData.price = this.changetoEnNumber( value )
            }
        },
        enSellPrice: {
            get(){
                return this.strikethroughPrice
            },
            set( value ){
                this.strikethroughPrice = this.changetoEnNumber( value )
            }
        }
    },
    async mounted() {
        await this.getProduct()
        await this.getAllCategory()
        this.getStatistics()
    },
    watch:{
        images( value ){
            if(value.length >= 1){
                let isSelected = false
                for( let i = 0; i < value.length; i++ ){
                    if(value[i].selected) {
                        isSelected = true
                        break
                    }
                    continue
                }
                if(!isSelected){
                    value[0].selected= true
                    this.main_image = value[0].file || null
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
                    store_id: this.store_slug,
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
             let productId= null
             if(this.admin_panel){
                 productId= this.$route.params.detail
             }else{
                 productId= this.$route.params.id
             }
            await api.get('product/find/' + productId, this.$cookies.get('token'))
                .then(res => {
                    this.formData.title = res.data.data.title
                    this.formData.price = res.data.data.price
                    this.formData.quantity = res.data.data.quantity
                    this.formData.description = res.data.data.description
                    this.formData.code = res.data.data.code
                    this.formData.is_multiple = res.data.data.is_multiple == 1 ? true : false
                    this.formData.unlimited = res.data.data.unlimited == 1 ? true : false
                    this.$store.commit('setToState', {
                        name: 'selectedCategories',
                        data: res.data.data.categories || [] 
                    })
                    this.strikethroughPrice= this.formData.price * (100 - res.data.data.discount_percent)/100

                    res.data.data.thumbnails.forEach(element =>{
                        this.images.push(
                            {
                                thumbnail:element,
                                selected:false
                            }
                        )
                        this.images[0].selected = true
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
                const deepCopy = this.$lodash.cloneDeep(this.images);
                const se = deepCopy.find(({selected})=> {
                    return selected === true
                })
                if(!this.main_image){
                    form_data.append('current_images[0]', se.thumbnail)
                }

                let counter = !this.main_image ? 1 : 0
                let counter2 = 0

                for(let i= 0; i < deepCopy.length; i++){
                    if(deepCopy[i].selected === true){
                        continue
                    }else{
                        if(!deepCopy[i].file){
                            form_data.append(`current_images[${counter}]`,deepCopy[i].thumbnail)
                            counter++
                        }else{
                            form_data.append(`new_images[${counter2}]`,deepCopy[i].file)
                            counter2++
                        }
                    }
                }
           
                form_data.append('main_image', this.main_image)
                form_data.set('price',this.formData.price +'0')
                form_data.append('discount_percent',this.discount_percent2)
                this.selectedCategories.forEach((element, index) =>{
                    form_data.append(`categories[${ index }]`, element)
                })
                this.btnDisable= true
                this.loadingSpinner= true
                let productId= null
                if(this.admin_panel){
                    productId= this.$route.params.detail
                }else{
                    productId= this.$route.params.id
                }
                axios.post('product/update/' + productId, form_data, {
                    headers:{
                        'Authorization' : 'Bearer '+ this.$cookies.get("token"),
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    console.log(response.data)
                    this.message = response.data.message
                    if(this.admin_panel){
                        this.$router.push(`/panel/admin/stores/${this.store_slug}/find`);
                    }else{
                        this.$router.push("/panel/" + this.store_slug + "/admin/products");
                    }
                   
                    this.$store.commit('open_toast',{
                        msg: 'آپدیت با موفقیت انجام شد',
                        variant: 'success'
                    })
                }).catch(({response}) => {
                    this.error = response.data.data[Object.keys(response.data.data)[0]]
                    this.$store.commit('open_toast',{
                        msg: response.data.message,
                        variant: 'error'
                    })
                }).finally(()=>{
                    this.btnDisable= false
                    this.loadingSpinner= false
                })
            }
            
        },
       
        getStatistics() {
             let productId= null
             if(this.admin_panel){
                 productId= this.$route.params.detail
             }else{
                 productId= this.$route.params.id
             }
            api.get('product/statistics/' + productId)
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
            document.getElementById('inputFileUpdate').value = ''
        },
        selectMainPicture(image){
            this.images.forEach(element => {
                element.selected= false
            });
            image.selected= true
            this.main_image = image.file || null
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
