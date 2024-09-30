const arr= ["HELLO", "WORLD", "JavaScript", "node"]
function fn(arr) {
    const result= arr.filter(value=> value.length>6)
    return result.map(value=> value.toLowerCase())
}
console.log(fn(arr));
