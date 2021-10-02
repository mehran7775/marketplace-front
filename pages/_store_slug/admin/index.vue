<template>
  <div class="col">
    <div class="row justify-content-between p-4">
      <div>
        <span class="display-2 font-weight-bold">فروشگاه های من</span>
      </div>
      <div>
        <Xbutton variant="success" class="px-4" text="فروشگاه جدید"></Xbutton>
      </div>
    </div>
    <div class="row">
      <div v-if="stores.length> 0">
        {{stores}}
      </div>
      <div v-else>
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
      if(this.$store.state.stores){
        return this.$store.state.stores
      }
    },
    message(){
       if(this.$store.state.message){
        return this.$store.state.message
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
