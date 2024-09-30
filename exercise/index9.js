const arr = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
const result= arr.filter(value=> value.name.includes('o'))
console.log(result.map(value=> value));
