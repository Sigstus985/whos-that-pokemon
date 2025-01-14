const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question")

export let score = 0;
export let currentQuestion = 1;


export function displayScore() {
	let questions = localStorage.getItem("numberOfTurns")
	scoreEl.textContent = `${score}/${questions}`;
}

export function updateQuestion() {
	questionEl.textContent = `Round ${currentQuestion}`
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
	localStorage.setItem("currentQuestion", currentQuestion)
    displayScore()
}

export function reset() {
	score = 0
    currentQuestion = 1
}