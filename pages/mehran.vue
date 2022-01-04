<template>
    <div>
        <client-only>
            <template v-if="onClient">
                  <div >
                    <div v-for="i in 4" :key="i">
                        i
                    </div>
                 </div>
                <div>g</div>
                <div>g</div>
                <div>g</div>
            </template>
        </client-only>
            <div>d</div>
      
    </div>
</template>

<script>
export default {
    data(){
        return{
            onClient:false
        }
    },
    created(){
        if(process.client){
            this.onClient= true
        }
    }
}
</script>