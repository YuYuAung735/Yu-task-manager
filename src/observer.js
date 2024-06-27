import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selector.js";

 const observer = () => {

const job = () => {
    updateTaskTotal();
    updateDoneTaskTotal();
    
};

const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };
  
  const listGroupObserve = new MutationObserver(job);
  listGroupObserve.observe(listGroup, observerOptions);

};

export default observer;