<template>
  <div class="container-fluid">
    <div class="row" id="header-layout">
      <MoleculesXheader
      ></MoleculesXheader>
    </div>
    <div class="row">
      <div class="col">
        <transition name="fade">
          <Nuxt/>
        </transition>
      </div>
    </div>
    <MoleculesXsidebarBottom />
  </div>
</template>

<script>
import { tr } from "@/services/lang";
import addresses from '@/constants/addresses'
export default {
  data() {
    return {
      structuredData: {
        "@context": "https://schema.org",
        "@type": "HardwareStore",
        name: "فروشگاه ساز رایگان",
        image: "",
        "@id": addresses.paystar,
        url: addresses.paystar,
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
      titleTemplate: "پی استار -%s",
      script: [{ type: "application/ld+json", json: this.structuredData }],
    };
  },
  computed: {
    lang() {
      return tr();
    },
  },
  mounted(){
    $nuxt.$on('show-checkout', (data) => {
      console.log(data)
      document.getElementById("gatewayId").value=data.data.order_id
    })
  }
};
</script>

<style lang="scss" scoped>
#header-layout{
  background-color: $white;
  @include medium {
    box-shadow: 0 0 6px 0 $silver;
    border-bottom: 1px solid $silver;
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
