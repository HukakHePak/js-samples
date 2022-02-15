async function antiOptimizeAsync(task) {
    const start = new Date();
    //const end = new Date(start.getSeconds()
    
    const result = task();
    //console.log(new Date() - start)

    
    while(new Date() - start < 11100) {
      
    }
    console.log(new Date() - start)
    return result;
    
  }

  antiOptimizeAsync(() => {
    return 2;
  })