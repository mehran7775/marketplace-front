const userStatus = [
    {
        text: 'فعال',
        value: 0,
        variant : 'info'
    },
    {
        text: 'مسدود',
        value: 1,

        variant : 'danger'
    },
    {
        text: 'در انتظار تایید',
        value: 2,
        variant : 'warning'
    },
    {
        text: 'حذف شده',
        value: 3,
        variant : 'danger'
    },
    {
        text: 'احرازهویت شده',
        value: 5,
        variant : 'success'
    },
    {
        text: 'حذف قبل از تایید',
        value: 4,
        variant : 'danger'
    },
    {
        text: 'حذف بعد از تایید',
        value: 6,
        variant : 'danger'
    },
]

const getStatus = function(status){
    return {
        text : userStatus.find(o => o.value === status).text,
        variant : userStatus.find(o => o.value === status).variant
    }
}

export default {
    userStatus,
    getStatus
}
