export async function fetchData() {
	try {
		for (let i = 0; i < 4; i++) {
			//fetch data and save it as a json variable, log the name of the first 3 pokemon and render the 4th
			if (i === 3){
				let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025)+1}`);
				let data = await response.json();
				document.getElementById("sprite").src = data.sprites.front_default
			}
			else {
				let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025)+1}`);
				let data = await response.json();
				console.log(data.name)
			}
		}
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
	} catch (error) {
		console.error(error);
	}
}
