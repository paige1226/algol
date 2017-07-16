var main = function(k) {

	for(var y = 1; y < 2*k; y++) {
		if((k*y)%(y-k) == 0) {
			x = k * y /(y - k);
			if(x >= y) {
				console.log(x, y);
			}
		}		 
	}
}