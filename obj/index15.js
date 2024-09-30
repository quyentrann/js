const arr= [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
const result= arr.filter(value=> value.name.length>4)
console.log(result.map(value=> value.name));
