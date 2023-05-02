const numbers = process.argv

let sum = 0;

numbers.map((num, index) => {
    if(!isNaN(Number(num))) {
        sum += Number(num);
    }
})

console.log(sum)
