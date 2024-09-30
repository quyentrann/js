const arr= ["hello", "world", "test"]
function fn(arr) {
    const result= arr.filter(value=> !value.includes('a'))
    return result.map(value=> value.toUpperCase())
}
console.log(fn(arr));
