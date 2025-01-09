import "./index.html";
import "./main.css";
import "./js/dark-mode.js";
import "./js/modal/modal.js";
import render from "./js/utilities/render.js";
import { getDataFromStorage } from "./js/utilities/data-handler.js";

render(getDataFromStorage());
