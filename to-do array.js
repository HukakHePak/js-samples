
const list = [];

function addTask(task, priority = 'Low') 
{
    list.push({'name': task, 'status': "To Do", 'priority': priority});
}

function  findItem(task)
{
    return list.findIndex(function(item) { return item.name == task; });
}

function changeStatus(task, stat) {
    let i = findItem(task);
    if(i >= 0) {
        list[i].status = stat;
    }
}

function  changePriority(task, priority) {
    let i = findItem(task);
    if(i >= 0) {
        list[i].priority = priority;
    }
}

function  delTask(task) {
    let i = findItem(task);
    if(i >= 0) {
        list.splice(i, 1);
    }
}

function  showStatList(stat) {

    console.log("   " + stat + ":")

    let empty = true;
    
    for(let i of list)
    {
        if (i.status === stat) {
            console.log("      " + i.name + "   :   " + i.priority + " priority");
            empty = false;
        }
    }

    if(empty)       // если список пуст выведем черточку
        console.log("      -");
    
    console.log("");
}

function showList() {
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
delTask("My sec");
showList();