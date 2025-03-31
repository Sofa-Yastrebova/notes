import initialModal from "../modal/modal.js";
import { creator } from "./creator.js";
import {
    changeStatus,
    findNote,
    getDataFromStorage,
    removeNote,
    notes,
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
    wrapperTitleAndDateParams,
} from "./params-notes.js";

const creatorNote = (arrayNotes) => {
    const listElementsNotes = arrayNotes.map((note) => {
        const listItemElement = creator(liParams);
        const notesElement = creator(noteParams);
        const topPartNote = creator(topPartNoteParams);
        const wrapperTitleAndDate = creator(wrapperTitleAndDateParams);
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
        topPartNote.append(wrapperTitleAndDate);
        wrapperButtonControl.append(favouriteIcon);
        wrapperButtonControl.append(editIcon);
        wrapperButtonControl.append(delitIcon);
        topPartNote.append(wrapperButtonControl);
        wrapperTitleAndDate.append(titleNote, date);

        return listItemElement;
    });
    return listElementsNotes;
};

const createList = () => {
    let listNotes = document.querySelector("#listNotes");

    if (!listNotes) {
        listNotes = creator(listNotesParams);
    }

    listNotes.addEventListener("click", (e) => {
        const isRemoveButton = e.target.closest("[data-remove]");
        const isEditBtn = e.target.closest("[data-edit]");
        const isCheckbox = e.target.closest("[data-checkbox]");
        const noteItemId = e.target.closest("li").id;

        if (isRemoveButton) {
            removeNote(findNote(noteItemId));
            render(getDataFromStorage());
        } else if (isEditBtn) {
            const statusEdit = true;
            const currentEditNote = findNote(noteItemId);
            initialModal(statusEdit, currentEditNote);
        } else if (isCheckbox) {
            changeStatus(noteItemId);
            console.log(isCheckbox);
            render(notes);
        }
    });

    return listNotes;
};

const render = (data) => {
    // починить рендер
    const listElement = createList();
    listElement.innerHTML = "";
    const wrapperNotes = new DocumentFragment();
    console.log(data);

    const notesElementFavorites = creatorNote(data.favorites);
    const notesElementRegulary = creatorNote(data.regulary);

    notesElementRegulary.forEach((element) => {
        wrapperNotes.prepend(element);
    });

    notesElementFavorites.forEach((element) => {
        wrapperNotes.prepend(element);
    });

    listElement.append(wrapperNotes);
    return listElement;
};

export default render;
