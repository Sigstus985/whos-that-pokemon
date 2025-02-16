import { toggleBtns } from "./DOM";
import { toggleBtn } from "./advance";
import { modifyScore } from "./score";
import { advance } from "./advance";
import { restart } from "./restart";

document.querySelectorAll(".button").forEach(function (button) {
  button.addEventListener("click", (event) => {
    check(Number(event.target.value));
  });
});

// best practice to use addEventListener instead of onclick
document.getElementById("next").addEventListener("click", advance);
document.getElementById("restart").addEventListener("click", restart);

export function check(buttonNum) {
  const correctNumber = Number(localStorage.getItem("correctNum"));
  // this can be simplified with
  modifyScore(correctNumber === buttonNum);
  toggleBtn();
  toggleBtns();
}
