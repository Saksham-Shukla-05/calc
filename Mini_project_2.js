var getOpe = document.querySelectorAll(".operations");
var getNum = document.querySelectorAll(".Num");
var getEqual = document.querySelector(".operations_equal");
var Clear = document.querySelector(".Clear");

var Num1 = document.getElementById("num1");
var answer = document.getElementById("ans")

var num1Set = false; 
var num2Set = false; 

getOpe.forEach(function (val) {
    val.addEventListener("click", function () {
        if (!num1Set) {
            Num1.textContent += val.innerHTML;
        } 
    });
});

getNum.forEach(function (Num) {
    Num.addEventListener("click", function () {
        if (!num1Set) {
            Num1.textContent += Num.innerHTML;
        } 
    });
});

getEqual.addEventListener("click", () => {
    let cal=Num1.textContent;
    console.log(eval(cal));
    answer.textContent=eval(cal)
    answer.style.display="block" 
});

Clear.addEventListener("click", () => {
    Num1.textContent = "";
    answer.style.display="none"
    answer.innerHTML=""
    num1Set = false;
    num2Set = false;
});
