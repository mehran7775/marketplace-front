<template>
  <div>
      <page-title title_text="افزودن محصول جدید" icon="product">
       <Xbutton
          text="ثبت محصول"
          :disable="btnDisable"
          :on_click="() => createProduct()"
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
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body" id="create_product">
              <div class="row">
                <div class="col-sm">
                  <b-form-group label="عنوان">
                    <input class="form-control" v-model="formData.title" />
                    <small v-if="errors.title" class="text-danger px-2">{{
                      errors.title
                    }}</small>
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
                    <input
                      maxlength="15"
                      type="text"
                      class="form-control"
                      v-model="formData.price"
                    />
                    <small class="text-success px-2">
                      {{ moneyFormat(formData.price) }}
                      تومان
                    </small>
                  </b-form-group>
                </div>
                      <div class="col-sm">
                  <b-form-group label="قیمت فروش">     
                      <b-form-input maxlength="15" type="text" v-model="strikethroughPrice" />
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
                    <input
                    readonly
                      type="number"
                      class="form-control"
                      :value="discount_percent"
                    />
                  </b-form-group>
                </div>
                <div class="col-sm">
                  <b-form-group label="تعداد">
                    <input
                      type="number"
                      class="form-control"
                      v-model="formData.quantity"
                    />
                    <small v-if="errors.quantity" class="text-danger px-2">{{
                      errors.quantity
                    }}</small>
                  </b-form-group>
                </div>
              </div>
              <div class="row my-3">
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
                            ref="inputFile"
                          ></b-form-file>
                            <small v-if="validation_errors.logo" class="text-danger px-2">تکمیل
                                    این فیلد الزامی است.</small>
                            <small v-if="validation_errors.logo_size" class="text-danger px-2">
                                    حجم عکس نباید بیشتر از پنج مگابایت باشد
                            </small>
                            <small v-if="validation_errors.logo_type" class="text-danger px-2">
                                    فرمت عکس معتبر نمی باشد
                            </small>
                          <small v-if="errors.image" class="text-danger px-2">{{
                            errors.image
                          }}</small>
                        </b-form-group>
                      </div>
                </div>
                <div class="col-12 col-xl-9">
                  <div class="row mx-1 border border-whitesmok rounded pb-2 px-1 d-flex justify-content-start align-items-start">
                    <template v-if="images.length > 0">
                      <div v-for="(image, index) in images" class="image-result mr-2 mb-1" :key="index">
                        <fa icon="times" class="fa-lg cursor_pointer delete_item position-relative" @click="removeImage(image)"></fa>
                        <div class="d-flex flex-column align-items-center" style="height:78px;width:58px;">
                        <img height="58" :class="[image.selected? 'selectedImage': null,'rounded w-100']" :src="image.preview" @click="selectMainPicture(image)">
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
              <div class="row">
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
                    <div class="">
                      <label class="switch">
                        <input type="checkbox" v-model="formData.unlimited" />
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
                <div class="col-12">
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
  </div>
</template>

<script>
import PageTitle from "~/components/main/pageTitle";
import { categoryService } from "@/services/apiServices";
import api from "~/services/api";
import { mapState } from 'vuex'
import { image } from 'vee-validate/dist/rules';
import axios from '~/plugins/axios'
export default {
  name: "create",
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
  components: { 
    PageTitle ,
    'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
  },
  async created(){
    await this.getAllCategory() 
    this.$store.commit('setToState',{
      name:'selectedCategories',
      data:[]
    })
    
  },
  data() {
    return {
      categories: null,
      message: null,
      error: null,
      formData: {
        title: null,
        store_id: this.store_slug,
        price: 0,
        unlimited: false,
        is_multiple: false,
        quantity: 0,
        discount_max_amount: 0,
        description: null,
        parent_id: null,
        code:'',
      },
      mainImage:null,
      strikethroughPrice:0,
      errors: {
        title: null,
        image: null,
        quantity: null,
      },
      validation_errors:{
          logo: null,
          logo_size: null,
          logo_type: null,
      },
      editorConfig: {
          removePlugins: ['Title','Table','PageBreak','Subscript','Superscript','CodeBlock','Code','Strikethrough','ChemType','MathType','Specialcharacters'],
          // removeButtons : ['Superscript'],
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
          smiley_columns : 6,
          height :'500'

      },
      images: [],
      btnDisable: false , 
      loadingSpinner: false
    };
  },
  watch:{
    images(value){
      if(value.length >= 1){
        value[0].selected= true
        this.mainImage = value[0].file

      }
    },
  },
  computed: {
    user() {
         return JSON.parse(localStorage.getItem("currentUser"));
    },
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
    ...mapState({
       selectedCategories: state => state.selectedCategories
    })
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
              preview: null,
              selected: false
            }
            let reader = new FileReader()
            reader.addEventListener('load',()=>{
              img.preview= reader.result,
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
    validate() {
      let res = true;
      if (!this.formData.title) {
        this.errors.title = 'عنوان الزامی است'
        res = false
      }
      if (!this.formData.quantity) {
        this.errors.quantity = 'تعداد محصول الزامی است'
        res = false
      }

      if (this.images.length <= 0) {
        this.errors.image = "تصویر محصول الزامی است";
        res = false;
      }     
      return res;
    },
    createProduct() {
      if (this.validate()) {
        let form_data = new FormData();
        for (let key in this.formData) {
          if (key == 'price') {
            continue;
          }

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
        let counter = 0
        form_data.append('images[0]',this.mainImage)
        for(let i= 0; i < this.images.length ; i++){
          if(this.images[i].selected === true){
            continue
          }else{
             counter++
            form_data.append(`images[${counter}]`,this.images[i].file)
          }
        }
        this.selectedCategories.forEach((element , index) =>{
          form_data.append(`categories[${index}]`, element)
        })
        form_data.append('price',this.formData.price+'0')
        form_data.append('phone_number','')
       
        form_data.append('discount_percent',this.discount_percent)
        this.btnDisable = true
        this.loadingSpinner = true
        console.log(this.form_data)
        axios({
          method: "post",
          url: "product/create",
          data: form_data,
          headers: {
            'Authorization' : 'Bearer '+ this.$cookies.get("token"),
            'Content-Type': 'multipart/form-data'
          },
      })
       .then((response) => {
          this.message = response.data.message;
           if(this.admin_panel){
                this.$router.push(`/admin/stores/${this.store_slug}/find`);
            }else{
                this.$router.push("/" + this.store_slug + "/admin/products");
            }
          this.$store.commit('open_toast',{
              msg: response.data.message,
              variant: 'success'
          })
        })
        .catch(({ response }) => {
          this.error = response.data.data[Object.keys(response.data.data)[0]];
        })
        .finally(()=>{
          this.btnDisable = false
          this.loadingSpinner = false
        })
         
      }
    },
    moneyFormat(price) {
      if (!price) {
        return 0;
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
      this.$refs.inputFile.value= ""
    },
    selectMainPicture(image){
      this.images.forEach(element => {
        element.selected= false
      });
      image.selected= true
      this.mainImage = image.file
    }
  },
  destroyed(){
    this.$store.commit('deleteFromState','selectedCategories')
  }
};
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
