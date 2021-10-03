<template>
  <div class="col">
    <div class="row justify-content-between p-4">
      <div>
        <span class="display-2 font-weight-bold">فروشگاه های من</span>
      </div>
      <nuxt-link v-if="$can('manage','create-store')"  :to="`/${$route.params.store_slug}/admin/create_store`">
        <Xbutton variant="success" class="px-4" text="فروشگاه جدید"></Xbutton>
      </nuxt-link>
    </div>
    <div class="row">
      <div v-if="stores" class="text-center w-100">
        {{stores}}
      </div>
      <div v-else class="text-center w-100">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  created() {
      this.$store.dispatch("stores/get_stores")
  },
  computed:{
    stores(){
      if(this.$store.state.stores.stores){
        return this.$store.state.stores.stores
      }
    },
    message(){
       if(this.$store.state.stores.message){
        return this.$store.state.stores.message
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
