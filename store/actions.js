import { storeService } from '@/services/apiServices'

export default {
    async nuxtServerInit ({ commit } , { route, error }) {
        if(route.params.store_slug){
            if(route.path.includes('/admin') || route.path.includes('/seller')) return
            try{
                const {data}=await storeService.getDetail(route.params.store_slug)
                commit('setToState',{
                    name: "detail",
                    data: data.data
                })
                commit("store/setToState",{
                    name: "id",
                    data:  data.data.id
                },{root:true});
            }catch(e){
                error({
                    statusCode: e.response.status,
                    message: e.response.data.message,
                });
            }
        }
    }
}