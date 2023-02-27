const d0 = document.querySelector("#d0");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");
const d4 = document.querySelector("#d4");
const d5 = document.querySelector("#d5");
const d6 = document.querySelector("#d6");
const d7 = document.querySelector("#d7");
const d8 = document.querySelector("#d8");
const d9 = document.querySelector("#d9");
const equal = document.querySelector("#equal");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const clearBtn = document.querySelector("#clear");
const display = document.querySelector(".text");
const buttons = document.querySelectorAll(".buttons")
const actionStatus = document.querySelector(".action");
let memory = [];
let action;
d0.addEventListener("click", () => { refresh("0") })
d1.addEventListener("click", () => { refresh("1") })
d2.addEventListener("click", () => { refresh("2") })
d3.addEventListener("click", () => { refresh("3") })
d4.addEventListener("click", () => { refresh("4") })
d5.addEventListener("click", () => { refresh("5") })
d6.addEventListener("click", () => { refresh("6") })
d7.addEventListener("click", () => { refresh("7") })
d8.addEventListener("click", () => { refresh("8") })
d9.addEventListener("click", () => { refresh("9") })
equal.addEventListener("click", () => { memory.push(parseInt(display.innerHTML)); clear(); compute(); })
plus.addEventListener("click", () => { memory.push(parseInt(display.innerHTML)); clear(); actionS("+"); })
minus.addEventListener("click", () => { memory.push(parseInt(display.innerHTML)); clear(); actionS("-"); })
divide.addEventListener("click", () => { memory.push(parseInt(display.innerHTML)); clear(); actionS("/"); })
multiply.addEventListener("click", () => { memory.push(parseInt(display.innerHTML)); clear(); actionS("*"); })
clearBtn.addEventListener("click", () => { clear() })
function clear() {
    display.innerHTML = "";
    actionStatus.innerHTML = "";
}
function refresh(r) {
    display.innerHTML += r;
}
function compute() {
    if (action === "+") {
        refresh(memory[memory.length - 2] + memory[memory.length - 1]);
    }
    if (action === "-") {
        refresh(memory[memory.length - 2] - memory[memory.length - 1]);
    }
    if (action === "/") {
        refresh(memory[memory.length - 2] / memory[memory.length - 1]);
    }
    if (action === "*") {
        refresh(memory[memory.length - 2] * memory[memory.length - 1]);
    }
}
function actionS(str) {
    action = str;
    actionStatus.innerHTML = str
}