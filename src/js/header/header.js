import reserch from "../reserch/reserch.js";
import { creator } from "../utilities/creator.js";
import {
    headerElementParams,
    headerTitleParams,
    wrapperNightModeParams,
} from "./header-params.js";
import { nightModeBtn } from "./night-mode.js";

const header = () => {
    const headerElement = creator(headerElementParams);
    headerElement.append(creator(headerTitleParams));

    const wrapperNightMode = creator(wrapperNightModeParams);
    wrapperNightMode.append(reserch());
    wrapperNightMode.append(nightModeBtn());

    headerElement.append(wrapperNightMode);
    return headerElement;
};
export default header;
