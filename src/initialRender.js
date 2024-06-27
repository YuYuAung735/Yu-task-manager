import { addList, tasks } from "./list.js";

const initialRender = () => {
    //console.log("I am initalRender");
    tasks.forEach((task) => addList(task));
};

export default initialRender;