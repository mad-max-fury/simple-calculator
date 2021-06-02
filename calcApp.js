const keypad = document.querySelector('.keypad')
const keypadId = document.getElementById('keypadId')
const slide = document.querySelector('.slide')
const slideBar = document.getElementById('slide-bar')
const main = document.getElementById('main')
const display = document.getElementById('result')
const colorClear = document.getElementById('colorClear')
const colorReset = document.getElementById('colorReset')
const colorEqual = document.getElementById('colorEqual')
const btn = document.getElementsByTagName('button')
const title = document.getElementById('title')
const theme = document.getElementById('theme')
const newBtn = [...btn]
// newBtn.forEach(a => {

//   // console.log(a);
//   if (a.classList.contains('digit') || a.classList.contains('operator') && !a.attributes(data - action)) {
//     console.log(a);
//     a.style.backgroundColor = 'white'
//     a.style.borderBottomColor = 'gray'
//   }
// })
init = () => {
  slideBar.style.position = 'relative'
  slideBar.style.left = '0px';
}

window.onload = init;
move = () => {
  if (slideBar.style.left !== '26px') {
    slideBar.style.left = parseInt(slideBar.style.left) + 13 + 'px';
    console.log(slideBar.style.left)
  } else {
    slideBar.style.left = parseInt(slideBar.style.left) - 26 + 'px';
    console.log(slideBar.style.left)
  }

}
slide.addEventListener('click', () => {
  move();
  if (slideBar.style.left == '0px') {
    console.log('default');
    slideBar.style.backgroundColor = 'hsl(6, 63%, 50%)'
    main.style.backgroundColor = 'hsl(225, 21%, 49%)'
    display.style.backgroundColor = 'hsl(224, 36%, 15%)'
    keypadId.style.backgroundColor = 'hsl(222, 26%, 31%)'
    colorClear.style.backgroundColor = 'hsl(225, 21%, 49%)'
    colorReset.style.backgroundColor = 'hsl(225, 21%, 49%)'
    colorEqual.style.backgroundColor = 'hsl(6, 63%, 50%)'
    title.style.color = 'white'
    display.style.color = 'white'
    theme.style.color = 'white'
    colorEqual.style.borderBottomColor = 'hsl(6, 70%, 34%)'
    colorClear.style.borderBottomColor = 'hsl(224, 28%, 35%)'
    colorReset.style.borderBottomColor = 'hsl(224, 28%, 35%)'
    newBtn.forEach(a => {

      if (a.classList.contains('clickcolor')) {
        console.log(a);
        a.style.backgroundColor = 'white'
        a.style.borderBottomColor = 'gray'
      }
    })

  }
  if (slideBar.style.left == '13px') {
    console.log('white');
    slideBar.style.backgroundColor = 'hsl(25, 98%, 40%)'
    main.style.backgroundColor = ' hsl(0, 0%, 90%)'
    display.style.backgroundColor = 'white'
    display.style.color = 'hsl(60, 10%, 19%)'
    keypadId.style.backgroundColor = 'hsl(0, 5%, 81%)'
    colorClear.style.backgroundColor = 'hsl(185, 42%, 37%)'
    colorReset.style.backgroundColor = 'hsl(185, 42%, 37%)'
    colorEqual.style.backgroundColor = 'hsl(25, 98%, 40%)'
    title.style.color = 'hsl(60, 10%, 19%)'
    theme.style.color = 'hsl(60, 10%, 19%)'
    colorEqual.style.borderBottomColor = 'hsl(25, 99%, 27%)'
    colorClear.style.borderBottomColor = 'hsl(185, 58%, 25%)'
    colorReset.style.borderBottomColor = 'hsl(185, 58%, 25%)'
    newBtn.forEach(a => {
      if (a.classList.contains('clickcolor')) {
        a.style.backgroundColor = 'white'
        a.style.borderBottomColor = 'gray'
      }
      // if (a.classList.contains('decimal')) {
      //   a.style.backgroundColor = 'white'
      //   a.style.borderBottomColor = 'gray'
      // }
    })
    // if (btn.classList.('digit')) {
    //   console.log('yes');
    // }




  }

  if (slideBar.style.left == '26px') {
    console.log('purple');
    slideBar.style.backgroundColor = 'hsl(176, 100%, 44%)'
    main.style.backgroundColor = 'hsl(268, 75%, 9%)'
    display.style.backgroundColor = ' hsl(268, 71%, 12%)'
    keypadId.style.backgroundColor = 'hsl(268, 71%, 12%)'
    display.style.color = 'hsl(52, 100%, 62%)'
    colorClear.style.backgroundColor = ' hsl(281, 89%, 26%)'
    colorReset.style.backgroundColor = ' hsl(281, 89%, 26%)'
    colorEqual.style.backgroundColor = 'hsl(176, 100%, 44%)'
    title.style.color = 'hsl(52, 100%, 62%)'
    theme.style.color = 'hsl(52, 100%, 62%)'
    colorEqual.style.borderBottomColor = 'hsl(177, 92%, 70%)'
    colorClear.style.borderBottomColor = 'hsl(285, 91%, 52%)'
    colorReset.style.borderBottomColor = 'hsl(285, 91%, 52%)'
    newBtn.forEach(a => {
      if (a.classList.contains('clickcolor')) {
        a.style.backgroundColor = 'hsl(268, 47%, 21%)'
        a.style.borderBottomColor = 'hsl(290, 70%, 36%)'
      }
    })
  }



})






const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,

}

updateDisplay = () => {
  const display = document.getElementById('result')
  display.innerHTML = calculator.displayValue

}
updateDisplay()


keypad.addEventListener('click', e => {
  // console.log(e.target.textContent);
  if (!e.target.matches('button')) {
    return
  }
  if (e.target.classList.contains('operator')) {
    operatorHandler(e.target.textContent);
    updateDisplay();
  }
  if (e.target.classList.contains('decimal')) {
    inputDecimal(e.target.textContent);
    updateDisplay();
  }
  if (e.target.classList.contains('clear')) {
    const { displayValue } = calculator;
    if (displayValue != "") {
      calculator.displayValue = deleteChar(displayValue);
      console.log(calculator);
      updateDisplay();
    }
  }
  if (e.target.classList.contains('reset')) {
    resetCalc();
    updateDisplay();
  }


  if (e.target.classList.contains('digit')) {
    inputDigit(e.target.textContent);
    updateDisplay();
  }


})
inputDigit = (digit) => {
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit
    calculator.waitingForSecondOperand = false

  }
  else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
  // console.log(calculator);
}


inputDecimal = (dot) => {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = '0.'
    calculator.waitingForSecondOperand = false
    return
  }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot
  }
}

operatorHandler = (nextOperator) => {
  const { firstOperand, displayValue, operator } = calculator
  inputValue = parseFloat(displayValue)
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }
  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator)
    calculator.displayValue = `${parseFloat(result.toFixed(8))}`
    calculator.firstOperand = result
  }
  calculator.waitingForSecondOperand = true
  calculator.operator = nextOperator
  console.log(calculator);
}

calculate = (firstOperand, secondOperand, operator) => {
  if (operator === '+') {
    return firstOperand + secondOperand
  }
  else if (operator === '-') {
    return firstOperand - secondOperand
  }
  else if (operator === '×') {
    return firstOperand * secondOperand
  }
  else if (operator === '/') {
    return firstOperand / secondOperand
  }
  else {
    return secondOperand
  }
}

resetCalc = () => {
  calculator.displayValue = '0'
  calculator.firstOperand = null
  calculator.waitingForSecondOperand = false
  calculator.operator = null
}
deleteChar = (displayValue) => {
  return displayValue.slice(0, displayValue.length - 1)
}