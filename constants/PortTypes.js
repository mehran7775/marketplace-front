const portTypes = [
    {
        value: 'PF',
        text: 'پرداخت یاری'
    },
    {
        value: 'Dedicated',
        text: 'اختصاصی'
    },
    {
        value: 'IVR',
        text: 'تلفنی'
    },
    {
        value: 'Card',
        text: 'کارت به کارت'
    }
]

const getType = function(type){
    return portTypes.find(o => o.value === type).text
}

export default {
    portTypes,
    getType
}
