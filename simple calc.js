let calc = (a, b, op) => {
    let operations = {
        sub: a - b,
        sum: a + b,
        div: a / b,
        mult: a * b,
    }

    if(typeof a === 'number' && typeof b === 'number' && b !== 0)
        return op in operations ? operations[op] : 'error'; 
    return 'error';
}

console.log(calc(0, 3, 'div'));
