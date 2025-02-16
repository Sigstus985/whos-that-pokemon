const evaluation = document.getElementById("eval");
const endScore = document.getElementById("end-score");

import { score } from "./score";

export function endGame() {
  let numberOfTurns = Number(localStorage.getItem("numberOfTurns"));

  document.getElementById("game").classList.add("hidden");
  document.getElementById("finish").classList.remove("hidden");

  endScore.textContent = `${score}/${numberOfTurns}`;

  function evaluate() {
    // i suggest using a switch statement for better readability
    const ratio = score / numberOfTurns;
    switch (true) {
      case ratio === 1:
        return "Maximum points! You might actually have what it takes to become a pokémon master!";
      case score === numberOfTurns - 1:
        return "So close! Try again and you'll surely get 'em all!";
      case score === 0:
        return "Wow! You really need to get better at this, keep on training buddy.";
      case score === 1:
        return "Well, at least you got one point...";
      case score === numberOfTurns / 2:
        return "Half isn't bad, but it isn't really good either...";
      case score > numberOfTurns / 2:
        return "That's not too shabby actually!";
      case score < numberOfTurns / 2:
        return "Not even half? You can do better!";
      default:
        return "Nice job";
    }
  }

  evaluation.textContent = evaluate();
}
