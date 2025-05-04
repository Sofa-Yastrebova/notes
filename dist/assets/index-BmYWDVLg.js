(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
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
    "dark:bg-[#fff]",
    "dark:text-cyan-600"
  ],
  text: "Add"
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
    "dark:bg-[#fff]",
    "dark:text-cyan-600"
  ],
  text: "Edit"
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
    "dark:bg-[#880000]"
  ],
  text: "Cancel"
};
const formParams = {
  tagName: "form",
  classList: [
    "max-w-[915px]",
    "w-[96%]",
    "bg-white",
    "rounded-md",
    "fixed",
    "bottom-1/2",
    "right-1/2",
    "translate-y-1/2",
    "translate-x-1/2",
    "py-[30px]",
    "px-[36px]",
    "dark:bg-[#036578]"
  ],
  attr: {
    id: "form"
  }
};
const fadeBlockParams = {
  tagName: "div",
  classList: [
    "w-full",
    "bg-[#d9d9d9ac]",
    "dark:bg-[#041a1ed7]",
    "h-screen",
    "fixed",
    "top-0",
    "left-0",
    "fixed",
    "backdrop-blur-sm"
  ]
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
    "dark:border-white"
  ]
};
const titleInputParams = {
  tagName: "input",
  classList: [
    "max-w-[330px]",
    "w-full",
    "block",
    "outline-none",
    "p-1",
    "dark:text-white",
    "dark:placeholder:text-white"
  ],
  attr: {
    placeholder: "Title",
    id: "inputTitle",
    name: "input-title",
    value: ""
  }
};
const wrapperFakeCheckboxParams = {
  tagName: "label",
  classList: ["cursor-pointer"]
};
const inputCheckboxParams = {
  tagName: "input",
  attr: {
    type: "checkbox",
    name: "checkBox"
  },
  classList: ["-z-1", "absolute", "opacity-0", "w-0", "h-0"]
};
const spanCheckboxParams = {
  tagName: "span",
  classList: [
    "block",
    "w-6",
    "h-6",
    "relative",
    "favoriteButton",
    "bg-[url('/starBlack.svg')]",
    "dark:bg-[url('/starBlack-dark.svg')]",
    "bg-cover",
    "bg-no-repeat"
  ]
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
    "dark:text-white",
    "dark:placeholder:text-white",
    "dark:shadow-white",
    "scrollbar"
  ],
  attr: {
    placeholder: "Your note",
    id: "textareaModal",
    name: "message"
  },
  text: ""
};
const wrapperActionParams = {
  classList: ["flex", "justify-end", "gap-3"]
};
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
const setDataToStorage = (notes2) => {
  const dataString = JSON.stringify(notes2);
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
    const notes2 = {
      regulary: [],
      favorites: []
    };
    setDataToStorage(notes2);
    return notes2;
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
const setDate = () => {
  const currentDate = /* @__PURE__ */ new Date();
  const dateString = currentDate.toLocaleString("ru-RU", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return dateString;
};
const changeNote = (objNote, currentId) => {
  const oldNote = findNote$1(currentId);
  if (oldNote) {
    const isTitleChange = oldNote.title !== objNote.title;
    const isTextareaChange = oldNote.text !== objNote.text;
    const isCheckboxChange = oldNote.favorite !== objNote.favorite;
    if (isCheckboxChange || isTextareaChange || isTitleChange) {
      objNote.isChange = true;
      removeNote(oldNote);
      objNote.id = setId(objNote.favorite);
      objNote.date = setDate();
      setDataToArray(objNote);
      setDataToStorage(notes);
      return;
    }
  }
};
const handlerData = (form) => {
  const formData = new FormData(form);
  let isTitle = formData.get("input-title");
  let isText = formData.get("message");
  let isFavorite = formData.get("checkBox") ? true : false;
  if (isTitle.length < 1) {
    isTitle = "no title";
  }
  if (isText.length < 1) {
    isText = "empty";
  }
  const currentId = form.dataset.noteid;
  const newNote = {
    title: isTitle,
    text: isText,
    favorite: formData.get("checkBox")
    // date: setDate(),
    // id: setId(isFavorite),
  };
  if (currentId) {
    changeNote(newNote, currentId);
  } else {
    newNote.id = setId(isFavorite);
    newNote.date = setDate();
    setDataToArray(newNote);
    setDataToStorage(notes);
  }
};
const decreaseId = (array, indexCurrentNote, status) => {
  for (let i = indexCurrentNote; i < array.length; i++) {
    const oldIdNumber = parseInt(array[i].id);
    const numberId = oldIdNumber - 1;
    const newId = `${numberId}${status}`;
    array[i].id = newId;
  }
};
const removeNote = (objNote) => {
  console.log(objNote);
  const [array, status] = objNote.id.endsWith("favorite") ? [notes.favorites, "favorite"] : [notes.regulary, "regulary"];
  array.forEach((note) => {
    if (objNote.id === note.id) {
      const indexCurrentNote = array.indexOf(note);
      array.splice(indexCurrentNote, 1);
      decreaseId(array, indexCurrentNote, status);
    }
  });
  setDataToStorage(notes);
};
const changeStatus = (id) => {
  const note = findNote$1(id);
  note.favorite ? note.favorite = null : note.favorite = "on";
  note.isChange = true;
  removeNote(note);
  note.id = setId(note.favorite);
  note.date = setDate();
  setDataToArray(note);
  setDataToStorage(notes);
};
const findNote$1 = (id) => {
  const isFavoriteId = id.endsWith("favorite");
  let currentNote = null;
  if (isFavoriteId) {
    notes.favorites.forEach((note) => {
      if (id === note.id) {
        currentNote = note;
      }
    });
  }
  if (!isFavoriteId) {
    notes.regulary.forEach((note) => {
      if (id === note.id) {
        currentNote = note;
      }
    });
  }
  return currentNote;
};
const listNotesParams = {
  tagName: "ul",
  classList: [
    "mx-auto",
    "max-w-[916px]",
    "flex",
    "flex-col",
    "gap-y-4",
    "px-4",
    "max-h-[450px]",
    "overflow-x-auto",
    "scrollbar",
    "w-[96%]"
  ],
  attr: {
    id: "listNotes"
  }
};
const liParams = {
  tagName: "li",
  attr: {
    "data-note": ""
  }
};
const noteParams = {
  tagName: "article",
  classList: [
    "border-2",
    "border-cyan-600",
    "px-[7px]",
    "py-[4px]",
    "rounded-lg"
  ],
  attr: {}
};
const topPartNoteParams = {
  tagName: "div",
  classList: ["flex", "justify-between", "items-center", "flex-wrap"],
  attr: {}
};
const wrapperDateAndButtonsParams = {
  tagName: "div",
  classList: ["flex", "gap-x-4", "items-center", "flex-wrap", "mb-2"],
  attr: {}
};
const titleNoteParams = {
  tagName: "span",
  classList: [
    "text-xl",
    "text-[#10798D]",
    "dark:text-cyan-600",
    "truncate",
    "block",
    "max-w-[300px]",
    "mb-2"
  ],
  attr: {
    "data-title": ""
  }
};
const dateParams = {
  tagName: "span",
  classList: ["text-sm", "text-[#ACACAC]", "shrink-0"]
};
const textParams = {
  tagName: "p",
  classList: ["text-base", "text-[#393E3F]", "truncate", "dark:text-[#fff]"],
  attr: {
    "data-text": ""
  }
};
const wrapperButtonControlParams = {
  tagName: "div",
  classList: ["flex", "gap-x-1.5"]
};
const favouriteIconParams = {
  tagName: "button",
  classList: [
    "bg-[url('/starBlack.svg')]",
    "dark:bg-[url('/starBlack-dark.svg')]",
    "bg-cover",
    "bg-no-repeat",
    "w-6",
    "h-6"
  ],
  attr: {
    "data-checkbox": ""
  }
};
const favouriteGoldenIconParams = {
  tagName: "button",
  classList: [
    "bg-[url('/starGold-btn.svg')]",
    "bg-cover",
    "bg-no-repeat",
    "w-6",
    "h-6"
  ],
  attr: {
    "data-checkbox": ""
  }
};
const editIconParams = {
  tagName: "button",
  classList: [
    "bg-[url('/edit-btn.svg')]",
    "dark:bg-[url('/edit-btn-dark.svg')]",
    "bg-cover",
    "bg-no-repeat",
    "w-6",
    "h-6"
  ],
  attr: {
    "data-edit": ""
  }
};
const delitIconParams = {
  tagName: "button",
  classList: [
    "bg-[url('/trash-btn.svg')]",
    "dark:bg-[url('/trash-btn-dark.svg')]",
    "bg-cover",
    "bg-no-repeat",
    "w-6",
    "h-6"
  ],
  attr: {
    "data-remove": ""
  }
};
const creatorNote = (arrayNotes) => {
  const listElementsNotes = arrayNotes.map((note) => {
    const listItemElement = creator(liParams);
    const notesElement = creator(noteParams);
    const topPartNote = creator(topPartNoteParams);
    const wrapperDateAndButtons = creator(wrapperDateAndButtonsParams);
    const wrapperButtonControl = creator(wrapperButtonControlParams);
    const titleNote = creator(titleNoteParams);
    const date = creator(dateParams);
    const textNote = creator(textParams);
    let favouriteIcon;
    if (note.favorite) {
      favouriteIcon = creator(favouriteGoldenIconParams);
    } else {
      favouriteIcon = creator(favouriteIconParams);
    }
    const editIcon = creator(editIconParams);
    const delitIcon = creator(delitIconParams);
    titleNote.innerText = note.title;
    textNote.innerText = note.text;
    const isChanged = note.isChange ? "Changed" : "Created";
    date.innerText = `${isChanged} ${note.date.slice(0, 10)} at ${note.date.slice(12)}`;
    listItemElement.id = note.id;
    listItemElement.append(notesElement);
    notesElement.append(topPartNote);
    notesElement.append(textNote);
    topPartNote.append(titleNote);
    wrapperButtonControl.append(favouriteIcon);
    wrapperButtonControl.append(editIcon);
    wrapperButtonControl.append(delitIcon);
    topPartNote.append(wrapperDateAndButtons);
    wrapperDateAndButtons.append(date, wrapperButtonControl);
    return listItemElement;
  });
  return listElementsNotes;
};
const createList = (array) => {
  let listNotes = document.querySelector("#listNotes");
  if (!listNotes) {
    listNotes = creator(listNotesParams);
    listNotes.addEventListener("click", (e) => dispatchNote(e));
  }
  const wrapperNotes = new DocumentFragment();
  const notesElement = creatorNote(array);
  notesElement.forEach((element) => {
    wrapperNotes.prepend(element);
  });
  listNotes.append(wrapperNotes);
  return listNotes;
};
const dispatchNote = (e) => {
  const isRemoveButton = e.target.closest("[data-remove]");
  const isEditBtn = e.target.closest("[data-edit]");
  const isCheckbox = e.target.closest("[data-checkbox]");
  const noteItemId = e.target.closest("li").id;
  if (isRemoveButton) {
    removeNote(findNote$1(noteItemId));
    clearRender();
    createList(getDataFromStorage().favorites);
    createList(getDataFromStorage().regulary);
  } else if (isEditBtn) {
    const statusEdit = true;
    const currentEditNote = findNote$1(noteItemId);
    initialModal(statusEdit, currentEditNote);
  } else if (isCheckbox) {
    changeStatus(noteItemId);
    clearRender();
    createList(getDataFromStorage().favorites);
    createList(getDataFromStorage().regulary);
  }
};
const clearRender = () => {
  document.querySelector("#listNotes").innerHTML = "";
};
const initialModal = (status, objNote = {}) => {
  const fadeBlock = creator(fadeBlockParams);
  document.body.append(fadeBlock);
  const form = creator(formParams);
  document.body.append(form);
  if (objNote.id) {
    form.setAttribute("data-noteId", objNote.id);
  }
  const wrapperHeaderForm = creator(wrapperHeaderFormParams);
  form.append(wrapperHeaderForm);
  objNote.title ? titleInputParams.attr.value = objNote.title : titleInputParams.attr.value = "";
  const titleInput = creator(titleInputParams);
  wrapperHeaderForm.append(titleInput);
  const wrapperFakeCheckbox = creator(wrapperFakeCheckboxParams);
  wrapperHeaderForm.append(wrapperFakeCheckbox);
  objNote.favorite ? inputCheckboxParams.attr.checked = "checked" : delete inputCheckboxParams.attr.checked;
  const inputCheckboxEdit = creator(inputCheckboxParams);
  wrapperFakeCheckbox.append(inputCheckboxEdit);
  const spanCheckbox = creator(spanCheckboxParams);
  wrapperFakeCheckbox.append(spanCheckbox);
  objNote.text ? textareaParams.text = objNote.text : textareaParams.text = "";
  const textarea = creator(textareaParams);
  form.append(textarea);
  const wrapperAction = creator(wrapperActionParams);
  form.append(wrapperAction);
  if (status) {
    const buttonEdit = creator(buttonEditParams);
    wrapperAction.append(buttonEdit);
  } else {
    const buttonAdd = creator(buttonAddParams);
    wrapperAction.append(buttonAdd);
  }
  const buttonCancel = creator(buttonCancelParams);
  wrapperAction.append(buttonCancel);
  const inputTitle = document.querySelector("#inputTitle");
  if (inputTitle) {
    inputTitle.focus();
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handlerData(form);
    removeRenderModal(form, fadeBlock);
    clearRender();
    createList(getDataFromStorage().favorites);
    createList(getDataFromStorage().regulary);
  });
  buttonCancel.addEventListener(
    "click",
    () => removeRenderModal(form, fadeBlock)
  );
  fadeBlock.addEventListener(
    "click",
    () => removeRenderModal(form, fadeBlock)
  );
};
const removeRenderModal = (formElement, fadeBlock) => {
  formElement.remove();
  fadeBlock.remove();
};
const researchElementParams = {
  tagName: "input",
  classList: [
    "border-cyan-600",
    "border-2",
    "rounded-lg",
    "px-2",
    "dark:bg-stone-50"
  ],
  attr: {
    placeholder: "Search..."
  }
};
const reserch = () => {
  const researchElement = creator(researchElementParams);
  researchElement.addEventListener("input", (e) => findNote(e));
  return researchElement;
};
const findNote = (e) => {
  const allNotes = document.querySelectorAll("[data-note]");
  let inputValue = e.target.value;
  allNotes.forEach((li) => {
    const title = li.querySelector("[data-title]").textContent;
    const text = li.querySelector("[data-text]").textContent;
    if (title.toLowerCase().includes(inputValue.toLowerCase()) || text.toLowerCase().includes(inputValue.toLowerCase())) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
};
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
    "items-center"
  ]
};
const headerTitleParams = {
  tagName: "span",
  classList: [
    "dark:text-white",
    "font-bold",
    "text-cyan-600",
    "text-xl",
    "capitalize"
  ],
  text: "to-do"
};
const wrapperNightModeParams = {
  tagName: "div",
  classList: ["flex", "gap-4"]
};
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
    "rounded-full"
  ],
  attr: {
    id: "buttonDarkMode"
  }
};
const nightModeIconParams = {
  tagName: "span",
  classList: [
    "dark:bg-[url('/moonicon.svg')]",
    "block",
    "w-7",
    "h-7",
    "bg-contain",
    "bg-no-repeat",
    "bg-center",
    "bg-[url('/sun-icon.svg')]"
  ]
};
const nightModeBtn = () => {
  const nightModeBtn2 = creator(nightModeParams);
  const nightModeIcon = creator(nightModeIconParams);
  nightModeBtn2.addEventListener("click", switchDarkMode);
  nightModeBtn2.append(nightModeIcon);
  return nightModeBtn2;
};
const switchDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};
const header = () => {
  const headerElement = creator(headerElementParams);
  headerElement.append(creator(headerTitleParams));
  const wrapperNightMode = creator(wrapperNightModeParams);
  wrapperNightMode.append(reserch());
  wrapperNightMode.append(nightModeBtn());
  headerElement.append(wrapperNightMode);
  return headerElement;
};
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
    "mb-[30px]"
  ],
  attr: {
    id: "btnAddNote"
  }
};
const addNoteTitleParams = {
  tagName: "span",
  classList: ["text-xl"],
  text: "add note"
};
const addBtnIconParams = {
  tagName: "span",
  classList: [
    "dark:bg-[url('/add-note-dark.svg')]",
    "block",
    "w-7",
    "h-7",
    "bg-[url('/add-note.svg')]",
    "bg-contain",
    "bg-no-repeat",
    "bg-center"
  ]
};
const addBtn = () => {
  const addBtn2 = creator(addBtnParams);
  const addNoteTitle = creator(addNoteTitleParams);
  const addBtnIcon = creator(addBtnIconParams);
  addBtn2.addEventListener("click", callForm);
  addBtn2.append(addNoteTitle);
  addBtn2.append(addBtnIcon);
  return addBtn2;
};
const callForm = () => {
  const statusAdd = false;
  initialModal(statusAdd);
};
const wrapperBtnsParams = {
  tagName: "div",
  classList: ["flex", "gap-6", "justify-center", "pt-12", "pb-8", "px-4"]
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
    "text-white"
  ],
  attr: {
    "data-filter": "all"
  },
  text: "all notes"
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
    "text-white"
  ],
  attr: {
    "data-filter": "favorite"
  },
  text: "favorites"
};
const filter = () => {
  const allNotesBtn = creator(allNotesBtnParams);
  const favoritesBtn = creator(favoritesBtnParams);
  const wrapperBtns = creator(wrapperBtnsParams);
  wrapperBtns.append(allNotesBtn, favoritesBtn);
  wrapperBtns.addEventListener("click", (e) => switchFilter(e));
  return wrapperBtns;
};
const switchFilter = (e) => {
  const isBtn = e.target.closest("[data-filter]");
  if (isBtn) {
    const currentNotes = isBtn.dataset.filter;
    switch (currentNotes) {
      case "favorite":
        clearRender();
        createList(getDataFromStorage().favorites);
        break;
      case "all":
        clearRender();
        createList(getDataFromStorage().favorites);
        createList(getDataFromStorage().regulary);
        break;
    }
  }
};
const initialApp = () => {
  const containerApp = document.body;
  containerApp.append(header());
  containerApp.append(filter());
  containerApp.append(addBtn());
  containerApp.append(createList(getDataFromStorage().favorites));
  containerApp.append(createList(getDataFromStorage().regulary));
};
initialApp();
//# sourceMappingURL=index-BmYWDVLg.js.map
