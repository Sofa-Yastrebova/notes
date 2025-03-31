import "./main.css";
import "./js/modal/modal.js";
import render from "./js/utilities/render.js";
import { getDataFromStorage } from "./js/utilities/data-handler.js";
import header from "./js/header/header.js";

const initialApp = () => {
    const containerApp = document.body;
    containerApp.append(header());
    containerApp.append(render(getDataFromStorage()));
};
initialApp();

// 1.Починить ночнй режим
// 2. Создать отальные элементы через жс
