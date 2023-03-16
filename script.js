"use strict";

const accessButton = document.querySelector("#button");
const accessEmail = document.querySelector("#email");
const accessAlert = document.querySelector(".main__early-access--invisible");

accessButton.addEventListener("click", () => {
    if (!(accessEmail.value.includes("@") & accessEmail.value.includes("."))) {
        accessAlert.style.display = "block";
    } else {
        accessAlert.style.display = "none";
    }
})