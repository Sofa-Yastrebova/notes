const wrapperBtnsParams = {
    tagName: "div",
    classList: ["flex", "gap-6", "justify-center", "pt-12", "pb-8", "px-4"],
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
        "xs:min-w-44",
        "min-w-36",
        "py-1",
        "rounded-lg",
        "text-white",
    ],
    attr: {
        "data-filter": "all",
    },
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
        "xs:min-w-44",
        "min-w-36",
        "py-1",
        "rounded-lg",
        "text-white",
    ],
    attr: {
        "data-filter": "favorite",
    },
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
