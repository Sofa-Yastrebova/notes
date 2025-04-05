import { creator } from "../utilities/creator";
import { researchElementParams } from "./research-params";

const reserch = () => {
    const researchElement = creator(researchElementParams);
    return researchElement;
};

export default reserch;
