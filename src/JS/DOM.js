const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const sprite = document.getElementById("sprite");


export function displayQuestion() {
	//fetch necessary information
	const pokeArray = JSON.parse(localStorage.getItem("unfinArray"));
	const correctNumber = Number(localStorage.getItem("correctNum"));
	//function to correctly capitalize pokemon names
	function capitalize(val) {
		return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}
	//render image of the pokemon here
	sprite.src = pokeArray[correctNumber].sprites.front_default;
	//change text on the buttons here
	const pokemon1 = pokeArray[0].name;
	const pokemon2 = pokeArray[1].name;
	const pokemon3 = pokeArray[2].name;
	const pokemon4 = pokeArray[3].name;
	button1.textContent = `${capitalize(pokemon1)}`;
	button2.textContent = `${capitalize(pokemon2)}`;
	button3.textContent = `${capitalize(pokemon3)}`;
	button4.textContent = `${capitalize(pokemon4)}`;
}

export function toggleBtns() {
	const correctNumber = Number(localStorage.getItem("correctNum"));
	const correctBtn = document.getElementById(`btn${correctNumber + 1}`);

	button1.classList.toggle("incorrect");
	button2.classList.toggle("incorrect");
	button3.classList.toggle("incorrect");
	button4.classList.toggle("incorrect");
	correctBtn.classList.toggle("correct");

	button1.disabled = !button1.disabled;
	button2.disabled = !button2.disabled;
	button3.disabled = !button3.disabled;
	button4.disabled = !button4.disabled;
}