import axios from "~/plugins/axios";

export default{
    getDetail( payload ){
        return axios.get(`/store/${payload}`)
    },
    getMyWaiting( payload ){
        return axios.get(`/store/my/count`,{
            headers:{
                "authorization":`Bearer ${ payload }`
            }
        })
    },
    getAllWaiting( payload ){
        return axios.get(`/store/count`,{
            headers:{
                "authorization":`Bearer ${ payload }`
            }
        })
    }
}