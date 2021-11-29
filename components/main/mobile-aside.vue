<template>
<div id="app_mobile_aside" style="display:none;">
  <div class="row h-100">
    <div class="col-8 h-100 shadow-sm bg-white">
      <div class="text-left m-2 pt-4" id="mobile_aside_menu_close_btn" @click="closeMenu()">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            fill="#a0a0a0"
            width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </div>
        <div class="mt-4" id="sidebar_menu">
            <ul class="list-unstyled">
                <template>
                    <li v-if="!item.in_store && ($can('manage' , item.manager) || !item.manager)" v-for="(item, index) in menu" :key="index" :class="item.url == $route.fullPath ? 'sidebar_active_item sidebar_item' : 'sidebar_item'">
                        <nuxt-link :to="(item.in_store) ? ('/' + $route.params.store_slug + item.url) : (item.url)" class="d-flex align-items-center justify-content-between">
                           <div>
                              <span v-html="item.icon"></span>
                              <span class="pr-2">{{ item.title }}</span>
                           </div>
                            <span class="ml-2 badge-counter bg-success text-white d-flex justify-content-center" v-if="InAnticipationShops && $can('manage', 'all') && item.url === '/admin/stores'" v-text="InAnticipationShops"></span>
                        </nuxt-link>
                    </li>
                </template>
                <template v-if="$route.params.store_slug">
                    <li v-if="item.in_store && ($can('manage' , item.manager) || !item.manager)" v-for="(item, index) in menu" :key="index" :class="'/' + $route.params.store_slug + item.url == $route.fullPath ? 'sidebar_active_item sidebar_item' : 'sidebar_item'">
                        <nuxt-link :to="'/' + $route.params.store_slug + item.url" class="d-flex align-items-center justify-content-between">
                            <div>
                              <span v-html="item.icon"></span>
                              <span class="pr-2">{{ item.title }}</span>
                            </div>
                            <span class="ml-2 badge-counter bg-success text-white d-flex justify-content-center" v-if="InAnticipationShops && $can('manage', 'all') && item.url === '/admin/stores'" v-text="InAnticipationShops"></span>
                        </nuxt-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
    <div class="col-4 h-100" @click="closeMenu()"></div>
  </div>
</div>
</template>

<script>
import menu from "@/components/main/aside.js";
import $ from 'jquery'
export default {
  name: "mobile-aside",
  props:{
    InAnticipationShops:{
      default: '',
      type: Number
    }
  },
  data() {
    return {
      menu : menu
    };
  },
  methods: {
    closeMenu() {
      $('#app_mobile_aside').animate({width: 'toggle'}, 100);
    }
  }
};
</script>
