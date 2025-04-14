import { creator } from "../utilities/creator";
import {
    allNotesBtnParams,
    favoritesBtnParams,
    wrapperBtnsParams,
} from "./filter-params";

const filter = () => {
    const allNotesBtn = creator(allNotesBtnParams);
    const favoritesBtn = creator(favoritesBtnParams);
    const wrapperBtns = creator(wrapperBtnsParams);

    wrapperBtns.append(allNotesBtn, favoritesBtn);
    // wrapperBtns.addEventListener("click", (e) => switchFilter(e))

    return wrapperBtns;
};

// const switchFilter = (e) => {

// }
export default filter;
