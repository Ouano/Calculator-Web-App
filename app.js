const AC = document.getElementById("AC");
const result = document.getElementById("result");
const equal = document.getElementById("equal");

let userOperator = "";
let checkOperation = false;
let input;
let secondInput
let finalAnswer;

// function that displays the value of the input and also the output
function display(val) {
    if(result.value == null) {
        result.innerHTML += val;
        input = result.innerHTML;
        console.log(input);
    } else if(result.value != null) {
        console.log(checkOperation);
        console.log(input);
        if(checkOperation == false) {
            if(result.value == 0) {
                input = val;
                result.value = input;
                result.innerText = val;
                console.log(input);
            }else if(result.value != 0) {
                result.innerHTML += val;
                input = result.innerHTML;
                result.value = input;
                console.log(input + " err");
            }
        } else if(checkOperation == true) {
            if(result.value == 0) {
                secondInput = val;
                result.value = secondInput;
                result.innerText = val;
                console.log(secondInput);
            }else if(result.value != 0) {
                result.innerHTML += val;
                secondInput = result.innerHTML;
                console.log(secondInput + " err");
            }
        }
    }
}

// function that clears the screen
function clear() {
    result.innerHTML = result.getAttribute("value");
    result.value = result.getAttribute("value");
    nonZero = null;
    input = 0;
    checkOperation = false;
    finalAnswer = null;
    console.log("cleared");
}

function displayFunction(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        result.value += event.key;
}

// function that checks user chosen operation
function operation(chosen) {
    if(chosen == 'addition') {
        checkOperation = true;
        console.log(chosen)
        result.value = 0;
        console.log(result.value);
        userOperator = chosen;
    } else if(chosen == 'subtraction') {
        checkOperation = true;
        console.log(chosen)
        result.value = 0;
        console.log(result.value);
        userOperator = chosen;
    } else if(chosen == 'multiplication') {
        checkOperation = true;
        console.log(chosen)
        result.value = 0;
        console.log(result.value);
        userOperator = chosen;
    } else if(chosen == 'division') {
        checkOperation = true;
        console.log(chosen)
        result.value = 0;
        console.log(result.value);
        userOperator = chosen;
    }
}


// function that shows the final answer
function resultedOperation() {
    if(finalAnswer == null) {
        if(userOperator == 'addition') {
            finalAnswer = parseFloat(input) + parseInt(secondInput);
            console.log(finalAnswer);
            result.innerHTML = finalAnswer;
            checkOperation = false;
        } else if(userOperator == 'subtraction') {
            finalAnswer = parseFloat(input) - parseInt(secondInput);
            console.log(finalAnswer);
            result.innerHTML = finalAnswer;
            checkOperation = false;
        } else if(userOperator == 'multiplication') {
            finalAnswer = parseFloat(input) * parseInt(secondInput);
            console.log(finalAnswer);
            result.innerHTML = finalAnswer;
            checkOperation = false;
        } else if(userOperator == 'division') {
            finalAnswer = parseFloat(input) / parseInt(secondInput);
            console.log(finalAnswer);
            result.innerHTML = finalAnswer;
            checkOperation = false;
        }
    } else {
        if(userOperator == 'addition') {
            finalAnswer += parseInt(secondInput);
            console.log(secondInput);
            result.innerText = finalAnswer;
            checkOperation = false;
        } else if(userOperator == 'subtraction') {
            finalAnswer -= parseInt(secondInput);
            console.log(secondInput);
            result.innerText = finalAnswer;
            checkOperation = false;
        } else if(userOperator == 'multiplication') {
            finalAnswer *= parseInt(secondInput);
            console.log(secondInput);
            result.innerText = finalAnswer;
            checkOperation = false;
        } else if(userOperator == 'division') {
            finalAnswer /= parseInt(secondInput);
            console.log(secondInput);
            result.innerText = finalAnswer;
            checkOperation = false;
        }
    }
}
 
// function that will make numbers into percent decimal
function percent(){
    input = parseInt(result.innerHTML) / 100;
    result.innerHTML = input
    console.log(input);
}


AC.addEventListener("click", clear);
equal.addEventListener("click",resultedOperation)