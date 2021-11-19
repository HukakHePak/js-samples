
const list = [];

const statuses = ['To Do', 'In Progress', 'Done'];
const priorities = ['Low', 'High'];

function addTask(name, priority = 'Low') {
    list.push({name, status: "To Do", priority});
}

function  findTaskIndex(name) {
    return list.findIndex(function(item) { return item.name == name; });
}

function changeStatus(name, status) {
    let i = findTaskIndex(name);
    if(i >= 0) {
        list[i].status = status;
    }
}

function  changePriority(name, priority) {
    let i = findTaskIndex(name);
    if(i >= 0) {
        list[i].priority = priority;
    }
}

function  deleteTask(name) {
    let i = findTaskIndex(name);
    if(i >= 0) {
        list.splice(i, 1);
    }
}

function showSelectsList(selectedValue, selector, mainColumn = 'name') {  
    console.log("   " + selectedValue + ":")     // выводим шапку

    let empty = true;       // флажок пустого списка
    for(let i of list)
    {
        if (i[selector] !== selectedValue) continue; 

        let result = "      " + i[mainColumn];  // записываем основной параметр в начало строки
        for(let p in i)     // пробегаем по параметрам
        {
            if(p === selector || p === mainColumn)  // эти параметры нам не нужны
                continue;
            result += "   :   " + i[p] + " " + p;   // собираем строку из тех, что остались
        }
        console.log(result); 
        empty = false;  
    }
    if(empty)       // если список пуст выведем черточку
        console.log("      -");
    
    console.log("");
}

function showBy(selector) {
    console.log("\n -------- MY LIST ---------");
    switch(selector) {
        case 'status':
            for(let stat of statuses)
                showSelectsList(stat, 'status');
            break;
        case 'priority':
            for(let prior of priorities)
                showSelectsList(prior, 'priority');
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
deleteTask("My sec");
deleteTask("Me fourth task");
showList();
showBy('status');
showBy('priority');
showBy('Sas');