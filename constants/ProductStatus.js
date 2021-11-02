const productStatus = [
    {
        text: 'آرشیو',
        value: 0,
        variant : 'info'
    },
    {
        text: 'فعال',
        value: 1,
        variant : 'primary'
    },
    {
        text: 'مسدود شده توسط ادمین',
        value: 2,
        variant : 'danger'
    },
]

const getStatus = function(status){
    return {
        text : productStatus.find(o => o.value === status).text,
        variant : productStatus.find(o => o.value === status).variant
    }
}

export default {
    productStatus,
    getStatus
}
