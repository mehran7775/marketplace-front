<template>
  <div class="container-fluid">
    <div class="row mb-4">
      <div class="col">
        <div class="row">
          <MoleculesXheader :logo="logo" :fa_name="fa_name"></MoleculesXheader>
        </div>
        <div class="row pb-5">
          <Nuxt />
        </div>
      </div>
    </div>
    <MoleculesXsidebarBottom></MoleculesXsidebarBottom>
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
      logo: "",
      fa_name: "",
      
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
   async fetch() {
    try {
      const res= await this.$axios.get(
        `/store/${this.$route.params.store_slug}`
      )
      this.$store.commit("payments/set_getways", res.data.getways);
      this.$store.commit("stores/set_id", res.data.id);
      this.logo = res.data.logo;z
      this.fa_name = res.data.fa_name;
    } catch (e) {

      console.log(e.response)
    }
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
