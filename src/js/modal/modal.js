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
import render from "../utilities/render.js";

const btnAddNote = document.querySelector("#btnAddNote");

const initialModal = (status, objNote = null) => {
    const fadeBlock = creator(fadeBlockParams);
    document.body.append(fadeBlock);

    const form = creator(formParams);
    document.body.append(form);

    const wrapperHeaderForm = creator(wrapperHeaderFormParams);
    form.append(wrapperHeaderForm);

    if (objNote) {
        const titleInputParamsEdit = titleInputParams;
        titleInputParamsEdit.attr.value = objNote.title;
        const titleInput = creator(titleInputParamsEdit);
        wrapperHeaderForm.append(titleInput);
    } else {
        const titleInput = creator(titleInputParams);
        wrapperHeaderForm.append(titleInput);
    }

    const wrapperFakeCheckbox = creator(wrapperFakeCheckboxParams);
    wrapperHeaderForm.append(wrapperFakeCheckbox);

    const inputCheckbox = creator(inputCheckboxParams);
    wrapperFakeCheckbox.append(inputCheckbox);

    const spanCheckbox = creator(spanCheckboxParams);
    wrapperFakeCheckbox.append(spanCheckbox);

    if (objNote) {
        console.log(objNote);

        const textareaParamsEdit = textareaParams;
        textareaParamsEdit.text = objNote.text;
        console.log(textareaParamsEdit);

        const textarea = creator(textareaParamsEdit);
        form.append(textarea);
    } else {
        const textarea = creator(textareaParams);
        form.append(textarea);
    }

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
        render(getDataFromStorage());
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

btnAddNote.addEventListener("click", () => {
    const statusAdd = false;
    initialModal(statusAdd);
});

export default initialModal;
