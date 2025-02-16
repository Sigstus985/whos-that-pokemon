export function assignCorrect() {
  // this can be simplified to one line
  localStorage.setItem("correctNum", Math.floor(Math.random() * 4));
}
