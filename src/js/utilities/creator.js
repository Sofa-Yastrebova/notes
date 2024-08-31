const creator = (elementParams) => {
    const element = document.createElement(elementParams.tagName);

    if (elementParams.text) {
        element.textContent = elementParams.text;
    }

    if (elementParams.id) {
        element.id = elementParams.id;
    }

    if (elementParams.attr) {
        for (const key in elementParams.attr) {
            element.setAttribute(key, elementParams.attr[key]);
        }
    }

    if (elementParams.classList) {
        element.classList.add(...elementParams.classList);
    }
    return element;
};

export { creator };
