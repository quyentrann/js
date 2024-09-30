const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const result = arr1.concat(arr2);
console.log(
  result.filter((value, index) => {
    return result.indexOf(value) === index;
  })
);
