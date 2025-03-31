import initialModal from "../modal/modal";
import { creator } from "../utilities/creator";
import {
    addBtnIconParams,
    addBtnParams,
    addNoteTitleParams,
} from "./addBtnParams";

const addBtn = () => {
    const addBtn = creator(addBtnParams);
    const addNoteTitle = creator(addNoteTitleParams);
    const addBtnIcon = creator(addBtnIconParams);

    addBtn.addEventListener("click", callForm);

    addBtn.append(addNoteTitle);
    addBtn.append(addBtnIcon);
    return addBtn;
};

const callForm = () => {
    const statusAdd = false;
    initialModal(statusAdd);
};

export default addBtn;
