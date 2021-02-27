function deepSum(list) {
    if(list.length==0)
        return 0
    let flattened = (list.flat());
    const checkArray = (element)=>Array.isArray(element)
    const checkHash = (element)=>{return (element) && typeof(element)==='object'}
    let sublistArrays = []
    let sublistNums = []
    for (var element in flattened){
        if(checkHash(flattened[element])){
            const keys = Object.keys(flattened[element]);
            const values = keys.map((val) => { return flattened[element][val]; });
            flattened[element] = values
        }
        if(checkArray(flattened[element])){
            sublistArrays.push(flattened[element])
        }
        else{
            sublistNums.push(flattened[element])
        }
    }
    const currentSum = sublistNums.length>0?sublistNums.reduce((x,y)=>x+y):0
    if(sublistArrays.length>0)
        return deepSum(sublistArrays) + currentSum
    return currentSum
}

module.exports = { deepSum }

if (require.main === module) {
    const list = [1,1,1,[1,1,2],1,{'batata':1,'batata2':[1,1,{'ja':1,'jaja':1}]}]
    console.log(deepSum(list))

    const list2 = [1,[],[1,[]]]
    console.log(deepSum(list2))

    const list3 = [{'a':1}]
    console.log(deepSum(list3))

}