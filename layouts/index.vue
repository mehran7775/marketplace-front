<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col">
        <div class="row">
         <!-- <LazyMoleculesXheader /> -->
         <MoleculesXheader></MoleculesXheader>
        </div>
        <div class="row">
          <Nuxt />
        </div>
      </div>
    </div>
    <div id="setting_index2" class="d-block d-md-none">
      <div id="bottom_menu">
        <div class="bottom_menu">
          <nuxt-link to="/basket">
            <Xbasket class="mx-1 d-flex"></Xbasket>
          </nuxt-link>
        </div>
        <div class="bottom_menu">
          <nuxt-link to="/">
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
          <nuxt-link to="/settings">
            <span
              ><fa
                icon="cog"
                class="mx-1 icom_bto_menu"
                :title="lang.svg.settings"
              ></fa
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
