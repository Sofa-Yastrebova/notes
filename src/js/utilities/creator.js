const creator = (elementParams) => {
    const element = document.createElement(elementParams.tagName);
    const text = elementParams.text;
    const attr = elementParams.attr;
    const classList = elementParams.classList;

    addTextContent(element, text);
    addAttr(element, attr);
    addClassList(element, classList);

    return element;
};

const addTextContent = (currentElement, text) => {
    if (currentElement && text) {
        currentElement.textContent = text;
    }
};
const addClassList = (currentElement, classList) => {
    if (currentElement && classList) {
        currentElement.classList.add(...classList);
    }
};
const addAttr = (currentElement, attr) => {
    if (currentElement && attr) {
        for (const key in attr) {
            currentElement.setAttribute(key, attr[key]);
        }
    }
};

export { creator };
