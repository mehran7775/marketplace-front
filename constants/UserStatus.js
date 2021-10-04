const userStatus = [
    {
        text: 'مسدود',
        value: 0,
        variant : 'danger'
    },
    {
        text: 'فعال',
        value: 1,
        variant : 'info'
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
        value: 4,
        variant : 'success'
    },
    {
        text: 'حذف قبل از تایید',
        value: 5,
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
