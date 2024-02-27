function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const randomNumber = getRandomInt(100);

let count = 0;
function check() {
  let inputNumber = document.getElementById("guessNumber").value;
  let text = document.getElementById("text");
  if (inputNumber > 100) {
    alert("dude are you dum???? it sayes to max is 100  ");
  }
  if (inputNumber == randomNumber) {
    text.innerHTML = "you guessed corectly in the " + count + "th attempt";
    const corectNum = document.getElementById("secretNumber");
    corectNum.innerHTML = randomNumber;
  } else if (inputNumber < randomNumber) {
    text.innerHTML = "your number is low";
    count += 1;
  } else if (inputNumber > randomNumber) {
    text.innerHTML = "your number is high";
    count += 1;
  }
}
function plus() {
  let inputNumber = Number(document.getElementById("guessNumber").value);
  inputNumber = inputNumber + 1;
  document.getElementById("guessNumber").value = inputNumber;
}
function minus() {
  let inputNumber = Number(document.getElementById("guessNumber").value);
  inputNumber = inputNumber - 1;
  document.getElementById("guessNumber").value = inputNumber;
}
