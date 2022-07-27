class Calculator {
    constructor() {
        this.variables = new Map();
        this.functions = new Map();
        this.reserved = ['var', 'let', 'fn', 'print', 'printvars', 'printfns'];
        //this.signs = [...'+-=/*'];

        this.operations = {
            '+': (val1, val2) => val1 + val2,
            '-': (val1, val2) => val1 - val2,
            '/': (val1, val2) => val1 / val2,
            '*': (val1, val2) => val1 * val2
        }
    }

    create(name) {
        if(this.reserved.contains(name)) {
            return false;
        }

        if(this.variables.has(name)) {
            return false;
        }

        this.set(name, NaN);
        return true;
    }

    assign(name, value) {
        const val = this.get(value);

        if(this.isFunc(val)) {
            return false;
        }

        if(val) {
            this.set(name, val);
        } else {
            this.create(name);
            this.set(name, value);
        }
        return true;
    }

    get(name) {
        const value = this.variables.get(name);

        if(value) {
            return value;
        }

        return false;
    }

    set(name, value) {
        this.variables.set(name, value);
    }

    isFunc(name) {
        return this.functions.has(name);
    }

    calculate(name, value) {
        const func = this.functions.get(value);

        if(func) {
            const [val1, val2] = func.values;
            const result = func.operator ?
                this.operations[func.operator](this.get(val1), this.get(val2)) :
                this.get(val1);

            this.variables.set(name, result);
        }

        const keys = Array.from(this.signs.keys());
        const operator = value.split('').find(letter => keys.contains(letter));

        this.create(name);

        this.functions.set(name, {
            operator,
            values: value.split(operator),
        });
    }
}

class CalcException {



}

class Program {
    constructor() {
        this.calculator = new Calculator();
    }


    print(id) {
        console.log(this.calculator.get(id));
    }

    printVars() {
        console.log(Array.from(this.calculator.variables.entries()).filter(([key]) => this.calculator.isFunc(key)));
    }

    printFns() {
        console.log(this.calculator.functions.entries());
    }

    parse(string) {
        const [reserved, expression] = string.split(' ');

        const [name, value] = expression.split('=');

        let funcValue;
        let operator;

        switch (reserved) {
            case 'var':
                this.calculator.create(expression);
                break;

            case 'let':
                this.calculator.assign(name, value);
                break;

            case 'fn':
                this.calculator.calculate(name, value)
                break;

            case 'print':
                this.print(expression);
                break;

            case 'printvars':
                this.printVars();
                break;

            case 'printfns':
                this.printFns();
                break;
        }
    }
}

