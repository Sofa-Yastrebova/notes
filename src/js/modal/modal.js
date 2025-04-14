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
    buttonEditParams,
} from "./params-modal.js";

import { creator } from "../utilities/creator.js";
import { handlerData, getDataFromStorage } from "../utilities/data-handler.js";
import { createList, clearRender } from "../utilities/render.js";

const initialModal = (status, objNote = {}) => {
    const fadeBlock = creator(fadeBlockParams);
    document.body.append(fadeBlock);

    const form = creator(formParams);
    document.body.append(form);

    if (objNote.id) {
        form.setAttribute("data-noteId", objNote.id);
    }

    const wrapperHeaderForm = creator(wrapperHeaderFormParams);
    form.append(wrapperHeaderForm);

    objNote.title
        ? (titleInputParams.attr.value = objNote.title)
        : (titleInputParams.attr.value = "");

    const titleInput = creator(titleInputParams);
    wrapperHeaderForm.append(titleInput);

    const wrapperFakeCheckbox = creator(wrapperFakeCheckboxParams);
    wrapperHeaderForm.append(wrapperFakeCheckbox);

    objNote.favorite
        ? (inputCheckboxParams.attr.checked = "checked")
        : delete inputCheckboxParams.attr.checked;

    const inputCheckboxEdit = creator(inputCheckboxParams);
    wrapperFakeCheckbox.append(inputCheckboxEdit);

    const spanCheckbox = creator(spanCheckboxParams);
    wrapperFakeCheckbox.append(spanCheckbox);

    objNote.text
        ? (textareaParams.text = objNote.text)
        : (textareaParams.text = "");

    const textarea = creator(textareaParams);
    form.append(textarea);

    const wrapperAction = creator(wrapperActionParams);
    form.append(wrapperAction);

    if (status) {
        const buttonEdit = creator(buttonEditParams);
        wrapperAction.append(buttonEdit);
    } else {
        const buttonAdd = creator(buttonAddParams);
        wrapperAction.append(buttonAdd);
    }

    const buttonCancel = creator(buttonCancelParams);
    wrapperAction.append(buttonCancel);

    const inputTitle = document.querySelector("#inputTitle");

    if (inputTitle) {
        inputTitle.focus();
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        handlerData(form);
        removeRenderModal(form, fadeBlock);
        clearRender();
        createList(getDataFromStorage().favorites);
        createList(getDataFromStorage().regulary);
    });

    buttonCancel.addEventListener("click", () =>
        removeRenderModal(form, fadeBlock)
    );
    fadeBlock.addEventListener("click", () =>
        removeRenderModal(form, fadeBlock)
    );
};

const removeRenderModal = (formElement, fadeBlock) => {
    formElement.remove();
    fadeBlock.remove();
};

export default initialModal;
