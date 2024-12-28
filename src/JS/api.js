export async function fetchData() {
	try {
		let randomPokemon = Math.floor(Math.random() * 1025) + 1;
		console.log(randomPokemon);
		let response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
		);
		let data = await response.json();
		document.getElementById("sprite").src = data.sprites.front_default;
		if (!response.ok) {
			throw new Error("Could not fetch resource");
		}
	} catch (error) {
		console.error(error);
	}
}
