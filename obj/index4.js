const arr = [{ score: 30 }, { score: 70 }];
console.log(arr.reduce((acc, num) => acc + num.score, 0));
