export async function fetchData() {
	try {
		for (let i = 0; i < 10; i++) {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 152)+1}`);
			const data = await response.json();
			console.log(data.name);
		}
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
	} catch (error) {
		console.error(error);
	}
}
