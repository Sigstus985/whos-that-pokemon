import { fetchData } from "./api";
import { assignCorrect } from "./assignCorrect";
import { displayQuestion, toggleBtns } from "./DOM";
import { updateQuestion } from "./score";

const nextBtn = document.getElementById("next");

document.getElementById("next").addEventListener("click", () => {
	advance();
});

export function toggleBtn() {
	nextBtn.classList.toggle("hidden");
}

export function advance() {
	fetchData();
	toggleBtn();
	toggleBtns();
	assignCorrect();
	displayQuestion();
	updateQuestion();
}
