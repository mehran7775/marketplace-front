<template>
  <div id="app_header" class="d-none d-md-flex bg-white align-items-center shadow-sm" style="padding-top: 3rem;padding-bottom: 3rem">
    <div class="ml-auto">
      <router-link to="/"><img src="@/assets/new/image/logo.png" alt="paystar" width="130"></router-link>
    </div>


    <div class="px-2">
      <router-link to="/user-setting" title="تنظیمات">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" width="24"
             fill="#a0a0a0" viewBox="0 0 24 24">
          <rect fill="none" height="24" width="24"/>
          <path
              d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z"/>
        </svg>
      </router-link>
    </div>
    <div class="px-2">
      <router-link to="/logout" title="خروج">
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
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "app_header",
  components: {
  },
}
</script>

<style scoped>
#new_news_badge {
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
