<template>
  <div id="setting_index2" class="d-block d-md-none">
    <div id="bottom_menu">
      <div class="bottom_menu">
        <nuxt-link :to="`/${$route.params.store_slug}/cart`">
          <Xbasket class="mx-1 d-flex"></Xbasket>
        </nuxt-link>
      </div>
      <div class="bottom_menu">
        <nuxt-link :to="`/${$route.params.store_slug}`">
          <span
            ><fa
              icon="home"
              class="mx-1 icom_bto_menu"
              :title="lang.svg.home"
            ></fa
          ></span>
        </nuxt-link>
      </div>
      <div class="bottom_menu">
        <template v-if="$cookies.get('token-buyer')">
          <nuxt-link :to="`/admin-customer`">
            <span
              ><fa
                icon="user"
                class="mx-1 icom_bto_menu"
                :title="lang.svg.settings"
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
                :title="lang.svg.settings"
              ></fa
            ></span>
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from "@/services/lang";
export default {
  computed: {
    lang() {
      return tr();
    },
  },
};
</script>

<style scoped lang="scss">
#setting_index2 {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: whitesmoke;
  box-shadow: 1px 4px 8px 0 rgb(228, 227, 227);

  #bottom_menu {
    display: flex;
    align-items: center;
    .bottom_menu {
      width: 33.33%;
      text-align: center;
      svg {
        color: $svg_color;
        transition: color 0.2s;
        cursor: pointer;
      }
      svg:hover {
        color: black;
      }
      .icom_bto_menu {
        @include mx_medium {
          font-size: 1.5rem;
        }
      }
    }
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>