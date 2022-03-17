const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const itemCountSpan = document.getElementById("item-count");
const list1 = [];

function newTodo() {
    var box = document.getElementById("box");
    var listt = document.createElement("listt");
    listt.setAttribute('id', box.value);
    listt.appendChild(document.createTextNode(box.value));
    list.appendChild(li);
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;
}

function removeTodo() {
    var box = document.getElementById("box");
    var item = document.getElementById(box.value);
    list.removeChild(item);
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;;
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
}