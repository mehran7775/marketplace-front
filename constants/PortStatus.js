const portStatus = [
    {
        text: 'غیرفعال',
        value: 0,
        variant : 'danger'
    },
    {
        text: 'فعال',
        value: 1,
        variant : 'success'
    },
]

const getStatus = function(status){
    return {
        text : portStatus.find(o => o.value === status).text,
        variant : portStatus.find(o => o.value === status).variant
    }

}

export default {
    portStatus,
    getStatus
}
