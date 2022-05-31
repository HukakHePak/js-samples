const programStartTime = new Date();

const numbers = [];

for (let i = 0; i < 20000000; i++) {
  numbers.push(Math.ceil(Math.random() * 1000));
}

function base2char(doubleCode, inverse) {
  return inverse ? doubleCode.charCodeAt(0).toString(2) : String.fromCharCode(parseInt(doubleCode, 2));
}

function toZerosLength(str, length) {
    let keyZeros = "";

    for (let i = 0; i < length - str.length; i++) {
      keyZeros += 0;
    }

    return keyZeros + str;
}

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

    if(buf.length >= 10) {     
        result.push(parseInt(buf.substr(0, 10), 2));
        buf = buf.slice(10);
    }
  }

  return result;
}

function serializeDown(array) {
  let str = "";

  array.forEach((item) => {
    let base2 = item.toString(2);

    let keyZeros = "";

    for (let i = 0; i < 10 - base2.length; i++) {
      keyZeros += 0;
    }

    base2 = keyZeros + base2;
    str += base2;
  });

  for (let i = 0; i < str.length % 8; i++) {
    str += 0;
  }

  let result = "";
  let buf = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 8 || !i) {
      buf += str[i];

      if (i !== str.length - 1) continue;
    }

    result += String.fromCharCode(parseInt(buf, 2));
    buf = str[i];
  }

  return result;
}

function deserializeDown(str) {
  let base2 = "";

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i).toString(2);
    let keyZeros = "";

    for (let i = 0; i < 8 - code.length; i++) {
      keyZeros += 0;
    }

    base2 += keyZeros + code;
  }

  let result = [];
  let buf = "";

  if (base2.length % 10) {
    base2 = base2.slice(0, -base2.length % 10);
  }

  for (let i = 0; i < base2.length; i++) {
    if (i % 10 || !i) {
      buf += base2[i];

      if (i !== base2.length - 1) continue;
    }

    result.push(parseInt(buf, 2));
    buf = base2[i];
  }

  return result;
}

const start = new Date();

//serializeUp(numbers);
const short = serialize(numbers);
const result = deserialize(short);

const finish = new Date() - start;


function isEqualArrays(arr1, arr2) {
  let success = true;

  if (arr1.length == arr2.length) {
    arr1.forEach((item, index) => {
      if (item != arr2[index]) success = false;
    });
  } else success = false;

  return success;
}

// console.log(numbers);
// console.log(result);
// console.log(short);
console.log("ARRAY SIZE:", numbers.length);
console.log("STRING LENGTH:", short.length);
console.log("ARRAY JOIN LENGTH:", numbers.join(" ").length);
console.log("TEST:", isEqualArrays(numbers, result) ? "OK" : "ERROR");
console.log("TIME:", finish, "ms");
// console.log("TIME:", f, "ms");
console.log("ALL TIME:", new Date() - programStartTime, "ms");
