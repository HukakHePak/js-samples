

Array.prototype.reduce = function(process, initial) {
    //if() return;
    
    console.log(this)
    let result = initial;
    
    this.forEach( item => result = process(result, item) );
    
    return result;
    //this.forEach(item => console.log(item))
  }

  console.log([1, 2, 3].reduce( (sum, item) => sum + item, 0));

console.log(['a','y','!'].reduce(function(x,y){return x+y}, 'y'));