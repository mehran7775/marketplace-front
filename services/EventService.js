// import axios from '~/plugins/axios'
import axios from 'axios'

const apiClient = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:8000',
    withCredentials: false,
    headers: {
        common: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }
})

export default {

    getProducts() {
        return apiClient.get(`/products`)
    },
    getProduct(id) {
        return apiClient.get(`/products/${id}`)
    },
    checkExistProduct(id) {
        return apiClient.post('/check-product-exist', id, null)
    }

}
