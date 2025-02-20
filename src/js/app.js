// TODO: write code here

import { Game } from "./Game";

// document.addEventListener("DOMContentLoaded", () => {
const start = new Game(document.querySelector(".game-field"));
setInterval(() => start.randPosition(), 10000);
// });
