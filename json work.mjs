import data from './data.json'

let json = JSON.stringify(data, (key, value) => {
    return (key == 'dateOfBirth') ? undefined : value;
}, 5)

let numbers = '';

numbers = JSON.parse(json, (key, value) => {
    if(key == 'knowsAs') return 'SaS';
    return value;
});


console.log(numbers['users']);