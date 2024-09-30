const arr = [5, 10, 15, 3, 2];
function fn(arr) {
  const result = arr.filter(value=> value % 5 == 0);
  return result.reduce((acc, num) => acc + num);
}
console.log(fn(arr));
