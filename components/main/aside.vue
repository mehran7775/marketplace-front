<template>
  <div id="app_aside" class="d-none d-md-flex flex-column bg-white shadow-sm">
    <div class="mx-auto mt-5">
      <div>
        <img src="@/assets/new/image/user.jpg" alt="user" width="100" height="100"
            class="rounded-circle border border-success p-1"
            style="border-width: 3px !important; border-color: #00bea5 !important;">
      </div>
      <div
          id="add_profile_pic"
          class="h3"
          title="افزودن عکس">
        <i class="fas fa-plus"
          style="cursor: pointer !important;">
        </i>
      </div>

    </div>

    <h5 class="mt-3 text-dark text-center text-white-in-dark-mode">
      <span>حقیقی</span>
    </h5>

    <hr class="sidebar_hr">

    <div class="mt-4" id="sidebar_menu">
      <ul class="list-unstyled">
        <li v-for="(item, index) in menu" :key="index" :class="item.url == $route.fullPath ? 'sidebar_active_item sidebar_item' : 'sidebar_item'">
          <router-link :to="item.url">
            <span v-html="item.icon"></span>
            <span class="pr-2">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mt-auto mx-3">
      <router-link to="/tickets" :class="'btn btn-block btn-outline-secondary rounded-pill'">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24"
             fill="#a0a0a0" width="24">
          <g>
            <rect fill="none" height="24" width="24"/>
          </g>
          <g>
            <g>
              <path
                  d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"/>
              <circle cx="9" cy="13" r="1"/>
              <circle cx="15" cy="13" r="1"/>
              <path
                  d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"/>
            </g>
          </g>
        </svg>
          <span class="pr-2 text-secondary">آموزش و پشتیبانی</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import aside_menu from "@/components/main/aside.js";

export default {
  data() {
    return {
      menu: aside_menu
    }
  },
  methods: {
  },
}
</script>

<style scoped>
#add_profile_pic {
  height: 1px;
  width: 60px;
  text-align: center;
  position: relative;
  margin: auto;
  border-radius: 10px;
  top: -50px;
  right: 0px;
  color: #00bea5;
}
</style>
