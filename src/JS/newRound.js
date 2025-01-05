const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
	advance();
});

export function toggleBtn() {
	nextBtn.classList.toggle("hidden")
}

export function advance() {
    toggleBtn()
}
