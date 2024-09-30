const arr= [10, 25, 30, 15]

function fn(arr) {
    const result= arr.filter(value=>value>20)
    return result.map(value=> value.toString())
}
console.log(fn(arr));
