import { toggleBtns } from "./DOM";
import { toggleBtn } from "./advance";
import { modifyScore } from "./score";
import { advance } from "./advance";

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
		toggleBtn()
	} else {
		modifyScore(false);
		toggleBtn()
	}
	toggleBtns();
}