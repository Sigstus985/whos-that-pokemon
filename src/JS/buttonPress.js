import { toggleBtns } from "./DOM";
import { toggleBtn } from "./newRound";
import { modifyScore } from "./score";
import { advance } from "./newRound";

document.querySelectorAll(".button").forEach(function (button) {
	button.addEventListener("click", (event) => {
		check(Number(event.target.value));
	});
});

export function check(buttonNum) {
	const correctNumber = Number(localStorage.getItem("correctNum"));
	//console.log(Number(document.getElementById().value))
	if (correctNumber === buttonNum) {
		modifyScore(true);
		console.log("True!");
		console.log(buttonNum);
		console.log(correctNumber);
		toggleBtn()
	} else {
		modifyScore(false);
		console.log("False!");
		console.log(buttonNum);
		console.log(correctNumber);
		toggleBtn()
	}
	toggleBtns();
}
