import "./style.css"
//import { fetchData } from "./JS/api";
//import { playIntro } from "./JS/playIntro";

import { assignCorrect } from "./JS/assignCorrect";
import { displayQuestion } from "./JS/DOM";
import { check } from "./JS/buttonPress";
import { fetchData } from "./JS/api";
import { displayScore } from "./JS/score";

fetchData()
assignCorrect()
displayQuestion()
displayScore()