const orderStatus = [
    {
        text: 'درانتظار',
        value: 0,
        variant : 'secondary'
    },
    {
        text: 'ثبت شده',
        value: 1,
        variant : 'primary'
    },
    {
        text: 'درحال پردازش',
        value: 2,
        variant : 'warning'
    },
    {
        text: 'تکمیل شده',
        value: 3,
        variant : 'success'
    },
    {
        text: 'لغو شده',
        value: 4,
        variant : 'danger'
    },
]

const getStatus = function(status){
    return {
        text : orderStatus.find(o => o.value === status).text,
        variant : orderStatus.find(o => o.value === status).variant
    }
}

export default {
    orderStatus,
    getStatus
}
