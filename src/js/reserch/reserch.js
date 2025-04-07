import { creator } from "../utilities/creator";
import { researchElementParams } from "./research-params";

const reserch = () => {
    const researchElement = creator(researchElementParams);

    researchElement.addEventListener("input", (e) => findNote(e));

    return researchElement;
};

const findNote = (e) => {
    const allNotes = document.querySelectorAll("[data-note]");
    let inputValue = e.target.value;
    allNotes.forEach((li) => {
        const title = li.querySelector("[data-title]").textContent;
        const text = li.querySelector("[data-text]").textContent;

        if (
            title.toLowerCase().includes(inputValue.toLowerCase()) ||
            text.toLowerCase().includes(inputValue.toLowerCase())
        ) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
};

export default reserch;
// дописать поиск замнток
