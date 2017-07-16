//I: balls number. Tree number is from 1 to n.  D is the tree's deepth. Find k (ball's indes)
var k = 1;
for(var i = 0; i < D - 1; i++) {
	if(I % 2) {
		//odd 
		k = k*2;
		I = (I + 1)/2; 
	} else {
		k = k*2 + 1;
		I = I/2;
	}
}
return k;