const arr=[{ age: 25 }, { name: 'Bob', age: 30 }]

function fn(arr) {
    const result=arr.filter(value=> !value.name)
    return result.map(value=> value)
}

console.log(fn(arr));
