const arr = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  {
    name: 'Charlie',
    age: 20,
  },
];

const result = arr.filter(value=> 20<=value<=30)
console.log(result.map(value=> value.name));
