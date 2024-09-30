const arr=[{ name: 'Alice' }, { email: 'bob@example.com' }]
const result= arr.filter(value=> !('email' in value))
console.log(result.map(value=> value.name));
