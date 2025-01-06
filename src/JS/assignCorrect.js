import { fetchData } from "./api";

//kanske ha kvar ifall det är bättre practice eller lättare
/* export function assignCorrect() {
	fetchData();
	const pokeArray = JSON.parse(localStorage.getItem("unfinArray"));
	const correctNumber = Math.floor(Math.random() * 4);
	console.log(correctNumber);
	for (let i = 0; i < pokeArray.length; i++) {
		const key = "is_correct";
		if (i === correctNumber) {
			pokeArray[i][key] = true;
		} else {
			pokeArray[i][key] = false;
		}
	}
    console.log(pokeArray)
    localStorage.setItem("finArray", JSON.stringify(pokeArray))
} */

export function assignCorrect() {
	const correctNumber = Number(Math.floor(Math.random() * 4));
	localStorage.setItem("correctNum", correctNumber)
}