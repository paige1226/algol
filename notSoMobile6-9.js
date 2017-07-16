var input = [
	[0,2,0,4],
	[0,3,0,1],
	[1,1,1,1],
	[2,4,4,2],
	[1,6,3,2]
]

var node = {
	w1,
	D1,
	w2,
	D2,
	left,
	right
}

var totalLen = input.length;
var i = 0;

var createTree = function(input) {
	if(i >= totalLen) {
		return;
	}

	var current = input[i];
	var node = new node(current[0], current[1], current[2], current[3]);
	if(current[0] == 0) {
		node.left = createTree(input, ++i);
	}
	if(current[2] == 0) {
		node.right = createTree(input, ++i);
	}
}

var rootTree = createTree(input);

var isOk = true;
var judge = function(root) {
	if(!isOk) {
		return 0;
	}
	if(root.w1 == 0 ) {
		root.w1 = judge(root.left);
	}
	if(root.w2 == 0) {
		root.w2 = judge(root.right);
	}
	if(root.w1 * root.d1 != root.w2 * root.d2) {
		isOk = false;
	}
	return root.w1 + root.w2;
}

