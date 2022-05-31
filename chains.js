function add(n = 0) { 
    function test(num = 0) {
      test.buf += num;
      
      return test; 
    }
    
    test.buf = n;
    
    test.__proto__.valueOf = function () {
      return this.buf;
    }
    
    return test;
  }
  
  const t = add(3)(4);
  const t2 = add(1)(2);
  
  console.log(t2)