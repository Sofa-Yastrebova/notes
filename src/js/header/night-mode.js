import { creator } from "../utilities/creator.js";
import { nightModeIconParams, nightModeParams } from "./nightMode-params.js";

const nightModeBtn = () => {
    const nightModeBtn = creator(nightModeParams);
    const nightModeIcon = creator(nightModeIconParams);

    nightModeBtn.addEventListener("click", switchDarkMode);

    nightModeBtn.append(nightModeIcon);
    return nightModeBtn;
};

const switchDarkMode = () => {
    document.documentElement.classList.toggle("dark");
};

export { nightModeBtn };
