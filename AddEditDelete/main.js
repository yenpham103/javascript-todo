const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  const task = `<div class="task">
  <input type="checkbox" class="task-check"  
  <span class="taskname">${taskName}</span>
  <button class="edit">
  <i class="fa-solid fa-pen-to-square"></i>
  </button>
  <button class="delete">
  <i class="fa-solid fa-trash"></i>
  </button>
  </div>`;

  tasksContainer.insertAdjacentHTML("beforeend", task);
  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((button) => {
    button.onclick = () => {
      console.log("xoa");
      button.parentNode.remove();
      taskCount = -1;
      displayCount(taskCount);
    };
  });

  const editBtns = document.querySelectorAll(".edit");
  editBtns.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      let targetElement = e.target;
      if (!(e.target.className == "edit")) {
        targetElement = e.target.parentElement;
      }
      newTaskInput.value = targetElement.previousElementSiling.innerText;
      targetElement.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkbox) => {
    checkbox.onchange = () => {
      checkbox.nextElementSibling.classList.toggle("completed");
      if (checkbox.checked) {
        taskCount -= 1;
      } else {
        taskCount += 1;
      }
      displayCount(taskCount);
    };
  });

  taskCount += 1;
  displayCount(taskCount);
  newTaskInput.value = "";
};
addBtn.addEventListener("click", addTask);

window.onload = () => {
  taskCount = 0;
  displayCount(taskCount);
  newTaskInput.value = "";
};
