const listNotesParams = {
    tagName: "ul",
    classList: ["mx-auto", "max-w-[916px]", "flex", "flex-col", "gap-y-4"],
    attr: {
        id: "listNotes",
    },
};

const liParams = {
    tagName: "li",
    attr: {},
};

const noteParams = {
    tagName: "article",
    classList: [
        "border-2",
        "border-cyan-600",
        "px-[7px]",
        "py-[4px]",
        "rounded-lg",
    ],
    attr: {},
};

const topPartNoteParams = {
    tagName: "div",
    classList: ["flex", "justify-between", "items-center"],
    attr: {},
};

const wrapperTitleAndDateParams = {
    tagName: "div",
    classList: ["flex", "gap-x-4", "items-center"],
    attr: {},
};

const titleNoteParams = {
    tagName: "span",
    classList: ["text-xl", "text-[#10798D]"],
};

const dateParams = {
    tagName: "span",
    classList: ["text-sm", "text-[#ACACAC]"],
};

const textParams = {
    tagName: "p",
    classList: ["text-base", "text-[#393E3F]", "truncate"],
};

const wrapperButtonControlParams = {
    tagName: "div",
    classList: ["flex", "gap-x-1.5"],
};

const favouriteIconParams = {
    tagName: "button",
    classList: [
        "bg-[url('./img/starBlack.svg')]",
        "bg-cover",
        "bg-no-repeat",
        "w-6",
        "h-6",
    ],
};

const favouriteGoldenIconParams = {
    tagName: "button",
    classList: [
        "bg-[url('./img/starGold-btn.svg')]",
        "bg-cover",
        "bg-no-repeat",
        "w-6",
        "h-6",
    ],
};

const editIconParams = {
    tagName: "button",
    classList: [
        "bg-[url('./img/edit-btn.svg')]",
        "bg-cover",
        "bg-no-repeat",
        "w-6",
        "h-6",
    ],
};
const delitIconParams = {
    tagName: "button",
    classList: [
        "bg-[url('./img/trash-btn.svg')]",
        "bg-cover",
        "bg-no-repeat",
        "w-6",
        "h-6",
    ],
    attr: {
        "data-remove": "",
    },
};

export {
    listNotesParams,
    liParams,
    noteParams,
    wrapperTitleAndDateParams,
    topPartNoteParams,
    titleNoteParams,
    dateParams,
    textParams,
    wrapperButtonControlParams,
    favouriteIconParams,
    favouriteGoldenIconParams,
    editIconParams,
    delitIconParams,
};
