const gatewayTypes = [
    {
        value: 'PF',
        text: 'پرداخت یاری'
    },
    {
        value: 'Card',
        text: 'کارت به کارت'
    },
    {
        value: 'IVR',
        text: 'تلفنی'
    },
    {
        value: 'Dedicated',
        text: 'اختصاصی'
    },
]

const getType = function(type){
    return gatewayTypes.find(o => o.value === type).text
}

export default {
    gatewayTypes,
    getType
}
