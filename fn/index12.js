const arr= [-1, 2, -3, 4]
function fn(arr) {
    const result= arr.filter(value=> value<0)
    return result.map(value=> Math.abs(value))
}
console.log(fn(arr));
