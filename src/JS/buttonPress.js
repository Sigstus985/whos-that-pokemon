document.querySelectorAll(".button").forEach(function (elem) {
	elem.addEventListener("click", (event) => {
		check(event.target.value);
	});
});


export function check(buttonNum) {
    const correctNumber = Number(localStorage.getItem("correctNum"));
	//console.log(Number(document.getElementById().value))
	if (correctNumber === Number(buttonNum)) {
		console.log("correct!");
	} else {
		console.log("WRONG DOOFUS");
	}
	changeColor();
}

function changeColor() {
    const correctNumber = Number(localStorage.getItem("correctNum"))
    document.getElementById(`btn${(correctNumber.value + 1)}`).classList.add("correct")
}
