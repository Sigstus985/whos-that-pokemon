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
	console.log(numberOfTurns, currentQuestion)
	if (currentQuestion < numberOfTurns){
		fetchData();
		toggleBtn()
		toggleBtns()
		assignCorrect()
		displayQuestion();
		updateQuestion();
	}
	else {
		console.log("The end!")
	}
}
