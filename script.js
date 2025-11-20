 const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Toggle complete on click
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("removeBtn");

    removeBtn.addEventListener("click", function (e) {
        e.stopPropagation();  // Prevent triggering complete
        li.remove();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input
}
