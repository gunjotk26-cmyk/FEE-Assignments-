// ==========================
// PART 3A
// ==========================

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");


let tasks = [];

// ---------- Load Tasks ----------

window.onload = function () {

    let saved = localStorage.getItem("tasks");

    if (saved) {
        tasks = JSON.parse(saved);
    }

    displayTasks();

};

// ---------- Add Task ----------

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){
        addTask();
    }

});

function addTask(){

    let text = taskInput.value.trim();

    if(text===""){
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text:text,
        completed:false
    });

    taskInput.value="";

    saveTasks();

    displayTasks();

}

// ---------- Save ----------

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}

// ---------- Display ----------

function displayTasks(){

    taskList.innerHTML="";

    tasks.forEach(function(task,index){

        let li=document.createElement("li");

        if(task.completed){

            li.classList.add("completed");

        }

        li.innerHTML=`

        <span class="task-text">
        ${task.text}
        </span>

        <div class="actions">

        <button class="edit-btn"
        onclick="editTask(${index})">

        <i class="fa-solid fa-pen"></i>

        </button>

        <button class="complete-btn"
        onclick="toggleTask(${index})">

        <i class="fa-solid fa-check"></i>

        </button>

        <button class="delete-btn"
        onclick="deleteTask(${index})">

        <i class="fa-solid fa-trash"></i>

        </button>

        </div>

        `;

        taskList.appendChild(li);

    });

    updateStats();

}
// ==========================
// PART 3B
// ==========================

// ---------- Delete Task ----------

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();

}

// ---------- Complete Task ----------

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();

}

// ---------- Edit Task ----------

function editTask(index){

    let newTask = prompt("Edit Task", tasks[index].text);

    if(newTask == null){
        return;
    }

    newTask = newTask.trim();

    if(newTask == ""){
        alert("Task cannot be empty.");
        return;
    }

    tasks[index].text = newTask;

    saveTasks();

    displayTasks();

}

// ---------- Update Counter & Progress ----------

function updateStats(){

    let total = tasks.length;

    let completed = 0;

    for(let i=0;i<tasks.length;i++){

        if(tasks[i].completed){
            completed++;
        }

    }

    totalCount.innerHTML = total;

    completedCount.innerHTML = completed;

    let percent = 0;

    if(total > 0){
        percent = Math.round((completed/total)*100);
    }

    progressBar.style.width = percent + "%";

    progressText.innerHTML = percent + "% Completed";

}

// ---------- Search --------//