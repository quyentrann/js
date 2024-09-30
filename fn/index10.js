const arr = [
  { email: 'admin@example.com', type: 'admin' },
  { email: 'user@example.com', type: 'user' },
];

function fn(arr) {
    const result= arr.filter(value=>value.type=='admin');
    return result.map(value=> value.email)
}
console.log(fn(arr));
