{
    /* <button class="flex items-center gap-2 hover:opacity-75 dark:text-white capitalize text-cyan-600 font-bold min-w-24" id="btnAddNote">
<span>
    add note
</span>
<span class="dark:bg-[url('./img/add-note-dark.svg')] block w-7 h-7 bg-[url('./img/add-note.svg')] bg-contain bg-no-repeat bg-center"></span>
</button> */
}

const addBtnParams = {
    tagName: "button",
    classList: [
        "flex",
        "items-center",
        "gap-2",
        "hover:opacity-75",
        "dark:text-white",
        "capitalize",
        "text-cyan-600",
        "font-bold",
        "min-w-24",
        "mx-auto",
        "my-[40px]",
    ],
    attr: {
        id: "btnAddNote",
    },
};

const addNoteTitleParams = {
    tagName: "span",
    classList: ["text-xl"],
    text: "add note",
};

const addBtnIconParams = {
    tagName: "span",
    classList: [
        "dark:bg-[url('./img/add-note-dark.svg')]",
        "block",
        "w-7",
        "h-7",
        "bg-[url('./img/add-note.svg')]",
        "bg-contain",
        "bg-no-repeat",
        "bg-center",
    ],
};

export { addBtnIconParams, addNoteTitleParams, addBtnParams };
