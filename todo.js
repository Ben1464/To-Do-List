function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if(taskText.length > 0){
        const taskList = document.getElementById("tasklist");
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        taskItem.addEventListener("click",fuction()){
            taskList.removeChild(taskItem);
        };
        taskList.appendChild(taskItem);
            // Clear input after adding
            taskInput.valu = "";
        }
    }
