import { creator } from "./creator.js";
import {
    dateParams,
    delitIconParams,
    editIconParams,
    favouriteIconParams,
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
        const favouriteIcon = creator(favouriteIconParams);
        const editIcon = creator(editIconParams);
        const delitIcon = creator(delitIconParams);

        titleNote.innerText = note.title;
        textNote.innerText = note.text;
        date.innerText = `Created ${note.date.slice(0, 10)} at ${note.date.slice(12)}`;
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

const render = (data) => {
    let listNotes = document.querySelector("#listNotes");

    if (!listNotes) {
        listNotes = creator(listNotesParams);
        const main = document.querySelector("#main");

        main.append(listNotes);
    }

    const notesElementFavorites = creatorNote(data.favorites);
    const notesElementRegulary = creatorNote(data.regulary);

    notesElementFavorites.forEach((element) => {
        listNotes.append(element);
    });

    notesElementRegulary.forEach((element) => {
        listNotes.append(element);
    });
};

export default render;
// 3.Отображать сначала избранные, а потом обычные
//  3.1 использовать фрагмент
