
var main = function(n) {
	var min = 1234;
	var max = 49876;

	var numToArray = function(num) {
		return (num+"").split("");
	}

	var checkDup = function(arr1, arr2) {
		if(arr1.length < 5) {
			arr1 = ["0"].concat(arr1);
		}
		if(arr2.length < 5) {
			arr2 = ["0"].concat(arr2);
		}
		for(var i=0; i<arr1.length; i++){
			var n = arr1[i];
			for(var j=0; j<arr2.length; j++){
				var m = arr2[j];
				if(n === m) return true;
			}
		}
		return false;
	}

	for(var i = min; i <= max; i++) {
		var fghij = i;
		var abcde = fghij * n;
		if(abcde > 98765) {
			return;
		} else {
			var isOK = checkDup(numToArray(fghij), numToArray(abcde));
			if(isOK)
				console.log(abcde, fghij);
		}

	}
}