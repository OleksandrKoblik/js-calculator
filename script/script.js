let first = '';
let second = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    first = '';
    second = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
let clear = document.querySelector('.ac')
clear.addEventListener('click', clearAll)

function plusOrMinus() {
    if (second === '' && sign === ''){
        first = +(-first);
        out.textContent = first;
    }
    if (first !== '' && sign !== '' && second !== '') {
        second = +(-second);
        out.textContent = second;
    }
    if (finish === true) {
        first = (-first);
        out.textContent = first;
    }
}
let plusMinus = document.querySelector('.plus-minus')
plusMinus.addEventListener('click', plusOrMinus)

function percent() {
    if (second === '' && sign === '') {
        first = +(first / 100);
        out.textContent = first;
    }
    if (first !== '' && sign !== '' && second !== '') {
        second = +(second / 100);
        out.textContent = second;
    }
    if (finish === true) {
        first = (first / 100);
        out.textContent = first;
    }
}
let percent1 = document.querySelector('.percent')
percent1.addEventListener('click', percent)

function equal() {
    if (second === '') second = first
    switch (sign) {
        case '+':
            first = (+first) + (+second);
            break;
        case '-':
            first = first - second;
            break;
        case 'x':
            first = first * second;
            break;
        case '/':
            if (second === '0') {
                out.textContent = 'divide by zero';
                first = '';
                second = '';
                sign = '';
                return;
            }
            first = first / second;
            break;
    }
    out.textContent = first;
    // console.log(first, sign, second);
    finish = true;
}
let equal1 = document.querySelector('.equal')
equal1.addEventListener('click', equal)

function multipleDivision() {
    if (first !== '' && second === '') {
        sign = '/'
    } else if ( finish === true ) {
        sign = '/'
    } else {
        equal()
    }
}
let division = document.querySelector('.division')
division.addEventListener('click', multipleDivision)

function multipleMultiplication() {
    if (first !== '' && second === '') {
        sign = 'x'
    } else if ( finish === true ) {
        sign = 'x'
    } else {
        equal()
    }
}
let multiply = document.querySelector('.multiply')
multiply.addEventListener('click', multipleMultiplication)

function multipleMinus() {
    if (first !== '' && second === '') {
        sign = '-'
    } else if ( finish === true ) {
        sign = '-'
    } else {
        equal()
    }
}
let minus = document.querySelector('.minus')
minus.addEventListener('click', multipleMinus)

function multiplePlus() {
    if (first !== '' && second === '') {
        sign = '+'
    } else if ( finish === true ) {
        sign = '+'
    } else {
        equal()
    }
}
let plus = document.querySelector('.plus')
plus.addEventListener('click', multiplePlus)

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
    if (event.target.classList.contains('plus-minus')) return;
    if (event.target.classList.contains('equal')) return;
    if (event.target.classList.contains('percent')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (second === '' && sign === '') {
            first += key;
            out.textContent = first;
        } else if (first !== '' && second !== '' && finish) {
            second = key;
            finish = false;
            out.textContent = second;
        } else {
            second += key;
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = first;
        console.log(sign);
    }
}

document.addEventListener('keydown',  (event) => {
    if (event.key === '0') {
        if(second === '' && sign === ''){
            first += '0'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '0';
            finish = false;
            out.textContent = second;
        } else {
            second += '0';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '1') {
        if(second === '' && sign === ''){
            first += '1'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '1';
            finish = false;
            out.textContent = second;
        } else {
            second += '1';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '2') {
        if(second === '' && sign === '') {
            first += '2'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '2';
            finish = false;
            out.textContent = second;
        } else {
            second += '2';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '3') {
        if(second === '' && sign === ''){
            first += '3'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '3';
            finish = false;
            out.textContent = second;
        } else {
            second += '3';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '4') {
        if(second === '' && sign === ''){
            first += '4'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '4';
            finish = false;
            out.textContent = second;
        } else {
            second += '4';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '5') {
        if(second === '' && sign === ''){
            first += '5'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '5';
            finish = false;
            out.textContent = second;
        } else {
            second += '5';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '6') {
        if(second === '' && sign === ''){
            first += '6'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '6';
            finish = false;
            out.textContent = second;
        } else {
            second += '6';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '7') {
        if(second === '' && sign === ''){
            first += '7'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '7';
            finish = false;
            out.textContent = second;
        } else {
            second += '7';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '8') {
        if(second === '' && sign === ''){
            first += '8'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '8';
            finish = false;
            out.textContent = second;
        } else {
            second += '8';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '9') {
        if(second === '' && sign === ''){
            first += '9'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '9';
            finish = false;
            out.textContent = second;
        } else {
            second += '9';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }
    if (event.key === '.') {
        if(second === '' && sign === ''){
            first += '.'
            out.textContent = first;
        } else if(first !== '' && second !== '' && finish) {
            second = '.';
            finish = false;
            out.textContent = second;
        } else {
            second += '.';
            out.textContent = second;
        }
        console.log(first, sign, second);
        return;
    }

    if (event.code === 'Backspace') {
        clearAll()
    }

    if (event.code === 'Enter' || event.key === '=') {
        equal()
    }

    if (event.key === '-') {
        if (first !== '' && second === '') {
            sign = '-'
        } else if ( finish === true ) {
            sign = '-'
        } else {
            equal()
        }
    }

    if (event.key === '+' && (event.shiftKey)) {
        if (first !== '' && second === '') {
            sign = '+'
        } else if ( finish === true ) {
            sign = '+'
        } else {
            equal()
        }
    }

    if (event.key === '/') {
        if (first !== '' && second === '') {
            sign = '/'
        } else if ( finish === true ) {
            sign = '/'
        } else {
            equal()
        }
    }

    if (event.key === 'x') {
        if (first !== '' && second === '') {
            sign = 'x'
        } else if ( finish === true ) {
            sign = 'x'
        } else {
            equal()
        }
    }
})


