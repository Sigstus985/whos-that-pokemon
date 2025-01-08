import { fetchData } from "./api";
import { assignCorrect } from "./assignCorrect";
import { displayQuestion, toggleBtns } from "./DOM";
import { updateQuestion } from "./score";

const nextBtn = document.getElementById("next")

document.getElementById("next").addEventListener("click", () => {
    advance()
})

export function toggleBtn() {
	nextBtn.classList.toggle("hidden");
}

export function advance() {
	let numberOfTurns = Number(localStorage.getItem("numberOfTurns")) + 1
	let currentQuestion = Number(localStorage.getItem("currentQuestion"))
	if (currentQuestion < numberOfTurns){
		newRound()
	}
	else {
		endGame()
	}
}

function newRound() {
	fetchData();
	toggleBtn()
	toggleBtns()
	assignCorrect()
	displayQuestion();
	updateQuestion();
}

function endGame() {
	document.getElementById("game").classList.add("hidden")
	document.getElementById("finish").classList.remove("hidden")
}