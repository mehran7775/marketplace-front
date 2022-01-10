<template>
   <div>
       <v-select

      :options="languages"
      v-model="setLocale"    
      
      id="langSelect"
    ></v-select>
   </div>
</template>

<script>

export default{
    data() {
    return {
      languages: [
        { shortCode: 'en', text: 'English' },
        { shortCode: 'pl', text: 'Polski' },
        { shortCode: 'es', text: 'Español' },
        { shortCode: 'pt', text: 'Portugues' }
      ],
      fetchedLocale: '',
      setLocale: null
    };
  },
  created() {
    setTimeout(() => {
      this.fetchedLocale = 'English';
      this.setLocale = this.fetchedLocale;
    }, 1000);
  }
}

</script>