const buttonDarkMode = document.querySelector("#buttonDarkMode");

const switchDarkMode = () => {
    document.documentElement.classList.toggle("dark");
};

buttonDarkMode.addEventListener("click", switchDarkMode);
