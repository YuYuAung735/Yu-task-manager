import { addList, deleteList, doneList, editList } from "./list.js";
import { listGroup } from "./selector.js";


export const listGroupHandler = (event) => {
    const list = event.target.closest(".list");
    if (event.target.classList.contains("list-del-btn")) {
     deleteList(event.target.closest(".list").id);
    }
    if (event.target.classList.contains("list-edit-btn")) {
      editList(event.target.closest(".list").id);
    }
    if (event.target.classList.contains("list-done-check")) {
      doneList(event.target.closest(".list").id);
    }
  };
  
  
  export const addTaskBtnHandler = () => {
    if(taskInput.value.trim()){
      addList(taskInput.value);
    }else{
      alert("u must input task");
    }
  };
  export  const taskInputHandler = (event) => {
    if (event.key === "Enter"){
      addList(taskInput.value);
    }
  
  };
  
  export  const deleteAllHandler = () =>{
   if(confirm("Are you sure to delete all list?")){
    const alllist = listGroup.querySelectorAll(".list");
   alllist.forEach((list)=>list.remove());
  
  }
  
  
  };
  export  const doneAllHandler =() =>{
    if(confirm("Are you sure to done all list?")){
      const alllist = listGroup.querySelectorAll(".list");
      alllist.forEach((list) => {
      list.querySelector(".list-done-check").checked=true;
      doneList(list.id);
     })
    }
  
  };
  
