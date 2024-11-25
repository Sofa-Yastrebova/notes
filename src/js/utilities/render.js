import { creator } from "./creator.js";
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
        date.innerText = `Created ${note.date.slice(0, 10)} at ${note.date.slice(12)}`;
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
        const main = document.querySelector("#main");

        main.append(listNotes);
    }

    listNotes.addEventListener("click", (e) => {
        const isRemove = e.target.closest("[data-remove]");

        if (isRemove) {
            const noteItem = isRemove.closest("li");
            const currentId = noteItem.id;
            console.log(currentId);
        }
    });

    return listNotes;
};

const listElement = createList();

const render = (data) => {
    listElement.innerHTML = "";
    const wrapperNotes = new DocumentFragment();

    const notesElementFavorites = creatorNote(data.favorites);
    const notesElementRegulary = creatorNote(data.regulary);

    notesElementRegulary.forEach((element) => {
        wrapperNotes.prepend(element);
    });

    notesElementFavorites.forEach((element) => {
        wrapperNotes.prepend(element);
    });

    listElement.append(wrapperNotes);
};

export default render;

//1. найти в данных заметку по id(dataHandler)
//2. Удалить нужную заметку
//3. Уменьшить id последующих заметок
//4. Перезапустить render
