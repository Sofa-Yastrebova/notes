import {
    buttonAddParams,
    buttonCancelParams,
    formParams,
    fadeBlockParams,
    wrapperFakeCheckboxParams,
    wrapperHeaderFormParams,
    textareaParams,
    titleInputParams,
    inputCheckboxParams,
    spanCheckboxParams,
    wrapperActionParams,
} from "./params-modal.js";

import { creator } from "../utilities/creator.js";

const btnAddNote = document.querySelector("#btnAddNote");

const initialModal = () => {
    const fadeBlock = creator(fadeBlockParams);
    document.body.append(fadeBlock);

    const form = creator(formParams);
    document.body.append(form);

    const wrapperHeaderForm = creator(wrapperHeaderFormParams);
    form.append(wrapperHeaderForm);

    const titleInput = creator(titleInputParams);
    wrapperHeaderForm.append(titleInput);

    const wrapperFakeCheckbox = creator(wrapperFakeCheckboxParams);
    wrapperHeaderForm.append(wrapperFakeCheckbox);

    const inputCheckbox = creator(inputCheckboxParams);
    wrapperFakeCheckbox.append(inputCheckbox);

    const spanCheckbox = creator(spanCheckboxParams);
    wrapperFakeCheckbox.append(spanCheckbox);

    const textarea = creator(textareaParams);
    form.append(textarea);

    const wrapperAction = creator(wrapperActionParams);
    form.append(wrapperAction);

    const buttonAdd = creator(buttonAddParams);
    wrapperAction.append(buttonAdd);

    const buttonCancel = creator(buttonCancelParams);
    wrapperAction.append(buttonCancel);

    const inputTitle = document.querySelector("#inputTitle");
    if (inputTitle) {
        inputTitle.focus();
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);

        const formData = new FormData(form);

        const newNote = {
            title: formData.get("input-title"),
        };

        const dataString = JSON.stringify(newNote);
        localStorage.setItem("notes", dataString);

        // const dataFromLocal = localStorage.getItem("notes");
        // const parseData = JSON.parse(dataFromLocal);

        form.remove();
        fadeBlock.remove();
    });
};

btnAddNote.addEventListener("click", initialModal);

// 1.удалять рендер окна/модалки
// 2.декомпозировать функцию по отправке формы
