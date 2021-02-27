function accumulator(reducer, initialValue) {
    return (newValue)=>{
        initialValue = reducer(initialValue,newValue);
        return initialValue;
    }
}

module.exports = { accumulator }

if (require.main === module) {

    var acc = accumulator((x,y)=>x+y,10)   
    var accmin = accumulator((x,y)=>x-y,10)  
    console.log(acc(5))
    console.log(acc(10))
    console.log(acc(25))

    console.log(accmin(5))
    console.log(accmin(10))
    console.log(accmin(25))
}
