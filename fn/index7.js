const arr = [
  { name: 'Alice', status: 'active' },
  { name: 'Bob', status: 'inactive' },
];

function fn(arr) {
    const result =arr.filter(value=> value.status=='active')
    return result.map(value=> value.name)
}
console.log(fn(arr));
