export function assignCorrect() {
	const correctNumber = Number(Math.floor(Math.random() * 4));
	localStorage.setItem("correctNum", correctNumber)
}