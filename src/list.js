import { v4 as uuidv4 } from 'uuid';

import { donetaskTotal, taskTotal } from './selector.js';
import Swal from 'sweetalert2';

export const tasks = ["apple","orange"];
export const updateTaskTotal = () => {
    const lists = document.querySelectorAll(".list");
    taskTotal.innerText = lists.length;
  };
  
export  const updateDoneTaskTotal = () => {
    const lists = document.querySelectorAll(".list input:checked");
  donetaskTotal.innerText = lists.length;
  };
  
export  const createNewList = (currentTask) => {
    const list =listTemplate.content.cloneNode(true);
    //console.log(list);
    
    list.querySelector(".list").id="list"+ uuidv4();
    list.querySelector(".list-task").innerText=currentTask;
  
    return list;
  };
  
export  const deleteList = (listId) => {
    //console.log("U dele");
    const currentList = document.querySelector(`#${listId}`);
    // console.log(currentList);
    // if (window.confirm("Are you sure del")) {
    // currentList.remove();
      
     Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"}).then((result)=>{
        if(result.isConfirmed){
          
            currentList.remove();
            //updateDoneTaskTotal();
            //updateTaskTotal();
          
        }
      });

    };
  
export  const editList = (listId) => {
    //console.log("U Edit");
    const currentList = document.querySelector(`#${listId}`);
    const listTask = currentList.querySelector(".list-task");
    const listEditBtn = currentList.querySelector(".list-edit-btn");
    const listDoneCheck = currentList.querySelector(".list-done-check");
  
    listEditBtn.addEventListener("click", () => {
      listEditBtn.setAttribute("disabled", true);
      listDoneCheck.setAttribute("disabled", true);
      const currentTask = listTask.innerText;
      const newTaskInput = document.createElement("input");
      newTaskInput.className =
        "border border-stone-950 font-mono px-2 py-1 w-[180px] focus-visible:outline-none ";
      newTaskInput.value = currentTask;
      listTask.after(newTaskInput);
      newTaskInput.focus();
      listTask.classList.add("hidden");
  
      newTaskInput.addEventListener("blur", () => {
        listEditBtn.removeAttribute("disabled");
        listDoneCheck.removeAttribute("disabled");
       // console.log("edit done");
  
        listTask.innerText = newTaskInput.value;
        listTask.classList.remove("hidden");
        newTaskInput.remove();
      });
    });
  };
 export const doneList = (listId) => {
    //console.log("U Done");
    const currentList = document.querySelector(`#${listId}`);
    const listTask = currentList.querySelector(".list-task");
    const listEditBtn = currentList.querySelector(".list-edit-btn");
    const listDoneCheck = currentList.querySelector(".list-done-check");
  
    listTask.classList.toggle("line-through");
    currentList.classList.add("duration-200");
    currentList.classList.toggle("opacity-20");
    currentList.classList.toggle("scale-90");
    //console.log(listDoneCheck.checked);
    if (listDoneCheck.checked) {
      listEditBtn.setAttribute("disabled", true);
    } else {
      listEditBtn.removeAttribute("disabled");
    }
  
   // updateDoneTaskTotal();
  };
  
export  const addList = (text) => {
    // console.log(taskInput.value);
    listGroup.append(createNewList(text));
    taskInput.value=null;
   // updateTaskTotal();
  };
  
  