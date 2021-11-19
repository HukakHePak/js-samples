function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
    	function f() {
     	 	var k = i;
    		res.push(function(){
    	  		console.log(k);
				return k;
		 	})
    	} 
		f();
	}
	return res
}

var testAr = buildFun(10);
for(var i = 0; i < 10; i++) {
    testAr[i]();
}
