const gatewayStatus = [
    {
        text: 'فعال',
        value: 1,
        variant : 'success'
    },
    {
        text: 'در انتظار تایید',
        value: 2,
        variant : 'warning'
    },
    {
        text: 'رد شده',
        value: 3,
        variant : 'danger'
    },
    {
        text: 'مسدود',
        value: 4,
        variant : 'danger'
    },
]

const getStatus = function(status){
    return {
        text : gatewayStatus.find(o => o.value === status).text,
        variant : gatewayStatus.find(o => o.value === status).variant
    }
}

export default {
    gatewayStatus,
    getStatus
}
