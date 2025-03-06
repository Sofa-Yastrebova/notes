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

const setDate = () => {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString("ru-RU", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    return dateString;
};

const changeNote = (objNote, currentId) => {
    const oldNote = findNote(currentId);
    if (oldNote) {
        const isTitleChange = oldNote.title !== objNote.title;
        const isTextareaChange = oldNote.text !== objNote.text;
        const isCheckboxChange = oldNote.favorite !== objNote.favorite;

        if (isCheckboxChange || isTextareaChange || isTitleChange) {
            objNote.isChange = true;
            removeNote(oldNote);
            objNote.id = setId(objNote.favorite);
            objNote.date = setDate();
            setDataToArray(objNote);
            setDataToStorage(notes);
            return;
        }
    }
};

const handlerData = (form) => {
    const formData = new FormData(form);
    let isTitle = formData.get("input-title");
    let isText = formData.get("message");
    let isFavorite = formData.get("checkBox") ? true : false;

    if (isTitle.length < 1) {
        isTitle = "no title";
    }

    if (isText.length < 1) {
        isText = "empty";
    }

    const currentId = form.dataset.noteid;

    const newNote = {
        title: isTitle,
        text: isText,
        favorite: formData.get("checkBox"),
        date: setDate(),
        id: setId(isFavorite),
    };

    if (currentId) {
        changeNote(newNote, currentId);
    } else {
        newNote.id = setId(newNote.favorite);
        newNote.date = setDate();
        setDataToArray(newNote);
        setDataToStorage(notes);
    }

    // setDataToArray(newNote);
    // setDataToStorage(notes);
};

const decreaseId = (array, indexCurrentNote, status) => {
    for (let i = indexCurrentNote; i < array.length; i++) {
        const oldIdNumber = parseInt(array[i].id);
        const numberId = oldIdNumber - 1;
        const newId = `${numberId}${status}`;
        array[i].id = newId;
    }
};

const removeNote = (objNote) => {
    const [array, status] = objNote.id.endsWith("favorite")
        ? [notes.favorites, "favorite"]
        : [notes.regulary, "regulary"];

    array.forEach((note) => {
        if (objNote.id === note.id) {
            const indexCurrentNote = array.indexOf(note);
            console.log(indexCurrentNote);

            array.splice(indexCurrentNote, 1);

            decreaseId(array, indexCurrentNote, status);
        }
    });

    setDataToStorage(notes);
};

const findNote = (id) => {
    const isFavoriteId = id.endsWith("favorite");
    let currentNote = null;
    if (isFavoriteId) {
        notes.favorites.forEach((note) => {
            if (id === note.id) {
                currentNote = note;
            }
        });
    }
    if (!isFavoriteId) {
        notes.regulary.forEach((note) => {
            if (id === note.id) {
                currentNote = note;
            }
        });
    }

    return currentNote;
};

export { handlerData, getDataFromStorage, removeNote, findNote };
