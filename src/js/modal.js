// 1.Показывает окно при нажатии на кнопку add note
// 2.Выбрать версию окна
// 3.Создать окно и отобразить на странице

const btnAddNote = document.querySelector("#btnAddNote");

const initialModal = () => {
    const fadeBlock = document.createElement("div");
    document.body.append(fadeBlock);
};

btnAddNote.addEventListener("click", initialModal);
