const evaluation = document.getElementById("eval");
const endScore = document.getElementById("end-score");

import { score } from "./score";

export function endGame() {
	let numberOfTurns = Number(localStorage.getItem("numberOfTurns"));

	document.getElementById("game").classList.add("hidden");
	document.getElementById("finish").classList.remove("hidden");

	endScore.textContent = `${score}/${numberOfTurns}`;

	function evaluate() {
		if (score / numberOfTurns === 1) {
			return "Maximum points! You might actually have what it takes to become a pokémon master!";
		} else if (score === numberOfTurns - 1) {
			return "So close! Try again and you'll surely get 'em all!";
		} else if (score === 0) {
			return "Wow! You really need to get better at this, keep on training buddy.";
		} else if (score === 1) {
			return "Well, at least you got one point...";
		} else if (score === numberOfTurns / 2) {
			return "Half isn't bad, but it isn't really good either...";
		} else if (score > numberOfTurns / 2) {
			return "That's not too shabby actually!";
		} else if (score < numberOfTurns / 2) {
			return "Not even half? You can do better!";
		} else return "Nice job";
	}
	evaluation.textContent = evaluate();
}
