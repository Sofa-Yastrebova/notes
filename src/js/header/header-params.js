const headerElementParams = {
    tagName: "header",
    classList: [
        "dark:border-white",
        "mx-auto",
        "max-w-[1440px]",
        "border-b-2",
        "border-cyan-700",
        "flex",
        "justify-between",
        "py-4",
        "px-4",
        "items-center",
    ],
};

const headerTitleParams = {
    tagName: "span",
    classList: [
        "dark:text-white",
        "font-bold",
        "text-cyan-600",
        "text-xl",
        "capitalize",
    ],
    text: "to-do",
};

const wrapperNightModeParams = {
    tagName: "div",
    classList: ["flex", "gap-4"],
};

export { headerElementParams, headerTitleParams, wrapperNightModeParams };
