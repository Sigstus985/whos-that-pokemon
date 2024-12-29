export async function fetchData() {
	let pokeArray = [];
	for (let i = 0; i < 4; i++) {
		let randomPokemon = Math.floor(Math.random() * 1025) + 1;
		let response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
		);
		let data = await response.json();
		pokeArray.push(data);
	}
	localStorage.setItem("unfinArray", JSON.stringify(pokeArray))
}