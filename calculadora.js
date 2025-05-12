// declaration of webElemnts
const btnsNumbers = document.getElementsByName("data-number");
const btnsOperators = document.getElementsByName("data-operator");
const btnDot = document.getElementsByName("data-dot")[0];
const btnClear = document.getElementsByName("data-clear")[0];
const btnEnter = document.getElementsByName("data-enter")[0];
// declaration of needed variables
var result = document.getElementById("result");
var actualOp = "";
var prevOp = "";
var operation = undefined;

// adding the action listeners to each group of buttons
btnsNumbers.forEach(function(btn){
    btn.addEventListener('click', function(){
        addNumber(btn.innerText);
    })
});

btnsOperators.forEach(function(btn){
    btn.addEventListener('click', function(){
        selectOperator(btn.innerText);
    })
});

btnDot.addEventListener('click', function(){
        addDot();
});

btnClear.addEventListener('click', function(){
        clearResult();
        resetResult();
});

btnEnter.addEventListener('click', function(){
        calculate();
        updateResult();
});

// defining functions
function addNumber(number){
    actualOp = actualOp.toString() + number.toString();
    updateResult();
}

function clearResult(){
    prevOp = "";
    actualOp = "";
    operation = undefined;
}

function updateResult(){
    result.innerText = actualOp;
}

function resetResult(){
    result.innerText = "0";
}

function addDot(){
    if(actualOp.includes(".") || actualOp === "") return;
    actualOp = actualOp.toString() + ".";
    console.log(actualOp)
}

function selectOperator(op){
    if(actualOp === "") return;
    if(prevOp !== ""){
        calculate();
    }
    operation = op.toString();
    prevOp = actualOp;
    actualOp = "";
}

function calculate(){
    var res;
    const previous = parseFloat(prevOp);
    const actual = parseFloat(actualOp);
    if(isNaN(previous) || isNaN(actual)) return;
    switch(operation){
        case "+":
            res = previous + actual;
            break;
        case "-":
            res = previous - actual;
            break;
        case '×':
            res = previous * actual;
            break;
        case "÷":
            res = previous / actual;
            break;
        default:
            return;
    }
    actualOp = res;
    operation = undefined;
    prevOp = "";
}