// this can be simplified using an array
const buttons = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
];
const sprite = document.getElementById("sprite");

export function displayQuestion() {
  //fetch necessary information
  const pokeArray = JSON.parse(localStorage.getItem("unfinArray"));
  //console.log(pokeArray)
  const correctNumber = Number(localStorage.getItem("correctNum"));
  //function to correctly capitalize pokemon names
  function capitalize(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  //render image of the pokemon here
  sprite.src = pokeArray[correctNumber].sprites.front_default;

  // then this code can be simplified using a forEach loop
  buttons.forEach((button, index) => {
    button.textContent = capitalize(pokeArray[index].name);
  });
}

export function toggleBtns() {
  const correctNumber = Number(localStorage.getItem("correctNum"));
  const correctBtn = buttons[correctNumber];

  // then this code can be simplified using a forEach loop
  buttons.forEach((button) => {
    button.classList.toggle("incorrect");
    button.disabled = !button.disabled;
  });
  correctBtn.classList.toggle("correct");
}
