import { setData } from "./api";
import { assignCorrect } from "./assignCorrect";
import { displayQuestion } from "./DOM";
import { toggleBtn } from "./advance";
import { playIntro } from "./playIntro";
import { displayScore, updateQuestion } from "./score";

const pokeball = document.getElementById("pokeball");

pokeball.addEventListener("click", () => {
	startGame();
});

export function startGame() {
	document.getElementById("intro").classList.add("hidden");
	document.getElementById("game").classList.remove("hidden");
    localStorage.setItem("numberOfTurns",  document.getElementById("slider").value)
	//playIntro()
    setData();
	assignCorrect();
	displayQuestion();
	updateQuestion();
    displayScore()
}
