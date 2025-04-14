import { creator } from "../utilities/creator";
import {
    allNotesBtnParams,
    favoritesBtnParams,
    wrapperBtnsParams,
} from "./filter-params";
import { getDataFromStorage } from "../utilities/data-handler.js";
import { createList, clearRender } from "../utilities/render.js";

const filter = () => {
    const allNotesBtn = creator(allNotesBtnParams);
    const favoritesBtn = creator(favoritesBtnParams);
    const wrapperBtns = creator(wrapperBtnsParams);

    wrapperBtns.append(allNotesBtn, favoritesBtn);
    wrapperBtns.addEventListener("click", (e) => switchFilter(e));

    return wrapperBtns;
};

const switchFilter = (e) => {
    const isBtn = e.target.closest("[data-filter]");
    if (isBtn) {
        const currentNotes = isBtn.dataset.filter;
        switch (currentNotes) {
            case "favorite":
                clearRender();
                createList(getDataFromStorage().favorites);
                break;
            case "all":
                clearRender();
                createList(getDataFromStorage().favorites);
                createList(getDataFromStorage().regulary);
                break;
        }
    }
};
export default filter;
