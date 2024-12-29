import { fetchData } from "./api";

export function assignCorrect() {
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
    localStorage.setItem("finArray", JSON.stringify(pokeArray))
}