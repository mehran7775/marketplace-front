<template>
  <div id="app_mobile_header" class="d-flex d-md-none bg-white align-items-center justify-content-between">
    <div id="mobile_aside_menu_toggle_btn" @click="showMenu">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#a0a0a0" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
      </svg>
    </div>
    <div>
      <router-link to="/"><img src="@/assets/new/image/logo.png" alt="paystar" width="100" height="34"></router-link>
    </div>
      <div class="px-2">
        <span @click="log_out_user()" class="cursor_pointer" title="خروج">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" width="24"
                  fill="#a0a0a0" viewBox="0 0 24 24">
                <g>
                    <path d="M0,0h24v24H0V0z" fill="none"/>
                </g>
                <g>
                    <g>
                        <path
                            d="M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z"/>
                        <path
                            d="M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z"/>
                    </g>
                </g>
            </svg>
        </span>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "mobile-header",
  data() {
  },
  methods: {
    showMenu() {
      $('#app_mobile_aside').animate({width: 'toggle'}, 100);
    },
    async log_out_user(){
      try{
        this.$cookies.remove('token')
        localStorage.removeItem('userDetail')
        localStorage.removeItem('currentUser')
        const a = document.createElement('a')
        a.href = "https://my.paystar.ir/"
        a.click()
      }catch(e){
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
#new_news_badge_mobile {
  position: absolute !important;
  bottom: 18px !important;
  z-index: 60 !important;
  background-color: #00c1a4 !important;
  border-radius: 50% !important;
  color: #fff !important;
  text-align: center !important;
  width: 16px !important;
  height: 16px !important;
  opacity: 0.9 !important;
}
</style>
