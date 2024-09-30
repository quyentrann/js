const arr = [1, 2, 2, 3, 4, 4];

function fn(arr) {
  return arr.reduce((acc, num) => {
    if (!acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);
}

console.log(fn(arr));
