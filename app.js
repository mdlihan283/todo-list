const newTask = document.getElementById("newTask");
const newTaskBtn = document.getElementById("newTaskBtn");
const todoUl = document.getElementById("todoUl");
const cancel = document.getElementById("Cancel");
const update = document.getElementById("update");
const edit = document.getElementById("Edit");
const updateText = document.getElementById("updateText");
const updateBtn = document.getElementById("updateBtn");

const createNewTask = (task) => {
  let listItem = document.createElement("li");
  let label = document.createElement("label");
  let div = document.createElement("div");
  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");

  label.setAttribute("id", "labelCont");

  div.className = "btn";

  btn1.setAttribute("id", "Edit");
  btn1.textContent = "Edit";

  btn2.setAttribute("id", "Delete");
  btn2.textContent = "Delete";

  label.innerText = task;

  div.appendChild(btn1);
  div.appendChild(btn2);

  listItem.appendChild(label);
  listItem.appendChild(div);
  return listItem;
};

newTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let listItem = createNewTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  bindDeleted(listItem, deletedTask);
  bindEdit(listItem, editedTask);
});

// delete task
function deletedTask() {
  let parentsNode = this.parentNode;
  let listItem = parentsNode.parentNode;
  listItem.remove();
}

function bindDeleted(listItem, clickDeletedTask) {
  let Edit = listItem.querySelector("#Delete");
  Edit.onclick = clickDeletedTask;
}

//edit task
function editedTask() {
  let parentNode = this.parentNode;
  let parent = parentNode.parentNode;
  let labelCont = parent.querySelector("#labelCont");
  let editBtn = parent.querySelector("#Edit");
  editBtn.addEventListener("click", () => {
    update.style.display = "block";
    updateText.value = labelCont.innerText;
    updateBtn.addEventListener("click", () => {
      labelCont.innerText = updateText.value;
      update.style.display = "none";
    });
  });
}

function bindEdit(listItem, clickEditTask) {
  let Edit = listItem.querySelector("#Edit");
  Edit.onclick = clickEditTask;
}

// loop all task
for (let i = 0; i < todoUl.children.length; ++i) {
  bindDeleted(todoUl.children[i], deletedTask);
}

for (let i = 0; i < todoUl.children.length; ++i) {
  bindEdit(todoUl.children[i], editedTask);
}

cancel.addEventListener("click", () => {
  update.style.display = "none";
});
