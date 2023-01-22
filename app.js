const AC = document.getElementById("AC");
const result = document.getElementById("result");
const equal = document.getElementById("equal");

let userOperator = "";
let checkOperation = false;
let input;
let secondInput
let finalAnswer;
let oneDecimal;

// function that displays the value of the input and also the output
function display(val) {
    if(finalAnswer == null) {
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
                if(result.value == 0 || result.innerHTML.includes(".")) {
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
    } else if(finalAnswer != null){
        console.log("entered");
        if(result.innerText != null & result.innerText != "") {
            console.log(result.innerText);
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
                    if(result.value == 0 || result.innerHTML.includes(".")) {
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
    input = 0;
    secondInput = 0;
    console.log("cleared");
    oneDecimal = false;
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
    oneDecimal = false;
}


// function that shows the final answer
function resultedOperation() {
    if(finalAnswer == null) {
        if(userOperator == 'addition') {
            finalAnswer = parseFloat(input) + parseFloat(secondInput);
            console.log(finalAnswer);
            result.innerHTML = finalAnswer;
            checkOperation = false;
            oneDecimal = false;   /* changes to false after inputing a second input */
        } else if(userOperator == 'subtraction') {
            finalAnswer = parseFloat(input) - parseFloat(secondInput);
            console.log(finalAnswer);
            result.innerHTML = finalAnswer;
            checkOperation = false;
            oneDecimal = false;   /* changes to false after inputing a second input */
        } else if(userOperator == 'multiplication') {
            finalAnswer = parseFloat(input) * parseFloat(secondInput);
            console.log(finalAnswer);
            result.innerHTML = finalAnswer;
            checkOperation = false;
            oneDecimal = false;   /* changes to false after inputing a second input */
        } else if(userOperator == 'division') {
            finalAnswer = parseFloat(input) / parseFloat(secondInput);
            console.log(finalAnswer);
            result.innerHTML = finalAnswer;
            checkOperation = false;
            oneDecimal = false;   /* changes to false after inputing a second input */
        }
    } else {
        if(userOperator == 'addition') {
            finalAnswer += parseFloat(secondInput);
            console.log(secondInput);
            result.innerText = finalAnswer;
            checkOperation = false;
            oneDecimal = false;   /* changes to false after inputing a second input */
        } else if(userOperator == 'subtraction') {
            finalAnswer -= parseFloat(secondInput);
            console.log(secondInput);
            result.innerText = finalAnswer;
            checkOperation = false;
            oneDecimal = false;   /* changes to false after inputing a second input */
        } else if(userOperator == 'multiplication') {
            finalAnswer *= parseFloat(secondInput);
            console.log(secondInput);
            result.innerText = finalAnswer;
            checkOperation = false;
            oneDecimal = false;   /* changes to false after inputing a second input */
        } else if(userOperator == 'division') {
            finalAnswer /= parseFloat(secondInput);
            console.log(secondInput);
            result.innerText = finalAnswer;
            checkOperation = false;
            oneDecimal = false;   /* changes to false after inputing a second input */
        }
    }
}
 
// function that will make numbers into percent decimal
function percent(){
    input = parseFloat(result.innerHTML) / 100;
    result.innerHTML = input
    console.log(input);
}

// function for putting a decimal point
function decimal() {
    if(result.value == null & result.innerHTML =="") {
        result.innerHTML += "0.";
        oneDecimal = true;
    }
    
    if(oneDecimal === false){
        if(result.innerHTML == "") {
            result.innerHTML += ".";
            oneDecimal = true;
            console.log("test");
        } else if (result.innerHTML == "0"){
            result.innerText += "0.";
            oneDecimal = true;
            console.log(result.innerHTML);
        }
    } 

    if(result.value == 0) {
        result.value = input;
        result.innerText = input;
        console.log(input);
    }
}

// Function that will change the sign of the number
function changeSign() {
    if(secondInput == null || secondInput == 0) {
        input = parseFloat(input) * -1;
        result.innerHTML = input;
        console.log(secondInput + "null");
    }

    if(secondInput != 0) {
        secondInput = parseFloat(secondInput) * -1;
        result.innerHTML = secondInput;
    }
}

AC.addEventListener("click", clear);
equal.addEventListener("click",resultedOperation);