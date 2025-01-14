export async function fetchData() {
	let randomPokemon = Math.floor(Math.random() * 1025) + 1;
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
		);
		if (!response.ok) {
			throw new Error("Network respones was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("There was a problem with the fetch operation: ", error);
		return null;
	}
}

export async function setData() {
	let pokeArray = [];
	for (let i = 0; i < 4; i++) {
		let pokemon = await fetchData()
		pokeArray.push(pokemon)
	}
	localStorage.setItem("unfinArray", JSON.stringify(pokeArray));
}
