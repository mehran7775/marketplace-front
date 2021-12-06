<template>
  <header class="d-flex flex-column-reverse align-items-center d-md-flex flex-md-row">
    <div class="d-flex align-items-center" id="brand_index">
      <Xbrand :logo="detail.logo" :showStory="() => startStory()"></Xbrand>
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
            <fa  @click="hideStory()" :icon="['fa', 'times']" class="text-muted fa-2x closeStory"/>
          </span>
        </div>
        <div class="hv-center">
          <div class="story rounded">
            <div class="col h-100">
               <div class="row justify-content-center h-100">
                  <div class="w-50">
                        <div @click="changeStory('first')"><b-progress height="4px" :value="counterTime.first" variant="success"  class="mb-3 cursor_pointer" :striped="false"></b-progress></div>
                   </div>
                  <div class="w-50 pr-1">
                      <div @click="changeStory('second')"><b-progress height="4px" :value="counterTime.second" variant="success" class="mb-3 cursor_pointer" :striped="false"></b-progress></div>
                  </div>
                  <div class="col h-100">
                    <div v-show="counterTime.first >= 0 && counterTime.first <= 100 && showStory.first" @mousedown="stopCounterTime('first')" @mouseup="continueCounterTime('first')" class="row h-100">
                    <div class="col">
                      <div class="row align-items-center">
                        <Xbrand class="mx-3" :logo="detail.logo" :alt="detail.fa_name"></Xbrand>
                        <h2 class="h4">توضیحات فروشگاه</h2>
                      </div>
                      <div class="row">
                        <p class="py-2 px-5 mt-2" v-text="detail.description"></p>
                      </div>
                    </div>
                  </div>
                  <div v-show="counterTime.second >= 0 && counterTime.second <= 100 && showStory.second" @mousedown="stopCounterTime('second')" @mouseup="continueCounterTime('second')" class="row h-100">
                    <div class="col">
                      <div class="row align-items-center">
                        <Xbrand class="mx-3" :logo="detail.logo" :alt="detail.fa_name"></Xbrand>
                        <h2 class="h4">قوانین فروشگاه</h2>
                      </div>
                      <div class="row">
                        <p class="py-2 px-5 mt-2" v-text="'قوانین'"></p>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
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
      showStory:{
        first: true,
        second: false
      },
      counterTime:{
        first: 0,
        second: 0
      },
      story:{
        first: null,
        second: null
      }
    }
  },
  computed: {
    lang() {
      return tr();
    },
    ...mapGetters(["detail"])
  },
  mounted(){
    
  },
  methods:{
    startStory(){
      this.triggerStory=true
      if(this.showStory.first){
        this.story.first=setInterval(this.actionStartFirstStory,60) 
      }else if(this.showStory.second){
        this.story.second=setInterval(this.actionStartSecondStory,60) 
      }
    },
    actionStartFirstStory(){
      if(this.counterTime.first >= 100){
        clearInterval(this.story.first)
        this.showStory.first = false
        this.showStory.second = true
        this.startStory()
      }else{
         this.counterTime.first++
      }
    },
    actionStartSecondStory(){
      if(this.counterTime.second >= 100){
        setTimeout(this.hideStory,1000)
      }else{
         this.counterTime.second++
      }
    },
    stopCounterTime(name){
      clearInterval(this.story[name])
      
    },
    continueCounterTime(){
      this.startStory()
    },
    hideStory(fade= true){
      this.showStory.first= true
      this.showStory.second= false
      this.counterTime.first= 0
      this.counterTime.second= 0
      fade ? this.triggerStory= false : null
      clearInterval(this.story.first)
      clearInterval(this.story.second)

    },
    changeStory(name){
      if(name == 'first'){
        if(this.showStory.first){
          return
        }
        this.hideStory(false)
        setTimeout(this.startStory,300)
      }else{
        if(this.showStory.second){
          return
        }
        this.showStory.first= false
        this.showStory.second= true
        this.counterTime.first= 100
        this.counterTime.second= 0
        clearInterval(this.story.first)
        clearInterval(this.story.second)
         setTimeout(this.startStory,300)
      }
    }

  }
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
    width: 85vw;
    height: 80vh;
    background-color: aqua;
    background-color: $white;
    @include medium{
      width: 50vw;
    }

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
