
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

// функция проверяет весь лист объектов, и выводит значения first и second полей объекта,
// поле selector которых содержит значение selected
// формат вывода:
//  selected:
//      first   :   second
//      first   :   second  

function specialShow(selector, selected, first, second) {  
    console.log("   " + selected + ":")

    let empty = true;
    for(let i of list)
    {
        if (i[selector] === selected) {
            console.log("      " + i[first] + "   :   " + i[second] + " " + second);
            empty = false;
        }
    }
    if(empty)       // если список пуст выведем черточку
        console.log("      -");
    
    console.log("");
}

function showBy(selector) {
    console.log("\n -------- MY LIST ---------");
    switch(selector) {
        case 'status':
            specialShow(selector, 'To Do', 'name', 'priority');
            specialShow(selector, 'In Progress', 'name', 'priority');
            specialShow(selector, 'Done', 'name', 'priority');
            break;

        case 'priority':
            specialShow(selector, 'High', 'name', 'status');
            specialShow(selector, 'Low', 'name', 'status');
            break;
        default:
        console.log('\n\tUnknown filter \n');
    }        
}

function showList() {
    showBy('status');
}
 
showList();
addTask("My first task", 'High');
addTask("My second task");
addTask("My third task", 'Low');
addTask("Me fourth task", "High");
showList();
changeStatus("My first task", 'In Progress');
changeStatus("My third task", 'Done');
changePriority("Me fourth task", "Low");
changePriority("My second task", "High");
showList();
delTask("My sec");
delTask("Me fourth task");
showList();
showBy('status');
showBy('priority');
showBy('Sas');