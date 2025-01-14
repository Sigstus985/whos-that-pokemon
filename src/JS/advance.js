import { setData } from "./api";
import { assignCorrect } from "./assignCorrect";
import { displayQuestion, toggleBtns } from "./DOM";
import { updateQuestion } from "./score";
import { endGame } from "./DOM";

const nextBtn = document.getElementById("next");

document.getElementById("next").addEventListener("click", () => {
	advance();
});

export function toggleBtn() {
	nextBtn.classList.toggle("hidden");
}

export function advance() {
	let numberOfTurns = Number(localStorage.getItem("numberOfTurns")) + 1;
	let currentQuestion = Number(localStorage.getItem("currentQuestion"));
	if (currentQuestion < numberOfTurns) {
		newRound();
	} else {
		endGame();
	}
}

function newRound() {
	setData();
	toggleBtn();
	toggleBtns();
	assignCorrect();
	displayQuestion();
	updateQuestion();
}
