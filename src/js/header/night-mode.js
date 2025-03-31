import { creator } from "../utilities/creator";
import { nightModeIconParams, nightModeParams } from "./nightMode-params";

const nightModeBtn = () => {
    const nightModeBtn = creator(nightModeParams);
    const nightModeIcon = creator(nightModeIconParams);

    nightModeBtn.addEventListener("click", switchDarkMode);

    nightModeBtn.append(nightModeIcon);
    return nightModeBtn;
};

const switchDarkMode = () => {
    console.log(1);

    document.documentElement.classList.toggle("dark");
};

export default nightModeBtn;
