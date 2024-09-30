const arr = [1, 2, 3, 4, 5];
function fn(arr) {
  const result = arr.reduce((acc, num) => acc + num, 0);
  const avg = result / arr.length;
  return arr.filter((value) => value > avg);
}

console.log(fn(arr));
