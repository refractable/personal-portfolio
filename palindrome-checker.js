const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener('click', checkPalindrome);

function checkPalindrome() {
  const input = textInput.value.toLowerCase(); 
  
  if (input === "") {
    alert("Please input a value");
    return;
  }

  const cleanInput = input.replace(/[^a-z0-9]/gi, ''); 

  const reversedInput = cleanInput.split("").reverse().join("");
  const isPalindrome = cleanInput === reversedInput;

  result.textContent = isPalindrome ? 
  `${input} is a palindrome` :
  `${input} is not a palindrome`;
}
