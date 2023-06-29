
//HTML Selectors
const addToDoButton = document.getElementById("addToDo");
const toDoList = document.getElementById("ulList");
const toDoInput = document.getElementById("inputField");
const clearToDoButton = document.getElementById("clearFinished")
//Event Listeners
addToDoButton.addEventListener("click", event => {
  event.preventDefault();
  //If there isn't any text in the input box alert the user!
  if(toDoInput.value.trim() === ""){
    alert("Please write something in the box!")
  }else{
    //If there is text then create a list element and a span element
    //Then with the li element put the value into the HTML
    //Make the span the letter x
    //Then add both children nodes into the main node which is the HTML element
    const list = document.createElement("li");
    list.innerHTML = toDoInput.value;
    toDoList.appendChild(list);
    save();
    }
    //clear input
    toDoInput.value = "";

});

toDoList.addEventListener("click", event => {
  //If LI is clicked toggle task as finished
  //If SPAN clicked remove the node from the parent element
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("finished");
    save();
  }
});

clearToDoButton.addEventListener("click", event => {
  event.preventDefault();
  const finishedArray = toDoList.getElementsByClassName("finished");
  
  if(finishedArray.length === 0){
    alert("Please select task to clear!")
  }

  for (let i = finishedArray.length - 1; i >= 0; i--) {
    finishedArray[i].remove();
    }
  save();
});

data();

//Funcations

//saving data on local web browser
function save () {
  localStorage.setItem("data", toDoList.innerHTML);
}

function data () {
  toDoList.innerHTML = localStorage.getItem("data");
}



