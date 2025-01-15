import "./style.css"


import { assignCorrect } from "./JS/assignCorrect";
import { displayQuestion } from "./JS/DOM";
import { check } from "./JS/buttonPress";
import { fetchData, setData } from "./JS/api";
import { displayScore, updateQuestion } from "./JS/score";
import { startGame } from "./JS/start";

window.addEventListener("load", (event) => {
    setData()
});  