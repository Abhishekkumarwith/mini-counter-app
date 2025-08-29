(function(){
const countDisplay = document.getElementById("number-counter");
const incrementButton = document.querySelector("#increment button:nth-child(2)");
const decrementButton = document.querySelector("#increment button:nth-child(1)");
const resetButton = document.getElementById("reset-btn");
const inputField = document.getElementById("myInput");
let plusBtn=parseInt(inputField.value)
let minusBtn=parseInt(inputField.value)
incrementButton.addEventListener("click", () => {
  const countValue =parseInt(countDisplay.innerText)
  countDisplay.innerText=countValue + plusBtn
  console.log('Plus Operator');
  
});

decrementButton.addEventListener("click", () => {
const countValue=parseInt(countDisplay.innerText)
  countDisplay.innerText = countValue-minusBtn
  console.log('Minus Operator');
});

inputField.addEventListener("input", () => {
  let enteredValue = parseInt(inputField.value);
  if (enteredValue < 1) {
    inputField.value = 1;
  }
  if (enteredValue > 10) {
    inputField.value = 1;

  }
});
 
const resetCounter = () => {
  counterValue = 0;
  counterDisplay.innerText = counterValue;
};

resetButton.addEventListener("click", resetCounter);
})()
