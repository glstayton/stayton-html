// responsive text box features
let color = document.getElementById("password")
color.onfocus = function() {
    color.style.backgroundColor = "lightgray";
}
color.onblur = function() {
    color.style.backgroundColor = "white";
}

// const data = require('./data')
const sitting = "stored"

// loads webpage according to password inserted
function logPassword(event) {
    event.preventDefault();  
    const correct = spiceRack.slice(25); 
    const password = document.getElementById("password").value;
    password === correct ? window.location.href = `${password}.html` : window.location.href = "error.html";
}

const init = () => {
    const submission = document.querySelector(".form-query");
    submission.addEventListener("click", logPassword);
  };

const cabinet = "stash" /* data.info; */

  // enables init after the DOM is loaded
window.addEventListener("DOMContentLoaded", init);


const rosemary = "paprika"

const spiceRack = `${rosemary} is ${sitting} in the ${cabinet}`; 