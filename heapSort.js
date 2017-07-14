var adjustHeap = function(arr, i, n) {
	//the biggest is in the root
	var tmp = arr[i];
	var j = i*2 + 1;
	while(j < n) {
		if(j + 1 < n && arr[j+1] > a[j]) {
			j = j+1;
		}
		if(a[j]>tmp) {
			a[i] = a[j];
			i = j;
			j = i*2+1;
		}else {
			break;
		}
	}
	arr[i] = tmp;
}

var buildHeap = function(arr, n) {
	for(var i = n/2 - 1; i >= 0; i--) {
		adjustHeap(arr, i, n);
	}
}

var swap = function(a, b) {

}

var sort = function(arr) {
	var len = arr.length;
	buildHeap(arr, len);
	for(var i = len -1; i > 0; i--) {
		swap(arr[0], a[i]);
		adjustHeap(arr, 0, i);
	}

}