import initialModal from "../modal/modal.js";
import { creator } from "./creator.js";
import {
    changeStatus,
    findNote,
    getDataFromStorage,
    removeNote,
} from "./data-handler.js";
import {
    dateParams,
    delitIconParams,
    editIconParams,
    favouriteIconParams,
    favouriteGoldenIconParams,
    liParams,
    listNotesParams,
    noteParams,
    textParams,
    titleNoteParams,
    topPartNoteParams,
    wrapperButtonControlParams,
    wrapperDateAndButtonsParams,
} from "./params-notes.js";

const creatorNote = (arrayNotes) => {
    const listElementsNotes = arrayNotes.map((note) => {
        const listItemElement = creator(liParams);
        const notesElement = creator(noteParams);
        const topPartNote = creator(topPartNoteParams);
        const wrapperDateAndButtons = creator(wrapperDateAndButtonsParams);
        const wrapperButtonControl = creator(wrapperButtonControlParams);
        const titleNote = creator(titleNoteParams);
        const date = creator(dateParams);
        const textNote = creator(textParams);

        let favouriteIcon;
        if (note.favorite) {
            favouriteIcon = creator(favouriteGoldenIconParams);
        } else {
            favouriteIcon = creator(favouriteIconParams);
        }

        const editIcon = creator(editIconParams);
        const delitIcon = creator(delitIconParams);

        titleNote.innerText = note.title;
        textNote.innerText = note.text;
        const isChanged = note.isChange ? "Changed" : "Created";
        date.innerText = `${isChanged} ${note.date.slice(0, 10)} at ${note.date.slice(12)}`;

        listItemElement.id = note.id;
        listItemElement.append(notesElement);
        notesElement.append(topPartNote);
        notesElement.append(textNote);
        topPartNote.append(titleNote);
        wrapperButtonControl.append(favouriteIcon);
        wrapperButtonControl.append(editIcon);
        wrapperButtonControl.append(delitIcon);
        topPartNote.append(wrapperDateAndButtons);
        wrapperDateAndButtons.append(date, wrapperButtonControl);

        return listItemElement;
    });
    return listElementsNotes;
};

const createList = (array) => {
    let listNotes = document.querySelector("#listNotes");
    if (!listNotes) {
        listNotes = creator(listNotesParams);
        listNotes.addEventListener("click", (e) => dispatchNote(e));
    }

    const wrapperNotes = new DocumentFragment();
    const notesElement = creatorNote(array);

    notesElement.forEach((element) => {
        wrapperNotes.prepend(element);
    });

    listNotes.append(wrapperNotes);
    return listNotes;
};

const dispatchNote = (e) => {
    const isRemoveButton = e.target.closest("[data-remove]");
    const isEditBtn = e.target.closest("[data-edit]");
    const isCheckbox = e.target.closest("[data-checkbox]");
    const noteItemId = e.target.closest("li").id;

    if (isRemoveButton) {
        removeNote(findNote(noteItemId));
        clearRender();
        createList(getDataFromStorage().favorites);
        createList(getDataFromStorage().regulary);
    } else if (isEditBtn) {
        const statusEdit = true;
        const currentEditNote = findNote(noteItemId);
        initialModal(statusEdit, currentEditNote);
    } else if (isCheckbox) {
        changeStatus(noteItemId);
        clearRender();
        createList(getDataFromStorage().favorites);
        createList(getDataFromStorage().regulary);
    }
};
// исправить баг удаления заметк после декомпозитции

const clearRender = () => {
    document.querySelector("#listNotes").innerHTML = "";
};

export { createList, clearRender };
