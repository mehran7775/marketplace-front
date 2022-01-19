<template>
    <transition name="fade">
      <div v-if="triggerStory" id="story">
        <div class="float-left mt-3 ml-5">
          <span class="text-white">
            <fa  @click="hideStory()" :icon="['fa', 'times']" class="text-muted fa-2x closeStory"/>
          </span>
        </div>
        <div class="position-fixed te-story">
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
                    <div v-show="counterTime.first >= 0 && counterTime.first <= 100 && showStory.first" @mousedown="stopCounterTime('first')" @mouseup="continueCounterTime('first')" class="row h-100"
                        @touchstart="stopCounterTime('first')" @touchend="continueCounterTime('first')"
                    >
                    <div class="col">
                      <div class="row align-items-center">
                        <Xbrand class="mx-3" :logo="detail.logo" :alt="detail.fa_name"></Xbrand>
                        <h2 class="h4">توضیحات فروشگاه</h2>
                      </div>
                      <div class="row">
                        <p class="py-2 px-5 mt-2" v-html="detail.description"></p>
                      </div>
                    </div>
                  </div>
                  <div v-show="counterTime.second >= 0 && counterTime.second <= 100 && showStory.second" @mousedown="stopCounterTime('second')" @mouseup="continueCounterTime('second')" class="row h-100"
                     @touchstart="stopCounterTime('second')" @touchend="continueCounterTime('second')"
                  >
                    <div class="col">
                      <div class="row align-items-center">
                        <Xbrand class="mx-3" :logo="detail.logo" :alt="detail.fa_name"></Xbrand>
                        <h2 class="h4">قوانین فروشگاه</h2>
                      </div>
                      <div class="row">
                        <p class="py-2 px-5 mt-2" v-html="detail.terms"></p>
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
</template>

<script>

import { mapGetters } from 'vuex'

export default{

 props:{
    destroy: {
        type:Function
    },
 },
 data(){
    return{
      triggerStory:false,
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
  created(){
      document.body.style.overflowY = "hidden"
      this.startStory()
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
      fade ? this.destroy(false) : null
      document.body.style.overflowY = "auto"

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

  },
  computed:{
    ...mapGetters(["detail"])
  }

}

</script>

<style scoped lang="scss">
#story{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height: 100%;
  background: $back_dark;
  z-index: 99999;

  .te-story{
    top: 50%;  
    left: 50%;  
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%); /* for IE 9 */
    -webkit-transform: translate(-50%, -50%); /* for Safari */
    .story{
        width: 85vw;
        height: 50vh;
        background-color: $white;
        @include medium{
            width: 50vw;
        }
    }
  }

 
  .closeStory:hover{
    color: white!important;
  }
  
}

</style>