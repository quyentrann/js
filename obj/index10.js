const arr= [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }]
const result= arr.filter(value=> value.age>25)
console.log(result.map(value=> value.name));
