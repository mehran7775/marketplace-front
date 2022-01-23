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
          <nuxt-link to="/customers">
            <span
              ><fa
                icon="user"
                class="mx-1 icom_bto_menu"
                :title="lang.svg.panel"
              ></fa
            ></span>
          </nuxt-link>
        </template>
        <template v-else>
          <nuxt-link to="/customer-login">
            <span>
                <fa :icon="['fas' , 'sign-in-alt']" class="mx-1"
                  title="ورود"
                  size="lg"></fa>
            </span>
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
  height: 50px;
  box-shadow: 0 0 4px 2px rgba(228, 227, 227, 0.588);

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