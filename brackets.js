function validBraces(braces){
    let stack = [];
    for (let b of braces)
      {
        if(b == '(' || b == '[' || b == '{')
          {
            stack.push(b);
            continue;
          }
        
        if(b == ')' && stack.pop() == '(')
          continue;
        
        if(b == ']' && stack.pop() == '[')
          continue;
        
        if(b == '}' && stack.pop() == '{')
          continue;
        
        return false;
      }
    return stack.length == 0;
  }

  console.log(validBraces( "[({})]" ));