const arr= ["hello", "world!", "@test", "no_special"]
function fn(arr) {
    const result= arr.filter(value=> value.includes('!'|| '@'|| '#'|| '$'|| '%'|| '^'|| '&'|| '*'|| '('|| ')'))
    return result.map(value=> value)
}

console.log(fn(arr));
