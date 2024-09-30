const arr = [
  { name: 'Alice', height: 165 },
  { name: 'Bob', height: 155 },
];

function fn(arr) {
    const result= arr.filter(value=> value.height>160)
return result.map(value=> value.name)
}
console.log(fn(arr));
