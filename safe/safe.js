function finalValue(movements = []) {
    if(movements.length==0)
        return 0
    const value = movements.reduce((a,b)=>a+b)%100
    return value<0?100+value:value
}

module.exports = { finalValue }

if (require.main === module) {
    console.log(finalValue([]))
    console.log(finalValue([1]))
    console.log(finalValue([1,-5]))
    console.log(finalValue([50,5,-40]))
    console.log(finalValue([99,1]))
    console.log(finalValue([-101]))
    console.log(finalValue([0,1]))
}