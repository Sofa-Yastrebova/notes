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

const removeNote = (id) => {
    const currentId = id.endsWith("favorite");
    if (currentId) {
        notes.favorites.forEach((note) => {
            if (id === note.id) {
                const indexCurrentNote = notes.favorites.indexOf(note);
                notes.favorites.splice(indexCurrentNote, 1);

                for (
                    let i = indexCurrentNote;
                    i < notes.favorites.length;
                    i++
                ) {
                    console.log(parseInt(notes.favorites[i].id));
                    const oldIdNumber = parseInt(notes.favorites[i].id);
                    const numberId = oldIdNumber - 1;
                    const newId = `${numberId}favorite`;
                    notes.favorites[i].id = newId;
                }
            }
        });
    }
    if (!currentId) {
        notes.regulary.forEach((note) => {
            if (id === note.id) {
                const indexCurrentNote = notes.regulary.indexOf(note);
                notes.regulary.splice(indexCurrentNote, 1);

                for (let i = indexCurrentNote; i < notes.regulary.length; i++) {
                    console.log(parseInt(notes.regulary[i].id));
                    const oldIdNumber = parseInt(notes.regulary[i].id);
                    const numberId = oldIdNumber - 1;
                    const newId = `${numberId}regulary`;
                    notes.regulary[i].id = newId;
                }
            }
        });
    }
    setDataToStorage(notes);
};

export { handlerData, getDataFromStorage, removeNote };
