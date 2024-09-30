const arr= ["hello", "world!", "@test", "no_special"]
function fn(arr) {
    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    const result= arr.filter(value=> specialChars.some(char=> value.includes(char)))
    return result.map(value=> value)
}

console.log(fn(arr));
