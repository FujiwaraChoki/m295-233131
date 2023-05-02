const calculate = (num1, num2) => {
    return num1 + num2;
}

const printResult = (num1, num2, func) => {
    console.log(func(num1, num2))
}

printResult(2, 3, calculate);
