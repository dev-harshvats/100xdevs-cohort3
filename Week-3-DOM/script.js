let ctr = 1;

// function addTodo(){
//     const inpEl = document.querySelector("input");
//     const value = inpEl.value;

//     const newDivEl = document.createElement("div");
//     newDivEl.setAttribute("id", "todo-" + ctr);
//     newDivEl.innerHTML = "<div>" + value + '</div><button onClick="deleteTodo(' + ctr + ')">delete</button>';
//     document.getElementById("todoContainer").appendChild(newDivEl);
//     ctr = ctr + 1;

// }
function addTodo(){
    const value = document.querySelector("input").value;

    // step-1 : creating span and button elements
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");
    spanEl.innerHTML = value;
    buttonEl.innerHTML = "Delete";

    // step - 2 : 
    const divEl = document.createElement("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);

    // step - 3 : 
    document.querySelector("body").appendChild(divEl);
}
function deleteTodo(index){
    const element = document.getElementById("todo-" + index);
    document.getElementById("todoContainer").removeChild(element);
}