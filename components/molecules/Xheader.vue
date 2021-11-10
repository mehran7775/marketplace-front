<template>
  <header class="d-flex flex-column-reverse align-items-center d-md-flex flex-md-row">
    <div class="d-flex align-items-center" id="brand_index">
      <Xbrand :logo="logo"></Xbrand>
      <div class="text-right">
        <div id="name_brand">
          <h1 class="mr-4 h4" v-text="fa_name ? fa_name : 'فروشگاه من'"></h1>
        </div>
        <div class="d-md-none mt-3 mr-4">
          <fa icon="envelope"></fa>
          <span v-text="email"></span>
        </div>
        <div class="d-md-none mr-4">
          <fa icon="map-marker"></fa>
          <span v-text="address"></span>
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
          <nuxt-link :to="`/admin-customer`">
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
  </header>
</template>

<script>
import { tr } from "@/services/lang";
export default {
  props:{
      logo:{
        type:String
      },
      fa_name:{
        type:String
      },
      address:{
        type:String
      },
      email:{
        type:String
      },
  },
  computed: {
    lang() {
      return tr();
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: $white;
  padding: 1rem;
  svg {
    color: $svg_color;
    transition: color 0.2s;
    cursor: pointer;
  }

  @include mx_medium {
    padding: 1rem 0 0 0;
  }

  #brand_index {
    @include mx_medium {
      width: 100%;
      background-color: $silver;
      padding: 30px 25px;
    }

    @include medium {
      width: 25%;
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
</style>
