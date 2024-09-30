const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(
  arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  })
);
