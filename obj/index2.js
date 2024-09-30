const arr=[{ email: 'alice@example.com', active: true }, { email:'bob@example.com', active: false }]
const result= arr.filter(value=> value.active)
console.log(result.map(value=> value.email));
