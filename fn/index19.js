const arr= ["HELLO", "123", "WORLD", "456"]
function fn(arr) {
    const regex = /\d/;
    const result= arr.filter(value=> !regex.test(value))
    return result.map(value=> value.toLowerCase())
}
console.log(fn(arr));
