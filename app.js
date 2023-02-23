"use strict";

let number = 0;

window.addEventListener("load", initApp);

function initApp() {
    console.log("initApp - App is running");
    document.querySelector("#btn-increment").addEventListener("click", incrementNumber);
    document.querySelector("#btn-decrement").addEventListener("click", decrementNumber);
}

function incrementNumber() {
    console.log("Plus-knap");
    console.log(number);
    number++;
    console.log(number);
    displayNumber();
}

function decrementNumber() {
    console.log("Minus-knap");
    console.log(number);
    number--;
    console.log(number);
    displayNumber();
}

function displayNumber() {
    console.log("displayNumber");
    let message = `The number is: ${number}`;
    console.log(message);
    document.querySelector("#message").textContent = message;
    if (number > 10) {
        message = message + ", it is above 10";
    } else if (number === 10) {
        message = "tallet er 10";
    } else {
        message = message + ", it is below 10";
    }
    console.log(message);
    document.querySelector("#message").textContent = message;
}
