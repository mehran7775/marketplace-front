import { storeService } from '@/services/apiServices'
export default {
    async nuxtServerInit ({ commit } , { route }) {
        const {data}=await storeService.getDetail(route.params.store_slug)
        commit('setToState',{
            name: "detail",
            data: data.data
        })
        commit("store/setToState",{
            name: "id",
            data:  data.data.id
        },{root:true});
      }
}