const arr = [
  { name: 'Alice', salary: 500 },
  { name: 'Bob', salary: 1500 },
];

function fn(arr) {
    const result=arr.filter(value=> value.salary<1000)
    return result.map(value=> value.name)
}
console.log(fn(arr));
