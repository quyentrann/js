const arr= [1, 2, 'three', 4]
function fn(arr) {
    const result= arr.filter(value=> Number.isInteger(value)) 
    return result.reduce((acc,num)=> acc+num,0)
}

console.log(fn(arr));
