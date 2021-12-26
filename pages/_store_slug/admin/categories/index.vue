<template>
  <client-only v-if="onClient">
    <div class="row">
      <div class="col-12">
        <MainPageTitle title_text="دسته بندی ها" icon="dashboard" />
      </div>
      <div class="col-12">
        <div class="row">
          <div id="form" class="py-3 px-4 w-100">
            <ValidationObserver ref="createFormCategory">
              <b-form @submit.prevent="createCategory()" vid="title">
                <legend class="h5 font-weight-bold">ایجاد دسته بندی</legend>
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
                      label="countryName"
                      :options="option"
                      v-model="form.parent_id"
                      @search="onSearch"
                      class="vueSelect"
                    >
                      <template slot="no-options">
                        دسته مورد نظر را وارد کنید
                      </template>
                      <template slot="option" slot-scope="option">
                        <div class="d-flex align-items-center">
                          {{ option.full_name }}
                        </div>
                      </template>
                      <template slot="selected-option" slot-scope="option">
                        <div class="selected d-flex align-items-center">
                          {{ option.full_name }}
                        </div>
                      </template>
                    </v-select>
                  </b-form-group>

                  <div class="mx-auto mt-0 mt-md-4 pt-3">
                    <Xbutton
                      is_submit
                      class="px-5"
                      style="width: 100px"
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
            <div><h5 class="font-weight-bold mr-4">دسته بندی های شما</h5></div>
          <div class="p-3 w-100 m-auto">
              <MoleculesXthreeCategories v-for="node in nodes" :key="node.id" :node="node" />
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>
    

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { userService,categoryService } from "@/services/apiServices";
export default {
  data() {
    return {
      onClient: false,
      user: null,
      form: {
        title: "",
        parent_id: null,
      },
      categories: null,
      btnDisable: false,
      laodingRegister: false,
      option: [],
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  layout: "main-content",
  async created() {
    if (process.client) {
      try {
        const data = await userService.userCurrent(this.$cookies.get("token"))
        this.user = data.data.data;
         const res = await categoryService.findCategory({
             userId:this.user.id,
             token:this.$cookies.get("token")
         });
        // const allCategories = await api.get(`category/${this.user.id}`, {
        //   headers: {
        //     Authorization: "Bearer " + this.$cookies.get("token"),
        //   },
        // });
        this.categories = res.data.data;
        this.onClient = true;
      } catch (e) {
        console.log(e);
      }
    }
  },
  methods: {
    createCategory() {
      this.$refs.createFormCategory.validate().then((success) => {
        if (success) {
          try {
            api.post("category/create", this.form, {
              headers: {
                Authorization: "Bearer " + this.$cookies.get("token"),
              },
            });
          } catch (e) {
            if (e.response.data.status === "error") {
              this.$refs.validationObserver.setErrors(e.response.data.data);
              return;
            } else {
              this.$store.commit(
                "open_toast",
                {
                  msg: e.response.data.message,
                  variant: "error",
                },
                { root: true }
              );
            }
          }
        }
      });
    },
    onSearch(search, loading) {
      if (search.length) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    async search(loading, search, vm) {
      await api
        .get(`category/${this.user.id}/search?q=${escape(search)}`)
        .then((res) => {
          console.log(res);
          this.option = res.data.items;
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(()=>{
            loading(false);
        })
    },
  },
   computed: {
    nodes() {
      return [
        {
          id: 1,
          label: 'Foods',
          children: [
            {
              id: 2,
              label: 'Fruits',
              children: [
                {
                  id: 3,
                  label: 'Banana'
                },
                {
                  id: 4,
                  label: 'Apple'
                },
                {
                  id: 5,
                  label: 'Strawberry'
                }
              ]
            },
            {
              id: 6,
              label: 'Vegetables',
              children: [
                {
                  id: 7,
                  label: 'Carrot'
                },
                {
                  id: 8,
                  label: 'Lettuce'
                },
                {
                  id: 9,
                  label: 'Potato'
                }
              ]
            }
          ]
        },
        {
          id: 10,
          label: 'Drinks',
          children: [
            {
              id: 11,
              label: 'Beers',
              children: [
                {
                  id: 12,
                  label: 'Budweiser'
                },
                {
                  id: 13,
                  label: 'Heineken'
                }
              ]
            },
            {
              id: 14,
              label: 'Wines'
            },
            {
              id: 15,
              label: 'Whiskey'
            }
          ]
        }
      ]
    }
  }
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