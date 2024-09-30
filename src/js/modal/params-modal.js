const buttonAddParams = {
    tagName: "button",
    classList: [
        "bg-cyan-600",
        "px-8",
        "py-1",
        "rounded-md",
        "text-white",
        "min-w-[110px]",
        "hover:opacity-75",
    ],
    text: "Add",
};

const buttonEditParams = {
    tagName: "button",
    classList: [
        "bg-cyan-600",
        "px-8",
        "py-1",
        "rounded-md",
        "text-white",
        "min-w-[110px]",
        "hover:opacity-75",
    ],
    text: "Edit",
};

const buttonCancelParams = {
    tagName: "button",
    classList: [
        "bg-[#CD103E]",
        "px-8",
        "py-1",
        "rounded-md",
        "text-white",
        "min-w-[110px]",
        "hover:opacity-75",
    ],
    text: "Cancel",
};

const formParams = {
    tagName: "form",
    classList: [
        "max-w-[915px]",
        "w-full",
        "bg-white",
        "rounded-md",
        "fixed",
        "bottom-1/2",
        "right-1/2",
        "translate-y-1/2",
        "translate-x-1/2",
        "py-[30px]",
        "px-[36px]",
    ],
    attr: {
        id: "form",
    },
};

const fadeBlockParams = {
    tagName: "div",
    classList: [
        "w-full",
        "bg-[#D9D9D9]",
        "h-screen",
        "opacity-80",
        "fixed",
        "top-0",
        "left-0",
        "fixed",
    ],
};

const wrapperHeaderFormParams = {
    tagName: "div",
    classList: [
        "flex",
        "justify-between",
        "max-w-[362px]",
        "border-b-2",
        "border-cyan-600",
        "py-1",
        "mb-3",
    ],
};

const titleInputParams = {
    tagName: "input",
    classList: ["max-w-[330px]", "w-full", "block", "outline-none", "p-1"],
    attr: {
        placeholder: "Title",
        id: "inputTitle",
        name: "input-title",
    },
};

const wrapperFakeCheckboxParams = {
    tagName: "label",
    classList: ["cursor-pointer"],
};

const inputCheckboxParams = {
    tagName: "input",
    attr: {
        type: "checkbox",
        name: "checkBox",
    },
    classList: ["-z-1", "absolute", "opacity-0", "w-0", "h-0"],
};

const spanCheckboxParams = {
    tagName: "span",
    classList: [
        "block",
        "w-6",
        "h-6",
        "relative",
        "favoriteButton",
        "before:content-['']",
        "before:block",
        "before:w-5",
        "before:h-5",
        "before:bg-cover",
        "before:bg-center",
        "before:bg-no-repeat",
        "before:absolute",
        "before:bottom-1/2",
        "before:right-1/2",
        "before:translate-y-1/2",
        "before:translate-x-1/2",
    ],
};

const textareaParams = {
    tagName: "textarea",
    classList: [
        "w-full",
        "max-h-80",
        "min-h-28",
        "resize-y",
        "outline-none",
        "focus:shadow-md",
        "shadow-black",
        "mb-2",
        "p-1",
    ],
    attr: {
        placeholder: "Your note",
        id: "textareaModal",
    },
};

const wrapperActionParams = {
    tagname: "div",
    classList: ["flex", "justify-end", "gap-3"],
};

export {
    buttonAddParams,
    buttonCancelParams,
    buttonEditParams,
    formParams,
    fadeBlockParams,
    wrapperFakeCheckboxParams,
    wrapperHeaderFormParams,
    textareaParams,
    titleInputParams,
    inputCheckboxParams,
    spanCheckboxParams,
    wrapperActionParams,
};
