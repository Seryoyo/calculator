function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function power(a, b){
    return Math.pow(a, b);
}

function operate(b, operator, a){

    if (operator == '+'){
        let displayVal = add(a, b);
        screenDisplay.textContent = displayVal;
        return displayVal;
    }
    
    else if (operator == "-"){
        let displayVal = subtract(a, b);
        screenDisplay.textContent = displayVal;
        return displayVal;
    }
    
    else if (operator == "x"){
        let displayVal = multiply(a, b);
        screenDisplay.textContent = displayVal;
        return displayVal;
    }
    
    else if (operator == "/"){
        let displayVal = divide(a, b);
        screenDisplay.textContent = displayVal;
        return displayVal;
    }
    
    else if (operator == "^"){
        let displayVal = power(a, b);
        screenDisplay.textContent = displayVal;
        return displayVal;
    }

}

function display(button){

    if(button.target.textContent == "clear"){
        return; 
    }
    else if(button.target.textContent == "="){
        if(numArray.length > 2){
            let num2 = numArray.pop();
            let op = numArray.pop();
            let num1 = numArray.pop();
            operate(num2, op, num1);
        }
        return;
    }
    else{
        value = button.target.textContent;
    }

    if(!value.isInteger && value != '+' && value != '-' && value != '/' && value != 'x'){
        value = parseInt(value);
        console.log("numbered");
        if(value.isInteger){
            console.log("is integer now");
        }
    }

    numArray.push(value);

    if(numArray.length > 1 && Number.isInteger(numArray[1])){
        numArray[0] = +numArray.join("");
        numArray.pop();

    }

    if(numArray.length > 3 && Number.isInteger(numArray[3])){
        let holdArray = numArray.slice(2);
        numArray[2] = +holdArray.join("");
        numArray.pop();

    }

    screenDisplay.textContent = numArray[numArray.length - 1];

    if(numArray.length == 4 && numArray[numArray.length - 1] != "="){
        let holder = numArray.pop();
        let num2 = numArray.pop();
        let op = numArray.pop();
        let num1 = numArray.pop();
        numArray[0] = operate(num2, op, num1);
        numArray[1] = holder;
    }
    
    console.log(numArray);


}

let value = 0;

let numArray = [];

let screenDisplay = document.querySelector('.innerDisplay')

let buts = document.querySelectorAll('.but');

buts.forEach(button => {
    button.addEventListener('click', display)
})







