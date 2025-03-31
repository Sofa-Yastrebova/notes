import "./main.css";
import "./js/modal/modal.js";
import render from "./js/utilities/render.js";
import { getDataFromStorage } from "./js/utilities/data-handler.js";
import header from "./js/header/header.js";
import addBtn from "./js/addBtn/addBtn.js";

const initialApp = () => {
    const containerApp = document.body;
    containerApp.append(header());
    containerApp.append(addBtn());
    containerApp.append(render(getDataFromStorage()));
};
initialApp();

// 2. Создать отальные элементы через жс
