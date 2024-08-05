// 1.Показывает окно при нажатии на кнопку add note
// 2.Выбрать версию окна
// 3.Создать окно и отобразить на странице

const btnAddNote = document.querySelector("#btnAddNote");

const buttonAddParams = {
    tagName: "button",
    classList: [
        "bg-cyan-600",
        "px-8",
        "py-1",
        "rounded-md",
        "text-white",
        "min-w-[110px]",
        "hover:opacity-75",
    ],
    id: "",
    text: "Add",
};

const buttonEditParams = {
    tagName: "button",
    classList: [
        "bg-cyan-600",
        "px-8",
        "py-1",
        "rounded-md",
        "text-white",
        "min-w-[110px]",
        "hover:opacity-75",
    ],
    id: "",
    text: "Edit",
};

const buttonCancelParams = {
    tagName: "button",
    classList: [
        "bg-[#CD103E]",
        "px-8",
        "py-1",
        "rounded-md",
        "text-white",
        "min-w-[110px]",
        "hover:opacity-75",
    ],
    id: "",
    text: "Cancel",
};

const initialModal = () => {
    const buttonAdd = creator(buttonAddParams);
    const buttonEdit = creator(buttonEditParams);
    const buttonCancel = creator(buttonCancelParams);
    document.body.append(buttonCancel);
    document.body.append(buttonAdd);
    document.body.append(buttonEdit);
};

const creator = (elementParams) => {
    const element = document.createElement(elementParams.tagName);
    element.textContent = elementParams.text;
    element.classList.add(...elementParams.classList);
    return element;
};

btnAddNote.addEventListener("click", initialModal);
