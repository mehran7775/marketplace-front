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

    <h5 class="mt-3 text-dark text-center text-white-in-dark-mode" v-if="user">
      <span>{{user.first_name + ' ' + user.last_name}}</span>
    </h5>

    <hr class="sidebar_hr">

    <div class="mt-4" id="sidebar_menu">
      <ul class="list-unstyled">
          <template>
              <div>
                <li v-if="!item.in_store && ($can('manage' , item.manager) || !item.manager)" v-for="(item, index) in menu" :key="index" :class="item.url == $route.fullPath ? 'sidebar_active_item sidebar_item' : 'sidebar_item'">
                  <nuxt-link :to="(item.in_store) ? ('/' + $route.params.store_slug + item.url) : (item.url)" class="d-flex align-items-center justify-content-between">
                      <div>
                        <span v-html="item.icon"></span>
                        <span class="pr-2">{{ item.title }}</span>
                      </div>
                      <span class="ml-2 badge-counter bg-success text-white d-flex justify-content-center" v-if="inAnticipationShops && item.url === '/admin/stores'" v-text="inAnticipationShops"></span>
                      
                  </nuxt-link>
              </li>
              </div>
          </template>
          <template v-if="$route.params.store_slug">
           <div class="mt-4">
                <li v-if="item.in_store && ($can('manage' , item.manager) || !item.manager)" v-for="(item, index) in menu" :key="index" :class="'/' + $route.params.store_slug + item.url == $route.fullPath ? 'sidebar_active_item sidebar_item' : 'sidebar_item'">
                  <nuxt-link :to="'/' + $route.params.store_slug + item.url"  class="d-flex align-items-center justify-content-between">
                      <div>
                        <span v-html="item.icon"></span>
                        <span class="pr-2">{{ item.title }}</span>
                      </div>
                      <span class="ml-2 badge-counter bg-success text-white d-flex justify-content-center" v-if="inAnticipationShops && item.url === '/admin/stores'" v-text="inAnticipationShops"></span>
                      
                  </nuxt-link>
              </li>
           </div>
          </template>
      </ul>
    </div>
  </div>
</template>

<script>
import aside_menu from "@/components/main/aside.js";
export default {
   props:{
    inAnticipationShops:{
      default: ''
    },
    inMyAnticipationShops:{
      default: ''
    },
  },
  data() {
    return {
      menu: aside_menu,
    }
  },
 computed: {
    user() {
      return JSON.parse(localStorage.getItem("currentUser"));
    },
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
