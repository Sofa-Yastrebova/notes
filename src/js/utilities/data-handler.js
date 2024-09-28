// 1. Создать функцию для инициализации данных в локальном хранилище
// 2. Дополнить объект заметки нужными значениями(text, id, status)
// const notes =

const setDataToStorage = (notes) => {
    const dataString = JSON.stringify(notes);
    localStorage.setItem("notes", dataString);
};

const getDataFromStorage = () => {
    const dataFromLocal = localStorage.getItem("notes");
    const dataParse = JSON.parse(dataFromLocal);
    return dataParse;
};

const InitialData = () => {
    const isDataFromStorage = getDataFromStorage();

    if (isDataFromStorage) {
        console.log(isDataFromStorage);
    } else {
        const notes = {
            regulary: [],
            favorites: [],
        };
        setDataToStorage(notes);
    }
};

InitialData();

// const handlerData = (form) => {
//     const formData = new FormData(form);
//     const newNote = {
//         title: formData.get("input-title"),
//     };

//     return newNote;
// };
