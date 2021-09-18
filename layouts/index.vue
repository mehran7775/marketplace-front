<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col">
        <div class="row">
          <header class="d-flex flex-column-reverse d-md-flex flex-md-row">
            <div class="d-flex align-items-center" id="brand_index">
              <x-brand></x-brand>
              <div class="text-right">
                <div id="name_brand">
                  <h1 class="mr-4">فروشگاه من</h1>
                </div>
                <div class="d-md-none mt-3 mr-4">
                  <fa icon="envelope"></fa>
                  <span>test@gmail.com</span>
                </div>
                <div class="d-md-none mr-4">
                  <fa icon="map-marker"></fa>
                  <span>ادرس خیابان محمدعلی کلی</span>
                </div>
              </div>
            </div>
            <div id="search_index">
              <x-search class="mx-auto mt-1"></x-search>
            </div>
            <div class="d-none d-md-block w-25">
              <div
                class="d-flex align-items-center justify-content-center"
                id="setting_index"
              >
                <nuxt-link to="/basket">
                  <x-basket class="mx-1"></x-basket
                ></nuxt-link>
                <nuxt-link to="/settings">
                  <span
                    ><fa
                      icon="cog"
                      class="fa-lg mx-1"
                      :title="lang.svg.settings"
                    ></fa
                  ></span>
                </nuxt-link>
                <nuxt-link to="/">
                  <span
                    ><fa
                      icon="home"
                      class="fa-lg mx-1"
                      :title="lang.svg.home"
                    ></fa
                  ></span>
                </nuxt-link>
              </div>
            </div>
          </header>
        </div>
        <div class="row">
          <Nuxt />
        </div>
        <div class="row">
          <div class="col">
            <footer>footer</footer>
          </div>
        </div>
      </div>
    </div>
    <div id="setting_index2" class="d-block d-md-none">
      <div id="bottom_menu">
        <div class="bottom_menu">
          <nuxt-link to="/basket">
            <x-basket class="mx-1 d-flex"></x-basket>
          </nuxt-link>
        </div>
        <div class="bottom_menu">
          <nuxt-link to="/">
            <span
              ><fa icon="home" class="mx-1 icom_bto_menu" :title="lang.svg.home"></fa
            ></span>
          </nuxt-link>
        </div>
        <div class="bottom_menu">
          <nuxt-link to="/settings">
            <span
              ><fa icon="cog" class="mx-1 icom_bto_menu" :title="lang.svg.settings"></fa
            ></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from "@/services/lang";
export default {
  data() {
    return {
      structuredData: {
        "@context": "https://schema.org",
        "@type": "HardwareStore",
        name: "فروشگاه ساز رایگان",
        image: "",
        "@id": "https://www.shop.paystar.com",
        url: "https://www.shop.paystar.com",
        telephone: "021-91300818",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "تهران، میدان ونک، خیابان ملاصدرا، خیابان پردیس، پلاک ۷، مرکز نوآوری نصیر",
          addressLocality: "تهران",
          postalCode: "",
          addressCountry: "IR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "35.718997899432594",
          longitude: "51.44842462379313",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Sunday",
            "Saturday",
            "Thursday",
            "Wednesday",
            "Tuesday",
            "Monday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
      },
    };
  },
  head() {
    return {
      titleTemplate: "فروشگاه ساز رایگان - %s",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "فروشگاه ساز رایگان ارائه کننده خدمات مختلف ",
        },
      ],
      script: [{ type: "application/ld+json", json: this.structuredData }],
    };
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
      background-color: whitesmoke;
      padding: 1rem;
      //   span {
      //     margin-bottom: 2rem;
      //     padding-right: 0.5rem;
      //   }
    }

    @include medium {
      width: 25%;
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
    // background-color: lightblue;
  }
  #setting_index {
    svg:hover {
      color: black;
    }
  }
}
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
      .icom_bto_menu{
          @include mx_medium{
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
