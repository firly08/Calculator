// ===> SCREEN INPUT <===
// mengambil element input yang menggunakan class calculator-screen
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    // memperbarui nilai calculatorScreen
    calculatorScreen.value = number;
}

// ===> CLICK BUTTON <===
// mengambil element button yang menggunakan class number
const numbers = document.querySelectorAll(".number");

// mendapatkan masing" angka dasi const numbers
numbers.forEach((number) => {
    // mengambil nilai number ketika di klik
    number.addEventListener("click", (event) => {
        // mengupdate nilai ke input screen
        updateScreen(event.target.value);
    });
});


// ===> KALKULASI <===
let prevNumber = ''
let calculationOperator =''
let currentNumber = ''

const inputNumber = (number) => {
    // currentNumber = number
    if (currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// memberikan number yang di klik ke variabel currentNumber
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        // update nilai screen
        updateScreen(currentNumber)
    })
})

// ===> OPERATOR <==
const operators =document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        // console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    console.log(operator)
    calculationOperator = operator
    currentNumber = '0'
}

// button sama dengan '='
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
    console.log('equal is pressed');
})

// calculate
const calculate = () => {
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;

        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;

        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;

        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
    
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
}

// ==> All Clear/AC <==
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// ==> DECIMAL CALCULATION <==
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
