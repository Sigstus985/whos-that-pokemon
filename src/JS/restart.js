import { score } from "./score"
import { currentQuestion } from "./score"
import { reset } from "./score"

export function restart() {
    document.getElementById("intro").classList.remove("hidden")
    document.getElementById("finish").classList.add("hidden")
    reset()
}