const nightModeParams = {
    tagName: "button",
    classList: [
        "hover:opacity-75",
        "dark:bg-white",
        "flex",
        "justify-center",
        "items-center",
        "w-10",
        "h-10",
        "bg-cyan-600",
        "rounded-full",
    ],
    attr: {
        id: "buttonDarkMode",
    },
};

const nightModeIconParams = {
    tagName: "span",
    classList: [
        "dark:bg-[url('./img/moonicon.svg')]",
        "block",
        "w-7",
        "h-7",
        "bg-contain",
        "bg-no-repeat",
        "bg-center",
        "bg-[url('./img/sun-icon.svg')]",
    ],
};

export { nightModeParams, nightModeIconParams };
