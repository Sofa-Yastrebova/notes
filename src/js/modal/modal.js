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
        setDataToStorage(form);
        removeRenderModal(form, fadeBlock);
    });
};

const handlerData = (form) => {
    const formData = new FormData(form);

    const newNote = {
        title: formData.get("input-title"),
    };

    return newNote;
};

const setDataToStorage = (form) => {
    const dataString = JSON.stringify(handlerData(form));
    localStorage.setItem("notes", dataString);
};

const removeRenderModal = (formElement, fadeBlock) => {
    formElement.remove();
    fadeBlock.remove();
};

btnAddNote.addEventListener("click", initialModal);

// 2.декомпозировать функцию по отправке формы
//    2.3. Работа с локальным хранилищем
