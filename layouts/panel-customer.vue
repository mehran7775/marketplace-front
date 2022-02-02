<template>
  <div class="container-fluid">
    <client-only v-if="onClient">
      <div class="row">
        <div class="col-12 position-sticky" id="header" style="top:0;z-index:1000;">
          <div class="row " >
            <div class="container-xl py-2 containerMe">
              <div
                class="d-flex align-items-center justify-content-between py-3 px-2"
              >
                <div  id="info-side" class="d-flex align-items-center ">
                  <div class="d-block d-md-none">
                    <span v-b-toggle.sidebar-right>
                      <fa icon="bars" class="fa-2x cursor_pointer"></fa>
                    </span>
                    <b-sidebar
                      id="sidebar-right"
                      title="Sidebar"
                      right
                      shadow
                      no-header
                    >
                      <div class="col">
                        <div class="row">
                          <div class="w-100 text-left pl-3 pt-3">
                            <span v-b-toggle.sidebar-right>
                              <fa
                                icon="times"
                                class="fa-2x cursor_pointer"
                              ></fa>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="row mt-5 pt-5">
                          <ul class="list-unstyled w-100 p-0 m-0 text-center">
                            <li class="h5">
                              <nuxt-link to="/customers/profile"
                                >پروفایل</nuxt-link
                              >
                            </li>
                            <li class="h5">
                              <nuxt-link to="/customers/orders"
                                >سفارش های من</nuxt-link
                              >
                            </li>
                            <li class="h5">
                              <span @click="logOut()" class="text-whitesmok cursor_pointer">خروج</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </b-sidebar>
                  </div>
                  <div
                    class="mr-3 rounded-lg border border-secondary py-2 px-3"
                  >
                    <fa icon="user" class="fa-lg"></fa>
                    <span
                      v-text="get_user_name()"
                    ></span>
                  </div>
                </div>
                <div class="logo d-none d-md-block">
                  <a :href="addresses.paystar"
                    ><img width="100"
                      :src="`${addresses.paystar}/homepage/image/logo.svg`"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="container-xl containerMe">
              <div class="row">
                <div class="w-100 d-flex">
                  <div class="aside d-none d-md-block">
                    <div class="position-fixed asideFixed">
                      <div class="vh-100 ">
                        <div class="mt-5 pt-5">
                          <ul class="list-unstyled w-100 p-0 m-0 text-center">
                            <li class="h5">
                              <nuxt-link to="/customers/profile"
                                >پروفایل</nuxt-link
                              >
                            </li>
                            <li class="h5">
                              <nuxt-link to="/customers/orders"
                                >سفارش های من</nuxt-link
                              >
                            </li>
                            <li class="h5">
                              <span @click="logOut()" class="cursor_pointer text-whitesmok">خروج</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="body-content">
                    <div class="col">
                      <transition name="fade">
                        <Nuxt />
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { authService } from '~/services/apiServices'
import addresses from '@/constants/addresses'
export default {
  middleware:'checkAuth',
  head() {
    return {
      title: "فروشگاه ساز پی استار",
    };
  },
  data() {
    return {
      onClient: false,
    };
  },

  async created() {
    if (process.client) {
      this.setDetail()
      this.onClient = true;
    }
  },
  computed:{
    user_data(){
      return JSON.parse(localStorage.getItem('userDetail'))
    },
    addresses(){
      return addresses
    }
  },
  methods:{
    async setDetail(){
      try{
          const {data}= await authService.currentUser( this.$cookies.get('token-buyer'))
          localStorage.setItem('userDetail',JSON.stringify( data.data ))
      }catch(e){
          this.$store.commit('open_toast',{
              msg: e.response.data.message,
              variant:'error'
          })
      }
    },
    logOut(){ 
      try{
        const res = authService.logOut(this.$cookies.get('token-buyer'))
        this.$cookies.remove('token-buyer')
        localStorage.removeItem('userDetail')
        this.$router.replace('/landing')
      }catch(e){
        console.log(e)
      }
    },
    get_user_name(){
      if(!this.user_data.first_name || !this.user_data.last_name){
        return this.user_data.phone
      }
      return `${this.user_data.first_name} ${this.user_data.last_name}`
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  background-color: $silver;
   border-bottom: 1px solid $border;

  #info-side{
      width: auto;
      @include mx_medium{
          width: 100%;
          justify-content: space-between;
      }
  }
}
.containerMe {
  @include xlarge {
    max-width: 1500px !important;
  }
}
.aside{
  width: 200px;
  
}
.body-content{
  width: 100%;
  @include medium{
    width: calc(100% - 200px);

  }
}
.asideFixed{
  border-left: 1px solid $border;
  width: 200px;
  background-color: $silver;

}
.aside ul li,#sidebar-right ul li{
  color: $secondary;
}
 .nuxt-link-exact-active , .nuxt-link-active {
     color: $success!important;
 }
</style>