const arr = ['apple', 'banana', 'cherry', 'watermelon'];
const result = arr.reduce((value, sum) => {
  if (sum.length > value.length) {
    return sum;
  }
  return value;
});

console.log(result);
