
const list = [];

function addTask(task, priority = 'Low') 
{
    list.push({'name': task, 'status': "To Do", 'priority': priority});
}

function  findItem(task)
{
    return list.find(function(item) { return item.name == task; });
}

let changeStatus = (task, stat) => {
    let i = findItem(task);
    if(i >= 0) {
        list[i].status = stat;
    }
}

let changePriority = (task, priority) => {
    let i = findItem(task);
    if(i >= 0) {
        list[i].priority = priority;
    }
}

let delTask = (task) => {
    let i = findItem(task);
    list.slice(i, 1);
}

let showStatList = (stat) => {

    console.log("   " + stat + ":")

    let empty = true;
    
    for(let i of list)
    {
        if (i.status === stat) {
            console.log("      " + task + "   :   " + i.priority + " priority");
            empty = false;
        }
    }

    if(empty)       // если список пуст выведем черточку
        console.log("      -");
    
    console.log("");
}

let showList = () => {
    console.log("\n -------- MY LIST ---------");
    showStatList('To Do');
    showStatList('In Progress');
    showStatList('Done'); 
}

showList();
addTask("My first task", 'Hight');
addTask("My second task");
addTask("My third task", 'Low');
showList();
changeStatus("My first task", 'In Progress');
changeStatus("My third task", 'Done');
showList();
delTask("My second task");
showList();