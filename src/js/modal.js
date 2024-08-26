// 1.Показывает окно при нажатии на кнопку add note
// 2.Выбрать версию окна
// 3.Создать окно и отобразить на странице

const btnAddNote = document.querySelector("#btnAddNote");

// const buttonAddParams = {
//     tagName: "button",
//     classList: [
//         "bg-cyan-600",
//         "px-8",
//         "py-1",
//         "rounded-md",
//         "text-white",
//         "min-w-[110px]",
//         "hover:opacity-75",
//     ],
//     id: "",
//     text: "Add",
// };

// const buttonEditParams = {
//     tagName: "button",
//     classList: [
//         "bg-cyan-600",
//         "px-8",
//         "py-1",
//         "rounded-md",
//         "text-white",
//         "min-w-[110px]",
//         "hover:opacity-75",
//     ],
//     id: "",
//     text: "Edit",
// };

// const buttonCancelParams = {
//     tagName: "button",
//     classList: [
//         "bg-[#CD103E]",
//         "px-8",
//         "py-1",
//         "rounded-md",
//         "text-white",
//         "min-w-[110px]",
//         "hover:opacity-75",
//     ],
//     id: "",
//     text: "Cancel",
// };

const formParams = {
    tagName: "form",
    classList: [
        "max-w-[915px]",
        "w-full",
        "h-[400px]",
        "bg-white",
        "rounded-md",
        "fixed",
        "bottom-1/2",
        "right-1/2",
        "translate-y-1/2",
        "translate-x-1/2",
        "py-[30px]",
        "px-[36px]",
    ],
};

const fadeBlockParams = {
    tagName: "div",
    classList: [
        "w-full",
        "bg-[#D9D9D9]",
        "h-screen",
        "opacity-80",
        "fixed",
        "top-0",
        "left-0",
        "fixed",
    ],
};

const wrapperHeaderFormParams = {
    tagName: "div",
    classList: ["max-w-[362px]", "border-b-2", "border-cyan-600"],
};

const titleInputParams = {
    tagName: "input",
    classList: ["max-w-[330px]", "w-full", "block", "outline-none"],
};

const wrapperFakeCheckboxParams = {
    tagName: "label",
};

const inputCheckboxParams = {
    tagName: "input",
    attr: {
        type: "checkbox",
    },
    classList: ["-z-1", "absolute", "opacity-0", "w-0", "h-0"],
};

const spanCheckboxParams = {
    tagName: "span",
    classList: [
        "block",
        "w-6",
        "h-6",
        "relative",
        "favoriteButton",
        "before:content-['']",
        "before:block",
        "before:w-5",
        "before:h-5",
        "before:bg-cover",
        "before:bg-center",
        "before:bg-no-repeat",
        "before:absolute",
        "before:bottom-1/2",
        "before:right-1/2",
        "before:translate-y-1/2",
        "before:translate-x-1/2",
    ],
};

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
};

const creator = (elementParams) => {
    const element = document.createElement(elementParams.tagName);

    if (elementParams.text) {
        element.textContent = elementParams.text;
    }

    if (elementParams.id) {
        element.id = elementParams.id;
    }

    if (elementParams.attr) {
        for (const key in elementParams.attr) {
            element.setAttribute(key, elementParams.attr[key]);
        }
    }
    // пересмотреть условие
    if (elementParams.classList) {
        element.classList.add(...elementParams.classList);
    }
    return element;
};

btnAddNote.addEventListener("click", initialModal);
