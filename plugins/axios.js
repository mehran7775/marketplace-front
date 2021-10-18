export default function ({
    $axios,
    store,
    redirect
}) {
    $axios.onRequest(config => {
        // config.headers.common = {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        // }
        // if (store.state.authToken) {
        //     config.headers.common['Authorization'] = store.state.authToken
        // }
    })
    // $axios.onError(error => {
    //     const code = parseInt(error.response && error.response.status)
    //     if (code === 401) {
    //         redirect('/')
    //     }
    // })

}
