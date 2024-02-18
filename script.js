const currentNumber = document.querySelector('.currNum')
const previousNumber = document.querySelector('.prevNum')
const sign = document.querySelector('.sign')

const numberBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals')
const clearBtn = document.querySelector('.clear')
const removeLastBtn = document.querySelector('.removeLast')

let result = '';


function addOperator () { 
    if(currentNumber.innerHTML === '' && this.textContent === '-'){
        currentNumber.innerHTML = '-';
        return
    }
    else  if(currentNumber.innerHTML === ''){
       return
    }
    if(sign.innerHTML !== ''){
      submit()
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    sign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function addNumber () {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')){
        return
    }
    if(this.textContent === '.' && currentNumber.innerHTML === ''){
        return currentNumber.innerHTML = '0.'
    }

    currentNumber.innerHTML += this.textContent;
}

const submit = () => {
    if(previousNumber.innerHTML === '' || sign.innerHTML === '' || currentNumber.innerHTML === ''){
        return
    }
    let x = Number(currentNumber.innerHTML)
    let y = Number(previousNumber.innerHTML)
    let operator = sign.innerHTML

    switch(operator){
        case '+':
            result = x + y;
            break;
            case '-':
                result = y-x;
                break;
                case 'x':
                    result = x * y;
                    break;
                    case ':':
                        result = y / x;
                        break
                        case 'x^':
                            result = y ** x;
                            break; 
    }
    currentNumber.innerHTML = Math.round(result * 10000) / 10000;
    previousNumber.innerHTML = '';
    sign.innerHTML = '';

}

const clear = () => {
    result = '';
    currentNumber.innerHTML = '';
    sign.innerHTML = '';
    previousNumber.innerHTML = '';
    
}

const removeLast = () => {
   if(currentNumber.innerHTML !== ''){
    currentNumber.innerHTML = currentNumber.textContent.slice(0, -1)
    
} else if(sign.innerHTML !== ''){
    sign.innerHTML = ''
    currentNumber.innerHTML = previousNumber.textContent
    previousNumber.innerHTML = ''
} else if(previousNumber.innerHTML !== ''){
    previousNumber.innerHTML = previousNumber.textContent.slice(0, -1)
    
}
}
operatorBtns.forEach((btn) => btn.addEventListener('click', addOperator))
numberBtns.forEach((btn) => btn.addEventListener('click', addNumber))
equalsBtn.addEventListener('click', submit)
clearBtn.addEventListener('click', clear)
removeLastBtn.addEventListener('click', removeLast)
