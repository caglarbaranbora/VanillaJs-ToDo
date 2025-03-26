function saveItem() {
  let inputValue = document.getElementById("input").value;
  if (inputValue.trim() === "") return; //trim bosluklari kaldirir

  let todoList = document.getElementById("todoList");

  let todoItem = document.createElement("div");
  todoItem.classList.add("todo-item"); //css class ekledik todo-item adinda

  let span = document.createElement("span");
  span.innerText = inputValue;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Sil";
  deleteBtn.onclick = function () {
    todoList.removeChild(todoItem);
  };

  todoItem.appendChild(span); //bir elementi baska bir elementin icine eklemek icin appendChild()
  todoItem.appendChild(deleteBtn);
  todoList.appendChild(todoItem);

  document.getElementById("input").value = "";
}
