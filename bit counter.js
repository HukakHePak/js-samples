var countBits = function(n) {
    let twin = n.toString(2);
    let counter = 0;
    for (let i of twin)
        if(+i)
          counter ++;
    return counter;
  };

  console.log(countBits(242));