const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function fn(arr) {
    const result= arr.filter(value=> !(value%2==0) && !(value%3==0))
    return result.map(value=> value*10)
}
console.log(fn(arr));
