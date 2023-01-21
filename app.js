const AC = document.getElementById("AC");
const result = document.getElementById("result");

let nonZero;
let computation;

// function that displays the value of the input and also the output
function display(val) {
    if(result.value == null) {
        document.getElementById("result").innerHTML += val;
        computation = document.getElementById("result").innerHTML
        console.log(result.value);
        console.log(computation);
    } else if(result.value != null) {
        if(result.value == 0) {
            computation = val;
            document.getElementById("result").value = computation;
            document.getElementById("result").innerText = val;
            console.log("naw");
        } else if(result.value != 0) {
            document.getElementById("result").innerHTML += val;
        }
    }
}

// function that clears the screen
function clear() {
    document.getElementById("result").innerHTML = result.getAttribute("value");
    result.value = result.getAttribute("value");
    nonZero = null;
    computation = 0;
}

function displayFunction(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}
 
AC.addEventListener("click", clear);