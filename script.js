
const input = document.getElementById("todo");
const list = document.getElementById("list");
const button = document.getElementById("submit");

function addTodo() {
    const text = input.value;

    if (text.trim() === ""){
        return;
    }

    const item = document.createElement("div");
    item.setAttribute("class", "listItem");
    
    item.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "deleteBtn";
    deleteBtn.type = "button";
    deleteBtn.setAttribute("aria-label", "Delete task");

    
    item.addEventListener("click", function() {
        item.remove();
        deleteBtn.remove();
    });

    deleteBtn.addEventListener("click", function() {
        item.remove();
    });
    
    item.appendChild(deleteBtn);
    list.appendChild(item);
    input.value = "";
    input.focus();
}


button.addEventListener("click", addTodo);
input.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        addTodo();
    }
});
//document.getElementById("todo").addEventListener("keyup", list)