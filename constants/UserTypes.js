const userTypes = [
    {
        value: 2,
        text: 'حقوقی'
    },
    {
        value: 1,
        text: 'حقیقی'
    },
]

const getType = function(type){
    return userTypes.find(o => o.value === type).text
}

export default {
    userTypes,
    getType
}
