const scoreEl = document.getElementById("score");
let score = 0;
let questions = 0;

export function displayScore() {
	scoreEl.textContent = `${score}/${questions}`;
}

export function modifyScore(isCorrect) {
	if (isCorrect) {
		score += 1;
	}
	questions += 1;
    displayScore()
}
