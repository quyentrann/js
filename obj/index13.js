const arr= [{ score: 30 }, { score: 70 }]
const result= arr.filter(value=> value.score<60)
console.log(result.map(value=> value.score*2));
