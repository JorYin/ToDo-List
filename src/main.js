
//HTML Selectors
const addToDoButton = document.getElementById("addToDo");
const toDoList = document.getElementById("ulList");
const toDoInput = document.getElementById("inputField");

//Event Listeners
addToDoButton.addEventListener("click", addTask);
toDoList.addEventListener("click", taskFinished);
data();

//Funcations
function addTask(event){

  event.preventDefault();

  if(toDoInput.value.trim() === ""){
    alert("Please write something in the box!")
  }else{
    const list = document.createElement("li");
    const listSpan = document.createElement("span");
    list.innerHTML = toDoInput.value;
    listSpan.innerHTML = "X";
    list.appendChild(listSpan);
    toDoList.appendChild(list);
    save();
  }
    toDoInput.value = "";

}

function taskFinished(event){

  if(event.target.tagName === "LI"){
    event.target.classList.toggle("finished");
    save();
  }else if(event.target.tagName === "SPAN"){
    event.target.parentElement.remove();
    save();
  }

}

const save = () => {
  localStorage.setItem("data", toDoList.innerHTML);
}

const data = () => {
  toDoList.innerHTML = localStorage.getItem("data");
}



