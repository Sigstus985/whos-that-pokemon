import { changeBtns } from "./DOM";
import { showBtn } from "./newRound";
import { modifyScore } from "./score";

document.querySelectorAll(".button").forEach(function (button) {
	button.addEventListener("click", (event) => {
		check(event.target.value);
	});
});

export function check(buttonNum) {
	const correctNumber = Number(localStorage.getItem("correctNum"));
	//console.log(Number(document.getElementById().value))
	if (correctNumber === Number(buttonNum)) {
		//console.log("correct!");
		modifyScore(true)
	} else if (buttonNum) {
		//console.log("WRONG DOOFUS");
		modifyScore(false)
	} else {
		
	}
	changeBtns();
	showBtn()
}