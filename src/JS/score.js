const scoreEl = document.getElementById("score");
let score = 0;
let questions = 0;

export function displayScore() {
	scoreEl.textContent = `${score}/${questions}`;
}

export function modifyScore(isCorrect) {
    if(isCorrect) {
        console.log("Correct!")
    } else {
        console.log("WRONG DOOFUS");
    }
}