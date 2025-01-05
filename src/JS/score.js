const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question")
let score = 0;
let currentQuestion = 1;
let questions = 20;

export function displayScore() {
	scoreEl.textContent = `${score}/${questions}`;
}

export function updateQuestion() {
	questionEl.textContent = `Question ${currentQuestion}`
}

export function modifyScore(isCorrect) {
	if (isCorrect) {
		score += 1;
		questionEl.textContent = "Correct!"
	}
	else {
		questionEl.textContent = "WRONG DOOFUS!"
	}
	currentQuestion += 1
    displayScore()
}
