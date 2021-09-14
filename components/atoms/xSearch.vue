<template>
  <div id="search">
      <input type="search" placeholder="جستوجو کنید ...">
      <fa icon="search" class="fa-lg ml-2 mr-4"></fa>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
 #search{
     width: max-content;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: whitesmoke;
     border: 2px solid rgb(190, 190, 190);
     border-radius: 10px;
     padding: 10px;
     input{
         outline: none;
         border: none;
         border-radius: 10px;
         background-color: inherit;
         padding: 0 20px;
         width: 280px;
     }
 }
</style>
