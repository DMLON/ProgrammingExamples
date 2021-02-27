  
function minDistance(list) {
    let copy = [...list]
    copy.sort((a, b) => b - a) //nlogn
    for (let i=0; i<copy.length-1;i++){
        copy[i] = copy[i]-copy[i+1] //find the derivative
    }
    copy = copy.slice(0,copy.length-1)
    return Math.min(...copy) //nlogn + n
}

module.exports = { minDistance }

if (require.main === module) {
    const list = [7,3,0,10,100,50,84,41,33]
    console.log(minDistance(list))
}