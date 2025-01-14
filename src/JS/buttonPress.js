import { toggleBtns } from "./DOM";
import { toggleBtn } from "./advance";
import { modifyScore } from "./score";
import { advance } from "./advance";
import { restart } from "./restart";

document.querySelectorAll(".button").forEach(function (button) {
	button.addEventListener("click", (event) => {
		check(Number(event.target.value));
	});
});

document.getElementById("next").addEventListener("click", () => {
	advance();
});

document.getElementById("restart").addEventListener("click", () => {
	restart();
});

export function check(buttonNum) {
	const correctNumber = Number(localStorage.getItem("correctNum"));
	if (correctNumber === buttonNum) {
		modifyScore(true);
		toggleBtn();
	} else {
		modifyScore(false);
		toggleBtn();
	}
	toggleBtns();
}
