var FIRST = false;
var SECOND = true;

var ADD = "+";
var MINUS = "-";
var MULT = "*";
var DIV = "/";
var POW = "^";
var PLUS_SIGN = '';

var operator;
var sign;

var num1 = "0";
var num2 = "0";
var answ;
var current_num = FIRST;

function displayNum(num) {
    document.getElementById("text").textContent = String(sign + num.toString());
    console.log("display success");
}

function addChar(num){
    if(current_num === FIRST) {
        if(num1 != "0")
            num1 = num1 + num.toString();
        else
            num1 = num.toString();

        console.log(num1);
        displayNum(num1);
        console.log("display");

    }
    else {
        if(num2 != "0")
            num2 = num2 + num.toString();
        else
            num2 = num.toString();

        console.log(num2);
        displayNum(num2);
        console.log("display");
    }

}

function clear(){
    if(current_num === FIRST) {
        num1 = "0";
        console.log(num1);
        displayNum(num1);
    }
    else {
        num2 = "0";
        displayNum(num2);
    }
}

function chOp(op){
    current_num = SECOND;
    operator = op;
    displayNum(num2);    
}


function equal(){
    numO = +num1;
    numS = +num2;
    switch (operator) {
        case ADD:

            answ = numO + numS;

            break;
        case MINUS:

            answ = numO - numS;

            break;
        case MULT:

            answ = numO * numS;

            break;
        case DIV:

            answ = numO / numS;

            break;
        /*case POW:

            for (i = 0;i < num2;i++)
                num1 = num1*num1;
            answ = num1;
            break;*/

    }
    displayNum(answ);
    num1 = answ.toString();
    num2 = "0";
    current_num = FIRST;
}

function chSign() {
    /*if(sign === PLUS_SIGN)
        sign = MINUS;
    else
        sign = PLUS_SIGN;
    */
    if(current_num == FIRST) {num1 = (-num1).toString(); displayNum(num1)}
    else {num2 = (-num2).toString(); displayNum(num2)}

}

function chMod() {

}

function dot() {
    if(current_num == FIRST) {num1 = num1 + "."; displayNum(num1)}
    else {num2 = num2 + "."; displayNum(num2)}
}

sign = PLUS_SIGN;

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("num")) {

        var choseButton = e.target.textContent;

        console.log(choseButton);
        addChar(+choseButton);

    }
    else if (e.target.classList.contains("math")) {
        var choseButton = e.target.id;
        sign = PLUS_SIGN;
        if(choseButton === "clear") clear();

        if(choseButton === "add") chOp(ADD);
        if(choseButton === "minus") chOp(MINUS);
        if(choseButton === "mult") chOp(MULT);
        if(choseButton === "pow") chOp(POW);
        if(choseButton === "div") chOp(DIV);
        if(choseButton === "dot") dot();``
        if(choseButton === "sec_pow") {
            if(current_num == SECOND)
                equal();
            num1 = Math.pow(+num1, 2).toString();
            displayNum(num1);
        }
    }
    else if(e.target.classList.contains("equal")) {

        equal();

    }
    else if(e.target.classList.contains("text")) {
        chSign();
    }
    else if(e.target.classList.contains("chmod-btn")) {
        chMod();
    }

});