const arr= [1, 2, 3, 6]
function fn(arr) {
    const result=arr.filter(value=> value<5)
    return result.map(value=> value*2)
}
console.log(fn(arr));
