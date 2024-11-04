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

const setDataToArray = (newNote) => {
    if (newNote.favorite) {
        notes.favorites.push(newNote);
    } else {
        notes.regulary.push(newNote);
    }
};

const handlerData = (form) => {
    const formData = new FormData(form);
    const currentDate = new Date();
    let isTitle = formData.get("input-title");
    let isText = formData.get("message");

    if (isTitle.length < 1) {
        isTitle = "no title";
    }

    if (isText.length < 1) {
        isText = "empty";
    }

    const newNote = {
        title: isTitle,
        text: isText,
        favorite: formData.get("checkBox"),
        date: currentDate.toLocaleString("ru-RU", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }),
    };

    setDataToArray(newNote);
    setDataToStorage(notes);
};

export { handlerData, getDataFromStorage };
