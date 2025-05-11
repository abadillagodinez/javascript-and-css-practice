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
        //addOperator();
        console.log(btn.innerText);
    })
});

btnDot.addEventListener('click', function(){
        //addDot();
        console.log(btnDot.innerText);
});

btnClear.addEventListener('click', function(){
        clearResult();
        resetResult();
});

btnEnter.addEventListener('click', function(){
        //addDot();
        console.log(btnEnter.innerText);
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