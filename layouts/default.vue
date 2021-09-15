<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="row">
          <header class="d-flex p-3">
            <div class="w-25 d-flex align-items-center" id="brand_index">
              <x-brand></x-brand>
              <span class="mr-2"><strong>فروشگاه من</strong></span>
            </div>
            <div class="w-50" id="search_index">
              <x-search class="mx-auto mt-1"></x-search>
            </div>
            <div
              class="w-25 d-flex align-items-center justify-content-center"
              id="setting_index"
            >
              <x-basket class="mx-1"></x-basket>
              <span><fa icon="cog" class="fa-lg mx-1"></fa></span>
              <span><fa icon="cog" class="fa-lg mx-1"></fa></span>
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
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
header {
    width: 100%;
  // display: flex;
  background-color: $white;

  #brand_index {
    // background-color: indigo;
  }
  #search_index {
    // background-color: lightblue;
  }
  #setting_index {
    // background-color: lightsalmon;
  }
}
</style>
