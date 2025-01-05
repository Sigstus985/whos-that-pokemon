document.querySelectorAll(".button").forEach(function (button) {
	button.addEventListener("click", (event) => {
		check(event.target.value);
	});
});

export function check(buttonNum) {
	const correctNumber = Number(localStorage.getItem("correctNum"));
	//console.log(Number(document.getElementById().value))
	if (correctNumber === Number(buttonNum)) {
		console.log("correct!");
	} else {
		console.log("WRONG DOOFUS");
	}
	changeColor();
}


function changeColor() {
    const correctNumber = Number(localStorage.getItem("correctNum"));
	buttons = document.querySelectorAll(".button");
    const button1 = document.getElementById("btn1");
    const button2 = document.getElementById("btn2");
    const button3 = document.getElementById("btn3");
    const button4 = document.getElementById("btn4");
    const correctBtn = document.getElementById(`btn${correctNumber + 1}`);

	button1.classList.add("incorrect");
	button2.classList.add("incorrect");
	button3.classList.add("incorrect");
	button4.classList.add("incorrect");
	correctBtn.classList.add("correct");
	correctBtn.classList.remove("incorrect");
}