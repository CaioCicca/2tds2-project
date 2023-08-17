class Task {
    constructor(title, id, status) {
        this.title = title;
        this.id = id;
        this.status = status;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(param) {
        this.tasks.push(param)
    }

    removeTask(param) {
        this.task.splice(param)
    }

    checkTask(param){
        let idrest = this.id
        if(idrest == task.id){
            return true
        }
    }
}

function randomId() {
    return Math.floor(Math.random() * 9998) + 1;
}

const listaTasks = new TaskList();

function createTask() {
    const title = document.getElementById("text").value;
    console.log(title)
    const task = new Task(title, randomId(), false);
    listaTasks.addTask(task);

    publishTask();
    clearTask();
}

function clearTask(){
    document.getElementById("text").value = '';
}

function publishTask() {
    document.getElementById("publish").classList.remove("hidden");
    let msg = '';

    listaTasks.tasks.forEach(task => {
        msg += `
            <div id="tasks">
                <p id="text_task">${task.title}</p>
                <div id="buttons">
                    <button class="check" id="check-${task.id}" onclick="okTask()"><i class="fa-solid fa-check"></i></button>
                    <button class="edit" id="edit-${task.id}" onclick="editTask()"><i class="fa-solid fa-pencil" style="color: #ffffff;"></i></button>
                    <button class="trash" id="trash-${task.id}" onclick="removeTask()"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
                </div>
            </div>`;
    });

    document.getElementById("publish").innerHTML = msg;
}

function removeTask(){
    listaTasks.tasks.forEach((task, index) =>{
        listaTasks.tasks.removeTask(task[index])
    })
    document.getElementById("publish").classList.add("hidden")
}

function okTask(){
    document.getElementById("publish").classList.add("risco")
}