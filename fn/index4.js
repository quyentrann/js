const arr = ['hello1', 'world', 'test2'];
function fn(arr) {
 const regex = /\d/;
  const result = arr.filter((value) =>
   !regex.test(value)
  );
  return result.map((value) => value.toUpperCase());
}

console.log(fn(arr));
