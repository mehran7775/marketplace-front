import axios from "~/plugins/axios";

export default{
    getDetail( payload ){
        return axios.get(`/store/${payload}`)
    }
}