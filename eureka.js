
let m = [1, 2, 3, 4, 5, 6, 7, 8, 9, ''];

for(let i of m) {
    for(let j of m) {
        for(let k of m) {
            let str = '' + i + j + k;
            let sum = +i + +j * +j + +k * +k * +k;
            let sumStr = '' + sum;
            if (str == sumStr) {
                console.log(sum);
            }
        }
    }
}

