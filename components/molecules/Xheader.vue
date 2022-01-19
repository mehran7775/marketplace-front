<template>
  <div class="container-xl">
    <div class="row">
      <header class="d-flex flex-column-reverse align-items-center d-md-flex flex-md-row">
        <div class="d-flex flex-row align-items-center justify-content-between" id="brand_index">
          <div class="d-flex align-items-center w-100">
            <Xbrand :logo="detail.logo" :showStory="() => triggerStory = true"></Xbrand>
            <div class="d-flex flex-column" id="detailStore">
              <div id="name_brand">
                <h1 class="mr-4 h4 text-dark font-weight-bold" v-text="detail.fa_name ? detail.fa_name : 'فروشگاه من'"></h1>
              </div>
              <div class="mr-4" v-if="setDetail">
                <div class="row">
                    <div v-if="!detail.store_option.show_province_option && detail.province && calProvince" class="col-7">
                        <fa icon="map-marker"></fa>
                        <span class="mr-1" v-text="calProvince"></span>
                   </div>
                  <div  v-if="detail.store_option.show_email_option" class="col-12">
                      <fa icon="envelope"></fa>
                      <span class="mr-1" v-text="detail.email"></span>
                  </div>
                </div>
              </div>          
      
            </div>
          </div>
          <div class="d-flex align-items-center flex-wrap">
            <router-link v-if="detail.social_page.instagram" :to="detail.social_page.instagram ? detail.social_page.instagram : '#'" class="mx-2"  v-b-tooltip.hover.top title="اینستاگرام">
              <fa :icon="['fab','instagram']" class="fa-lg" ></fa>
            </router-link>
            <router-link v-if="detail.social_page.whatsapp" :to="detail.social_page.whatsapp ? detail.social_page.whatsapp: '#'" class="mx-2" v-b-tooltip.hover.top title="واتساپ">
              <fa :icon="['fab','whatsapp']" class="fa-lg"></fa>
            </router-link>
            <router-link v-if="detail.social_page.telegram" :to="detail.social_page.telegram ? detail.social_page.telegram: '#'" class="mx-2" v-b-tooltip.hover.top title="تلگرام">
              <fa :icon="['fab','telegram']" class="fa-lg"></fa>
            </router-link>
            <router-link v-if="detail.social_page.aparat" :to="detail.social_page.aparat ? detail.social_page.aparat: '#'" class="mx-2"  v-b-tooltip.hover.top title="آپارات">
               <svg fill="#00c1a4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="18px" height="18px"><path d="M 15.173828 2.609375 C 11.917119 2.5264688 8.94875 4.7335781 8.1875 8.0332031 L 7.078125 12.837891 C 10.172125 7.7938906 15.497719 4.4664844 21.386719 3.8964844 L 16.582031 2.7871094 C 16.110656 2.6782344 15.639072 2.6212187 15.173828 2.609375 z M 24 7 C 14.628921 7 7 14.628928 7 24 C 7 33.371072 14.628921 41 24 41 C 33.371079 41 41 33.371072 41 24 C 41 14.628928 33.371079 7 24 7 z M 35.162109 7.078125 C 40.206109 10.172125 43.533516 15.497719 44.103516 21.386719 L 45.212891 16.582031 C 46.083891 12.811031 43.737797 9.0575 39.966797 8.1875 L 35.162109 7.078125 z M 24 10 C 31.74976 10 38 16.250245 38 24 C 38 31.749755 31.74976 38 24 38 C 16.25024 38 10 31.749755 10 24 C 10 16.250245 16.25024 10 24 10 z M 20.228516 13.697266 A 3.5 3.5 0 1 0 20.228516 20.697266 A 3.5 3.5 0 1 0 20.228516 13.697266 z M 30.802734 16.728516 A 3.5 3.5 0 1 0 30.802734 23.728516 A 3.5 3.5 0 1 0 30.802734 16.728516 z M 24 22.001953 A 1.999 1.999 0 1 0 24 25.998047 A 1.999 1.999 0 1 0 24 22.001953 z M 17.197266 24.271484 A 3.5 3.5 0 1 0 17.197266 31.271484 A 3.5 3.5 0 1 0 17.197266 24.271484 z M 3.8964844 26.615234 L 2.7871094 31.419922 C 1.9171094 35.190922 4.2622031 38.943453 8.0332031 39.814453 L 12.837891 40.923828 C 7.7948906 37.829828 4.4664844 32.504234 3.8964844 26.615234 z M 27.771484 27.302734 A 3.5 3.5 0 1 0 27.771484 34.302734 A 3.5 3.5 0 1 0 27.771484 27.302734 z M 40.923828 35.162109 C 37.829828 40.205109 32.504234 43.533516 26.615234 44.103516 L 31.419922 45.212891 C 35.190922 46.082891 38.943453 43.737797 39.814453 39.966797 L 40.923828 35.162109 z"/></svg>
            </router-link>
          </div>
        </div>
        <div id="search_index">
          <Xsearch class="mx-auto mt-1"></Xsearch>
        </div>
        <div class="d-none d-md-block w-25">
          <div
            class="d-flex align-items-center justify-content-center"
            id="setting_index"
          >
            <nuxt-link :to="`/${$route.params.store_slug}/cart`"> <Xbasket class="mx-1"></Xbasket></nuxt-link>
            <template v-if="$cookies.get('token-buyer')">
              <nuxt-link to="/customers">
                <span
                  ><fa
                    icon="user"
                    class="mx-1 icom_bto_menu"
                    title="پنل کاربری"
                    size="lg"
                  ></fa
                ></span>
              </nuxt-link>
            </template>
            <template v-else>
              <nuxt-link :to="`/login`">
                <span>
                  <fa :icon="['fas' , 'sign-in-alt']" class="mx-1"
                  title="ورود"
                  size="lg"></fa>
                </span>
              </nuxt-link>
            </template>
            <nuxt-link :to="`/${$route.params.store_slug}`">
              <span
                >
              <fa icon="home" size="lg"></fa>
              </span>
            </nuxt-link>
          </div>
        </div>
        <transition name="fade">
          <LazyMoleculesXstory v-if="triggerStory" :destroy="(value) => triggerStory= value" />
        </transition>
      </header>
    </div>
  </div>
  
</template>

<script>

import { tr } from "@/services/lang";
import { mapGetters } from 'vuex'
import {provinces} from "~/constants/Provinces";
import { fa } from '~/lang/fa';
export default {
  props:{
      setDetail:{
        type:Boolean,
        default: true
      },
  },
 data(){
    return{
      triggerStory:false,
      provinces
    }
  },
  computed: {
    lang() {
      return tr();
    },
    ...mapGetters(["detail"]),
    calProvince(){  
      const p = this.provinces.find(({id}) =>{
        return id == this.detail.province
      })
      if(p){
        return p.value
      }
      return false
    }
  },

};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: $white;
  padding: 1rem;
  height: 100px;
  svg {
    color: $svg_color;
    transition: color 0.2s;
    cursor: pointer;
  }

  
  @include mx_medium {
    padding: 1rem 0 0 0;
    height: 160px;
  }

  #brand_index {
    @include mx_medium {
      width: 100%;
      background-color: $silver;
      padding: 15px 25px;
    }

    @include medium {
      width: 36%;
    }
    svg{
      color: $success;
    }
    #detailStore{
      width: calc(100% - 60px);
    }
  }
  #search_index {
    @include mx_medium {
      width: 100%;
      margin-bottom: 1rem;
    }
    
    @include medium {
      width: 50%;
    }
  }

  #setting_index {
    svg:hover {
      color:black;
    }
  }

  a {
  text-decoration: none;
  color: inherit;
  }
}
</style>
