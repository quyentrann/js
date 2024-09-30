const arr = [
  { name: 'Alice', salary: 5000 },
  { name: 'Bob', salary: 2500 },
];

const result = arr.filter((value) => value.salary > 3000);
console.log(result.map((value) => value.name));
