<template>
    <div class="row">
      <div class="col-12">
        <MainPageTitle title_text="دسته بندی ها" icon="dashboard" />
      </div>
      <div class="col-12">
        <div class="row">
          <div id="form" class="py-3 px-4 w-100">
            <ValidationObserver ref="createFormCategory">
              <b-form @submit.prevent="createCategory()">
                <legend class="h5 font-weight-bold">
                  ایجاد دسته بندی
                </legend>
                <div class="px-5 pt-3 d-flex flex-wrap">
                  <ValidationProvider
                    vid="title"
                    v-slot="{ valid, errors }"
                    rules="required"
                    name="نام دسته"
                    class="feild-form"
                  >
                    <b-form-group
                      id="gTitle"
                      class="font-weight-bold"
                      label="نام دسته"
                      label-for="title"
                    >
                      <b-form-input
                        id="title"
                        v-model="form.title"
                        placeholder="نام دسته را وارد کنید"
                        :state="errors[0] ? false : valid ? true : null"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        class="pr-2"
                        id="inputLiveFeedback"
                        >{{ errors[0] }}</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </ValidationProvider>
                  <b-form-group
                    id="gParent_id"
                    class="font-weight-bold mr-0 mr-md-2 feild-form"
                    label="دسته اصلی"
                    label-for="parent_id"
                  >
                    <v-select
                      :filterable="false"
                      dir="rtl"
                      placeholder="دسته اصلی را وارد کنید"
                      :options="option"
                      v-model="form.parent_id"
                      @search="onSearch"
                      class="vueSelect"
                      label="categories"
                    >
                      <template slot="no-options">
                        دسته مورد نظر را وارد کنید
                      </template>
                      <template slot="option" slot-scope="option">
                        <div class="d-flex align-items-center">
                          {{ option.title }}
                        </div>
                      </template>
                      <template
                        slot="selected-option"
                        slot-scope="option"
                      >
                        <div class="selected d-flex align-items-center">
                          {{ option.title }}
                        </div>
                      </template>
                    </v-select>
                  </b-form-group>

                  <div class="mx-auto mt-0 mt-md-3 pt-4">
                    <Xbutton
                      is_submit
                      class="px-5"
                      style="width: 120px"
                      text="ثبت"
                      :disable="btnDisable"
                    >
                      <template #spinner>
                        <b-spinner
                          v-show="laodingRegister"
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
        </div>
      </div>
      <div class="col-12">
        <div class="row mt-4">
          <div>
            <h5 class="font-weight-bold mr-4">دسته بندی های شما</h5>
          </div>
          <div class="p-3 w-100 m-auto">
            <MoleculesXtreeCategories
              v-for="category in categories"
              :key="category.id"
              :node="category"
              type="showCategories"
            />
          </div>
        </div>
        <div class="row">
          <b-modal
            dir="rtl"
            id="deleteCatagoryModal"
            centered
            title="حذف دسته بندی"
          >
            <p class="my-4">
              آیا می خواهید دسته
              <span class="text-success font-weight-bold">
                {{ titleDelete }}
              </span>
              را حذف کنید؟
            </p>
            <template #modal-footer>
              <Xbutton
                text="انصراف"
                :on_click="() => $bvModal.hide('deleteCatagoryModal')"
                variant="info"
              ></Xbutton>
              <Xbutton
                text="تایید"
                :disable="btnDisableCategory"
                :on_click="() => confirmDeleteCategory()"
              >
                <template #spinner>
                  <b-spinner
                    v-show="loadingSpinnerCategory"
                    small
                    class="float-left"
                  ></b-spinner>
                </template>
              </Xbutton>
            </template>
          </b-modal>
          <b-modal
            dir="rtl"
            id="updateCatagoryModal"
            centered
            title="ویرایش دسته بندی"
            hide-footer
          >
            <ValidationObserver ref="updateFormCategory">
              <b-form @submit.prevent="updateCategory()">
                <div class="px-5 pt-3">
                  <ValidationProvider
                    vid="title"
                    v-slot="{ valid, errors }"
                    rules="required"
                    name="نام دسته"
                  >
                    <b-form-group
                      id="egTitle"
                      class="font-weight-bold"
                      label="نام دسته"
                      label-for="etitle"
                    >
                      <b-form-input
                        id="etitle"
                        v-model="categoryItem.title"
                        placeholder="نام دسته را وارد کنید"
                        :state="errors[0] ? false : valid ? true : null"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        class="pr-2"
                        id="inputLiveFeedback"
                        >{{ errors[0] }}</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </ValidationProvider>
                  <b-form-group
                    id="gParent_id"
                    class="font-weight-bold mr-0 mr-md-2"
                    label="دسته اصلی"
                    label-for="parent_id"
                  >
                    <v-select
                      :filterable="false"
                      id="input-select"
                      dir="rtl"
                      placeholder="دسته اصلی را وارد کنید"
                      :options="optionUpdate"
                      v-model="formUpdate.parent_id"
                      @search="onSearch"
                      item-text="title"
                      item-value="parent_id"
                      class="vueSelect"
                    >
                      <template slot="no-options">
                        دسته مورد نظر را وارد کنید
                      </template>
                      <template slot="option" slot-scope="optionUpdate">
                        <div class="d-flex align-items-center">
                          {{ optionUpdate.title }}
                        </div>
                      </template>
                      <template
                        slot="selected-option"
                        slot-scope="optionUpdate"
                      >
                        <div class="selected d-flex align-items-center">
                          {{ optionUpdate.title }}
                        </div>
                      </template>
                    </v-select>
                  </b-form-group>

                  <div class="mx-auto w-100">
                    <Xbutton
                      is_submit
                      class="px-5 w-100"
                      text="ثبت"
                      :disable="btnDisableCategory"
                    >
                      <template #spinner>
                        <b-spinner
                          v-show="loadingSpinnerCategory"
                          small
                          class="float-left"
                        ></b-spinner>
                      </template>
                    </Xbutton>
                  </div>
                </div>
              </b-form>
            </ValidationObserver>
          </b-modal>
        </div>
      </div>
    </div>
</template>
    

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { categoryService } from "@/services/apiServices";
import $lodash from "lodash";
export default {
  data() {
    return {
      form: {
        title: "",
        parent_id: null,
      },
      formUpdate: {
        title: "",
        parent_id: null,
      },
      categories: null,
      btnDisable: false,
      laodingRegister: false,
      btnDisableCategory: false,
      loadingSpinnerCategory: false,
      option: [],
      optionUpdate: [],
      categoryItem: {},
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("currentUser"));
    },
    titleDelete() {
      return this.categoryItem.title ? this.categoryItem.title : "موردنظر";
    },
  },
  layout: "main-content",
  async created() {
    if (process.client) {
      try {
        await this.getAllCategory();
      } catch (e) {
        console.log(e);
      }
      this.$nuxt.$on("actionCategory", async (payload) => {
        if (payload.type === "edit") {
          Object.assign(this.categoryItem, payload.item);
          this.optionUpdate = [];
          if (this.categoryItem.parent_id) {
            await categoryService
              .findCategory({
                categoryId: this.categoryItem.parent_id,
                token: this.$cookies.get("token"),
              })
              .then((res) => {
                this.optionUpdate.push({
                  title: res.data.data.title,
                  id: res.data.data.id,
                });

                this.formUpdate['title'] = res.data.data.title
                this.formUpdate['parent_id'] = {
                  'title' : res.data.data.title ,
                  'parent_id': res.data.data.id
                }
              });
          }else{
            this.formUpdate.parent_id= null
          }

          this.$bvModal.show("updateCatagoryModal");
        }
        if (payload.type === "delete") {
          this.categoryItem = payload.item;
          this.$bvModal.show("deleteCatagoryModal");
        }
      });
    }
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
    createCategory() {
      this.$refs.createFormCategory.validate().then((success) => {
        if (success) {
          this.laodingRegister = true;
          this.btnDisable = true;
          const data = {
            title: this.form.title,
            parent_id: this.form.parent_id ? this.form.parent_id.id : null,
            token: this.$cookies.get("token"),
          };
          categoryService.createCategory(data)
            .then((res) => {
              this.getAllCategory();
              this.$store.commit("open_toast", {
                msg: res.data.message,
                variant: "success",
              });
            })
            .catch((e) => {
              if (e.response.data.status == "error") {
                this.$store.commit("open_toast", {
                  msg: e.response.data.data.title[0],
                  variant: "error",
                });
                this.$refs.validationObserver.setErrors(e.response.data.data);
              } else {
                this.$store.commit("open_toast", {
                  msg: e.response.data.message,
                  variant: "error",
                });
              }
            })
            .finally(() => {
              this.laodingRegister = false;
              this.btnDisable = false;
            });
        }
      });
    },
    onSearch(search, loading) {
      if (search.length) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    search: $lodash.debounce((loading, search, vm) => {
      categoryService
        .searchCategory({
          userId: vm.user.id,
          search: search,
          token: vm.$cookies.get("token"),
        })
        .then((res) => {
          vm.option = res.data;
          vm.optionUpdate = res.data;
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          loading(false);
        });
    }, 450),
    async confirmDeleteCategory() {
      try {
        this.btnDisableCategory = true;
        this.loadingSpinnerCategory = true;
        await categoryService
          .deleteCategory({
            categoryId: this.categoryItem.id,
            token: this.$cookies.get("token"),
          })
          .then((res) => {
            this.getAllCategory();
            this.$store.commit("open_toast", {
              msg: res.data.message,
              variant: "success",
            });
          })
          .finally(() => {
            this.btnDisableCategory = false;
            this.loadingSpinnerCategory = false;
            this.$bvModal.hide("deleteCatagoryModal");
          });
      } catch (e) {
        this.$store.commit("open_toast", {
          msg: e.response.data.message,
          variant: "error",
        });
      }
    },
    updateCategory() {
      this.$refs.updateFormCategory.validate().then((success) => {
        if (success) {
          this.loadingSpinnerCategory = true;
          this.btnDisableCategory = true;
          let pId = null
          if(this.formUpdate.parent_id){
            if(this.formUpdate.parent_id.id){
              pId = this.formUpdate.parent_id.id
            }else{
              pId = this.formUpdate.parent_id.parent_id
            }
          }
          const payload = {
            data: {
              title: document.getElementById("etitle").value,
              parent_id: pId
            },
            categoryId: this.categoryItem.id,
            token: this.$cookies.get("token"),
          };
          categoryService
            .updateCategory(payload)
            .then((res) => {
              this.getAllCategory();
              this.$store.commit("open_toast", {
                msg: res.data.message,
                variant: "success",
              });
            })
            .catch((e) => {
              if (e.response.data.status == "error") {
                this.$store.commit("open_toast", {
                  msg: e.response.data.data.title[0],
                  variant: "error",
                });
                this.$refs.validationObserver.setErrors(e.response.data.data);
              } else {
                this.$store.commit("open_toast", {
                  msg: e.response.data.message,
                  variant: "error",
                });
              }
            })
            .finally(() => {
              this.loadingSpinnerCategory = false;
              this.btnDisableCategory = false;
              this.$bvModal.hide("updateCatagoryModal");
            });
        }
      });
    },
  },
};
</script>    


<style scoped lang="scss">
.feild-form {
  width: 35%;

  @include mx_medium {
    width: 100%;
  }
}
</style>