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
        id = `${notes.favorites.length}favorite`;
    } else {
        id = `${notes.regulary.length}regulary`;
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
const decreaseId = (array, indexCurrentNote, status) => {
    for (let i = indexCurrentNote; i < array.length; i++) {
        const oldIdNumber = parseInt(array[i].id);
        const numberId = oldIdNumber - 1;
        const newId = `${numberId}${status}`;
        array[i].id = newId;
    }
};

const findNote = (array, id, status) => {
    array.forEach((note) => {
        if (id === note.id) {
            const indexCurrentNote = array.indexOf(note);
            array.splice(indexCurrentNote, 1);

            decreaseId(array, indexCurrentNote, status);
        }
    });
};

const removeNote = (id) => {
    const currentId = id.endsWith("favorite");
    const status = currentId ? "favorite" : "regulary";
    if (currentId) {
        findNote(notes.favorites, id, status);
    }
    if (!currentId) {
        findNote(notes.regulary, id, status);
    }
    setDataToStorage(notes);
};

export { handlerData, getDataFromStorage, removeNote };
