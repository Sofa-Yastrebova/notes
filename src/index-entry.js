import "./main.css";
import "./js/modal/modal.js";
import { createList } from "./js/utilities/render.js";
import { getDataFromStorage } from "./js/utilities/data-handler.js";
import header from "./js/header/header.js";
import addBtn from "./js/addBtn/addBtn.js";
import filter from "./js/filter/filter.js";

const initialApp = () => {
    const containerApp = document.body;
    containerApp.append(header());
    containerApp.append(filter());
    containerApp.append(addBtn());
    containerApp.append(createList(getDataFromStorage().favorites));
    containerApp.append(createList(getDataFromStorage().regulary));
};
initialApp();
