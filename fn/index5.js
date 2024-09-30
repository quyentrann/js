const arr = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }];

function fn(arr) {
  const result = arr.filter(
    (value, index, ar) =>
      ar.findIndex((obj) => obj.name === value.name) === index
  );

  return result.map((value) => value.name);
}
console.log(fn(arr));
