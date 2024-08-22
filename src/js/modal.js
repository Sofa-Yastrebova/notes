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

const initialModal = () => {
    const fadeBlock = creator(fadeBlockParams);
    document.body.append(fadeBlock);
    const form = creator(formParams);
    document.body.append(form);
};

const creator = (elementParams) => {
    const element = document.createElement(elementParams.tagName);

    if (elementParams.text) {
        element.textContent = elementParams.text;
    }

    if (elementParams.id) {
        element.id = elementParams.id;
    }

    if (elementParams.classList.length > 0) {
        element.classList.add(...elementParams.classList);
    }
    return element;
};

btnAddNote.addEventListener("click", initialModal);
