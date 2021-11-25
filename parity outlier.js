
function findOutlier(integers) {
    let k = integers.filter(num => num % 2);
    if (k.length > 1)
        return integers.find(num => !(num % 2));
    return k[0];
  }

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2,6,8,10,3]));
console.log(findOutlier([0,0,3,0,0]));
console.log(findOutlier([1,1,0,1,1]));

