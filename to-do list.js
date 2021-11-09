const prog = "In Progress";
const done = "Done";
const todo = "To Do";

const list = { }

let addTask = (task) => {
    list[task] = todo;
}

let delTask = (task) => {
    delete list[task];
}

let changeStatus = (task, stat) => {
    list[task] = stat;
}

let showStatList = (stat) => {

    console.log("   " + stat + ":")

    let empty = true;
    
    for(let task in list)
    {
        if (list[task] === stat) {
            console.log("      " + task);
            empty = false;
        }
    }

    if(empty)       // если список пуст выведем черточку
        console.log("      -");
    
    console.log("");
}

let showList = () => {
    console.log("\n -------- MY LIST ---------");
    showStatList(todo);
    showStatList(prog);
    showStatList(done); 
}

showList();
addTask("My first task");
addTask("My second task");
addTask("My third task");
showList();
changeStatus("My first task", prog);
changeStatus("My third task", done);
showList();
delTask("My second task");
showList();