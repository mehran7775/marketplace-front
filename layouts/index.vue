<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Nuxt />
      </div>
    </div>
    <MoleculesXsidebarBottom></MoleculesXsidebarBottom>    
    <!-- <MoleculesXmodal title="انتخاب روش پرداخت" :id="'select-getways'" hideFooter>
      <template #content-modal>
        <div class="row">
          <div v-for="gateway in gateways" :key="gateway.id" class="col-12">
            <div class="getways">
              <input
                class="mr-4"
                type="radio"
                name="getway"
                :value="gateway.id"
                :ref="gateway.id"
                :id="gateway.id"
              />
              <img width="24" height="24" :src="gateway.logo" class="mr-2">
              <label :for="gateway.id"><span class="mr-1" v-text="`درگاه پرداخت ${gateway.title}`"></span></label>
            </div>
          </div>
          <div class="col-12 text-center">
            <Xbutton
              :on_click="do_payment"
              class="icon-getway"
              text="پرداخت"
            ></Xbutton>
          </div>
        </div>
      </template>
    </MoleculesXmodal> -->
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
