function deepSum(list) {
    let flattened = (list.flat());
    const checkArray = (element)=>Array.isArray(element)
    const checkHash = (element)=>{return (element) && typeof(element)==='object'}
    for (var element in flattened)
        if(checkHash(flattened[element])){
            const keys = Object.keys(flattened[element]);
            const values = keys.map((val) => { return flattened[element][val]; });
            flattened[element] = values
        }
    if(flattened.some(checkArray))
        return deepSum(flattened)
    return flattened.reduce((x,y)=>x+y)
}

module.exports = { deepSum }

if (require.main === module) {
    const list = [1,1,1,1,{'batata':1,'batata2':[1,1,{'ja':1,'jaja':1}]}]
    console.log(deepSum(list))
}