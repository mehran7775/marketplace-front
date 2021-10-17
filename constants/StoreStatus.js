const storeStatus = [
    {
        text: 'مسدود',
        value: 2,
        variant : 'danger'
    },
    {
        text: 'فعال',
        value: 1,
        variant : 'info'
    },
    {
        text: 'در انتظار تایید',
        value: 0,
        variant : 'warning'
    },
    {
        text: 'غیرفعال',
        value: 3,
        variant : 'danger'
    },
]

const getStatus = function(status){
    return {
        text : storeStatus.find(o => o.value === status).text,
        variant : storeStatus.find(o => o.value === status).variant
    }
}

export default {
    storeStatus,
    getStatus
}
