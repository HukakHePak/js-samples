function serialize(array) {
  let result = "";
  let buf = "";

  array.forEach((item) => {
    buf += toZerosLength(item.toString(2), 10);

    result += base2char(buf.substr(0, 8));
    buf = buf.slice(8);

    if (buf.length == 8) {
      result += base2char(buf);
      buf = "";
    }
  });

  if (buf.length) {
    while (buf.length % 8) {
      buf += 0;
    }

    result += base2char(buf);
  }

  return result;
}

function deserialize(str) {
  let result = [];
  let buf = "";

  for (let i = 0; i < str.length; i++) {
    buf += toZerosLength(base2char(str[i], true), 8);

    if (buf.length >= 10) {
      result.push(parseInt(buf.substr(0, 10), 2));
      buf = buf.slice(10);
    }
  }

  return result;
}

function base2char(doubleCode, inverse) {
  return inverse
    ? doubleCode.charCodeAt(0).toString(2)
    : String.fromCharCode(parseInt(doubleCode, 2));
}

function toZerosLength(str, length) {
  let keyZeros = "";

  for (let i = 0; i < length - str.length; i++) {
    keyZeros += 0;
  }

  return keyZeros + str;
}

function isEqualArrays(arr1, arr2) {
    let success = true;
  
    if (arr1.length == arr2.length) {
      arr1.forEach((item, index) => {
        if (item != arr2[index]) success = false;
      });
    } else success = false;
  
    return success;
  }


const numbers = [];

for (let i = 0; i < 20000000; i++) {
  numbers.push(Math.ceil(Math.random() * 1000));
}

const start = new Date();

const short = serialize(numbers);
const result = deserialize(short);

const finish = new Date() - start;

console.log("ARRAY SIZE:", numbers.length);
console.log("STRING LENGTH:", short.length);
console.log("ARRAY JOIN LENGTH:", numbers.join(" ").length);
console.log("TEST:", isEqualArrays(numbers, result) ? "OK" : "ERROR");
console.log("TIME:", finish, "ms");
