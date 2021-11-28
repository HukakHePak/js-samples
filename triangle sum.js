function rowSumOddNumbers(n) {
    let length = n;
    let rowNum = 1;
    
      while(length-- > 1)
      {   
        for(let i = 0; i < length; i++)
          rowNum += 2;
      }
  
    let sum = rowNum;
    while(--n > 0)
      {
        rowNum += 2;
        sum += rowNum;        
      }
    return sum;
  }

rowSumOddNumbers(42);