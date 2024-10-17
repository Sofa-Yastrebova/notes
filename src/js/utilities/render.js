import { creator } from "./creator.js";
import {
    dateParams,
    liParams,
    listNotesParams,
    noteParams,
    textParams,
    titleNoteParams,
    topPartNoteParams,
    wrapperTitleAndDateParams,
} from "./params-notes.js";

const render = (data) => {
    let listNotes = document.querySelector("#listNotes");

    if (!listNotes) {
        listNotes = creator(listNotesParams);
        const main = document.querySelector("#main");

        main.append(listNotes);
    }

    const favourite = data.favorites;
    favourite.forEach((note) => {
        const listItemElement = creator(liParams);

        const notesElement = creator(noteParams);
        const topPartNote = creator(topPartNoteParams);
        const wrapperTitleAndDate = creator(wrapperTitleAndDateParams);
        const titleNote = creator(titleNoteParams);
        const date = creator(dateParams);
        const textNote = creator(textParams);

        titleNote.innerText = note.title;
        textNote.innerText = note.text;
        date.innerText = `Created ${note.date.slice(0, 10)} at ${note.date.slice(12)}`;
        listNotes.append(listItemElement);
        listItemElement.append(notesElement);
        notesElement.append(topPartNote);
        notesElement.append(textNote);
        topPartNote.append(wrapperTitleAndDate);
        wrapperTitleAndDate.append(titleNote, date);
    });
};

export default render;

//1.Перебрать данные вмассивах
//2.на каждом круге цикла создавать заметку и рендерить её
