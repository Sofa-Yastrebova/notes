// const notes = {
//     regulary: [],
//     favorites: [],
// }

// 1. Создать функцию для инициализации данных в локальном хранилище
// 2. Дополнить объект заметки нужными значениями(text, id, status)

// const InitialData = () => {

// }

export const setDataToStorage = (form) => {
    const dataString = JSON.stringify(handlerData(form));
    localStorage.setItem("notes", dataString);
};

const handlerData = (form) => {
    const formData = new FormData(form);
    const newNote = {
        title: formData.get("input-title"),
    };

    return newNote;
};
