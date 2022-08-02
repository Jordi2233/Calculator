const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");
const dot = document.getElementById("dot");
const ac = document.getElementById("ac");
const pm = document.getElementById("pm");
const procent = document.getElementById("procent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const enter = document.getElementById("enter");
const signBtn = document.getElementsByClassName("btn-s");
const final = document.getElementById("final");
let whichNumber = false;
let sign;



const btnNumbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, dot]

var firstNumber = [];
var secondNumber = [];
let result = firstNumber;


ac.onclick = function () {
    // sign = "";
    whichNumber = false;
    firstNumber = [];
    secondNumber = [];
    final.innerHTML = "0";
    result = firstNumber;

    for (let i = 0; i < signBtn.length; i++) {
        signBtn[i].classList.remove("active")
    }
}



for (let i = 0; i < 11; i++) {

    btnNumbers[i].onclick = function () {



        if (firstNumber.length < 8 && whichNumber === false) {
            firstNumber.push(btnNumbers[i].innerHTML);
            final.innerHTML = firstNumber.join("");

        }

        if (secondNumber.length < 8 && whichNumber === true) {
            secondNumber.push(btnNumbers[i].innerHTML);
            final.innerHTML = secondNumber.join("");

        }

    }

}




procent.onclick = function () {

 

    if (whichNumber === false) {

        if (firstNumber.length === 0) {
            firstNumber = 0;
        }

        if (typeof firstNumber === "object") {

            var fn = firstNumber.join("");

        } else {

            var fn = firstNumber;

        }
        fn = parseFloat(fn);

        fn *= 0.01;
        firstNumber = fn;

        if (fn < 0.0001 | fn < 0.007) {

            final.innerHTML = fn.toExponential(2);

        } else {

            final.innerHTML = fn;
            fn = fn.toString().slice(0, 9);
            fn = parseFloat(fn)
            final.innerHTML = fn;

        }
    } else {

  if (secondNumber.length === 0) {
            secondNumber = 0;
        }

        if (typeof secondNumber === "object") {

            var ln = secondNumber.join("");
        } else {
            var ln = secondNumber;
        }
        ln = parseFloat(ln);

        ln *= 0.1;
        secondNumber = ln;
        if (ln < 0.0001 | ln < 0.007) {
            final.innerHTML = ln.toExponential(2);
        } else {
            ln = ln.toString().slice(0, 9);
            ln = parseFloat(ln)
            final.innerHTML = ln;
        }
    }



}



pm.onclick = function () {

    if (whichNumber === false) {

        if (firstNumber.length === 0) {
            firstNumber = 0;
        }

        if (typeof firstNumber === "number") {

            var fn = firstNumber;
        } else {
            var fn = firstNumber.join("");
        }
        fn = parseFloat(fn);

        fn *= -1;
        firstNumber = fn;

        fn = fn.toString().slice(0, 9);
        fn = parseFloat(fn)
        final.innerHTML = fn;
    } else {

        if (secondNumber.length === 0) {
            secondNumber = 0;
        }

        if (typeof secondNumber === "number") {

            var ln = secondNumber;
        } else {
            var ln = secondNumber.join("");
        }
        ln = parseFloat(ln);

        ln *= -1;
        secondNumber = ln;

        final.innerHTML = ln;

        if (ln === null) {
            result *= -1;
            result = result.toString().slice(0, 9);
            result = parseFloat(result)
            final.innerHTML = result;
        }

    }




}

plus.onclick = function () {
    for (let i = 0; i < signBtn.length; i++) {
        signBtn[i].classList.remove("active")
    }
    whichNumber = true;
    sign = "plus"
    plus.classList.add('active');



}
minus.onclick = function () {
    for (let i = 0; i < signBtn.length; i++) {
        signBtn[i].classList.remove("active")
    }
    whichNumber = true;
    sign = "minus"
    minus.classList.add('active');



}
multiply.onclick = function () {
    for (let i = 0; i < signBtn.length; i++) {
        signBtn[i].classList.remove("active")
    }
    whichNumber = true;
    sign = "multiply"
    multiply.classList.add('active');



}
divide.onclick = function () {

    for (let i = 0; i < signBtn.length; i++) {
        signBtn[i].classList.remove("active")
    }

    whichNumber = true;
    sign = "divide"
    divide.classList.add('active');

}



enter.onclick = function () {

    if (typeof firstNumber === "number") {

        var fn = firstNumber;
    } else {
        var fn = firstNumber.join("");
    }
    if (typeof secondNumber === "number") {

        var ln = secondNumber;
    } else {
        var ln = secondNumber.join("");
    }

    if (ln) {
        switch (sign) {
            case "plus":
                result = parseFloat(fn) + parseFloat(ln);
                break;
            case "minus":
                result = parseFloat(fn) - parseFloat(ln);
                break;
            case "divide":
                if (parseFloat(ln) === 0) {
                    result = "Error";

                } else {
                    result = parseFloat(fn) / parseFloat(ln);
                }
                break;
            case "multiply":
                if (parseFloat(ln) === 0) {
                    result = 0;
                } else {
                    result = parseFloat(fn) * parseFloat(ln);
                }
                break;
        }

    } else {
        switch (sign) {
            case "plus":
                result = parseFloat(fn) + parseFloat(fn);
                break;
            case "minus":
                result = parseFloat(fn) - parseFloat(fn);
                break;
            case "divide":
                result = parseFloat(fn) / parseFloat(ln);
                break;
            case "multiply":
                result = parseFloat(fn) * parseFloat(fn);
                break;
        }
    }




    sign = "";
    firstNumber = [];
    secondNumber = [];
    firstNumber.push(result);




    for (let i = 0; i < signBtn.length; i++) {
        signBtn[i].classList.remove("active")
    }



    if (isNaN(result) | isNaN(fn) | isNaN(ln) | typeof result === "undefined" | typeof fn === "undefined" | typeof ln === "undefined") {
        final.innerHTML = "Error";
    } else {
        if (result > 99999999) {
            final.innerHTML = result.toExponential(2);
        } else {
            result = result.toString().slice(0, 9);
            result = parseFloat(result);
            final.innerHTML = result;
        }
    }


}