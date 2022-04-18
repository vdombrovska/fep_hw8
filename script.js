const firstNumberEl = document.getElementById ('fisrtnumber');
const secondNumberEl = document.getElementById ('secondnumber');
const btnEl = document.getElementById ('btn');
const resultEl = document.getElementById ('yourresult');
const errorEL = document.getElementById ('error');

let clickResult;
let secondOperand;
let firstOperand;

btnEl.addEventListener ('click', onCalculateClick);
firstNumberEl.addEventListener ('input', onFirstNumberInput);
secondNumberEl.addEventListener ('input', onSecondNumberInput);


function onFirstNumberInput (){
    if (firstNumberEl.value === null || firstNumberEl.value === "" || isNaN (firstNumberEl.value)){
        return errorEL.textContent = "check your data";
    } else {
        return firstOperand = +firstNumberEl.value;
    }
}

function onSecondNumberInput (){
    if (secondNumberEl.value === null || secondNumberEl.value === "" || isNaN (secondNumberEl.value)){
        return errorEL.textContent = "check your data";
    } else {
        return secondOperand = +secondNumberEl.value;
    }
}

function onCalculateClick () {
    const clickResult = firstOperand + secondOperand;
    return resultEl.textContent = '${clickResult}';
}

