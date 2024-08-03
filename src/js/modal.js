// 1.Показывает окно при нажатии на кнопку add note
// 2.Выбрать версию окна
// 3.Создать окно и отобразить на странице

const btnAddNote = document.querySelector("#btnAddNote");

const buttonAddParams = {
    tagName: "button",
    classList: ["bg-cyan-600", "px-9"],
    id: "",
    text: "Add",
};

const initialModal = () => {
    const buttonAdd = creator(buttonAddParams);
    document.body.append(buttonAdd);
};

const creator = (elementParams) => {
    const element = document.createElement(elementParams.tagName);
    element.textContent = elementParams.text;
    element.classList.add(...elementParams.classList);
    return element;
};

btnAddNote.addEventListener("click", initialModal);
