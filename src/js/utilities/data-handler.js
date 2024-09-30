// 2. Дополнить объект заметки нужными значениями(text, id, status)

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
        return isDataFromStorage;
    } else {
        const notes = {
            regulary: [],
            favorites: [],
        };
        setDataToStorage(notes);
        return notes;
    }
};

const notes = InitialData();
console.log(notes);

export const handlerData = (form) => {
    const formData = new FormData(form);
    const newNote = {
        title: formData.get("input-title"),
        favorite: formData.get("checkBox"),
    };
    console.log(newNote.favorite);

    return newNote;
};
