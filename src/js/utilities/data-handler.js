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

const setId = (status) => {
    let id = null;

    if (status) {
        id = `favorite${notes.favorites.length}`;
    } else {
        id = `regulary${notes.regulary.length}`;
    }
    return id;
};

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
    let isFavorite = formData.get("checkBox") ? true : false;

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
        id: setId(isFavorite),
    };

    setDataToArray(newNote);
    setDataToStorage(notes);
};

const removeNote = (id) => {
    const currentId = id.startsWith("favorite");
    if (currentId) {
        notes.favorites.forEach((note) => {
            if (id === note.id) {
                const indexCurrentNote = notes.favorites.indexOf(note);
                notes.favorites.splice(indexCurrentNote, 1);
            }
        });
    }
    // дописать улоаие для удаления списка ругюляри
    setDataToStorage(notes);
};

export { handlerData, getDataFromStorage, removeNote };
