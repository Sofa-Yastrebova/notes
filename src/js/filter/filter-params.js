const wrapperBtnsParams = {
    tagName: "div",
    classList: ["flex", "gap-6", "justify-center", "pt-12", "pb-8"],
};

const allNotesBtnParams = {
    tagName: "button",
    classList: [
        "hover:opacity-75",
        "font-bold",
        "dark:bg-skay-400",
        "dark:text-[#fff]",
        "bg-cyan-600",
        "capitalize",
        "min-w-44",
        "py-1",
        "rounded-lg",
        "text-white",
    ],
    text: "all notes",
};

const favoritesBtnParams = {
    tagName: "button",
    classList: [
        "hover:opacity-75",
        "font-bold",
        "dark:bg-sky-400",
        "dark:text-[#fff]",
        "bg-cyan-600",
        "capitalize",
        "min-w-44",
        "py-1",
        "rounded-lg",
        "text-white",
    ],
    text: "favorites",
};

const filterBtnParams = {
    tagName: "input",
    classList: [],
};

export {
    wrapperBtnsParams,
    allNotesBtnParams,
    favoritesBtnParams,
    filterBtnParams,
};
