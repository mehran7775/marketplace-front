<template>
  <header class="d-flex flex-column-reverse align-items-center d-md-flex flex-md-row">
    <div class="d-flex align-items-center" id="brand_index">
      <Xbrand :logo="detail.logo" :showStory="() => triggerStory=true"></Xbrand>
      <div class="text-right">
        <div id="name_brand">
          <h1 class="mr-4 h4 text-dark font-weight-bold" v-text="detail.fa_name ? detail.fa_name : 'فروشگاه من'"></h1>
        </div>
        <div class="mr-4" v-if="setDetail">
          <fa icon="map-marker"></fa>
          <span class="mr-1" v-text="detail.province"></span>
        </div>
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
          <nuxt-link :to="`/panel-customer`">
            <span
              ><fa
                icon="user"
                class="mx-1 icom_bto_menu"
                :title="lang.svg.panel"
                size="lg"
              ></fa
            ></span>
          </nuxt-link>
        </template>
        <template v-else>
          <nuxt-link :to="`/signin`">
            <span
              ><fa
                icon="user"
                class="mx-1 icom_bto_menu"
                :title="lang.svg.signin"
                size="lg"
              ></fa
            ></span>
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
      <div v-if="triggerStory" id="story">
        <div class="float-left mt-3 ml-5">
          <span class="text-white">
            <fa  @click="triggerStory=false" :icon="['fa', 'times']" class="text-muted fa-3x closeStory"/>
          </span>
        </div>
        <div class="hv-center">
          <div class="story rounded">
            <client-only>
              <carousel
                :rtl="true"
                v-bind="options"
                pagination-color="#dee2e6"
                pagination-active-color="#00c1a4"
                pagination-padding="2"
              >
                <slide class="img-wrapper p-4">
                 <div>
                   <h2 class="h5 font-weight-bold">توضیحات فروشگاه:</h2>
                   <p v-text="detail.description"></p>
                 </div>
                </slide>
                <slide class="img-wrapper p-4">
                 <div>
                   <h2 class="h5 font-weight-bold">قوانین فروشگاه:</h2>
                   <p></p>
                 </div>
                </slide>
              </carousel>
            </client-only>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { tr } from "@/services/lang";
import { mapGetters } from 'vuex'

export default {
  props:{
      setDetail:{
        type:Boolean,
        default: true
      },
  },
  data(){
    return{
      triggerStory: false,
      options: {
        loop: false,
        paginationEnabled: false,
        perPage: 1,
        centerMode: true,
        navigationEnabled:true,
        navigationNextLabel:'',
        navigationPrevLabel:'',
      },
    }
  },
  computed: {
    lang() {
      return tr();
    },
    ...mapGetters(["detail"])
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
  @include medium {
    box-shadow: 0 0 6px 0 $silver;
    border-bottom: 1px solid $silver;
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
      width: 34%;
    }
    svg{
      color: $success;
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
#story{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height: 100%;
  background: $back_dark;
  z-index: 9999;
  .story{
   @include medium{
    max-width: 550px;
    min-width: 500px;
   }
    max-width: 350px;
    min-width: 330px;
    height: 80vh;
    background-color: whitesmoke;

    .img-wrapper {
      height: 80vh;
    }
  }
  .closeStory:hover{
    color: white!important;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
