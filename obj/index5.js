const arr= [{ name: 'Alice', age: 25 }, { name: 'Bob' ,age: 30 }]
const result= arr.filter(value=> value.age>25)
console.log(result.map(value=> value.name));
