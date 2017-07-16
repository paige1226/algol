var main = function(n) {
	var s= []
	for(var i = 1; i <=n; i++) {
		s[i] = i;
	}

	var permu = funciton(res, s) {
		if(s.length == 0) {
			console.log(res.join(","));
		} else {
			for(var i = 0; i < s.length; i++) {
				var cur = s[i];
				var resCopy = res.slice(0).push(cur); //add the i elment
				var sCopy = s.slice(0).split(i, 1); //remove the i element
				permu(resCopy, sCopy);
			}
		}
	}

	permu([], s);
}


///////////duplicate numbers:
var permuteUnique = function(nums) {
    var result = [];
  
    var swap = function(nums , m , n) {
        var ch = nums[m];
        nums[m] = nums[n];
        nums[n] = ch;
    }
    var perm = function( nums, index) {
        if(index == nums.length) {
            var tmp = [];
            for(var k = 0; k < nums.length; k++) {
                tmp.push(nums[k]);
            }
            result.push(tmp);
        } else {
            var appeared = [];
            for (var i=index; i<nums.length; ++i) {
                var ch = nums[i];
                if (appeared.indexOf(ch)  < 0) {
                    appeared.push(ch);
                    swap(nums, index, i);
                //    console.log(nums);
                    perm(nums, index+1);
                    swap(nums, index, i);
                } 
            }
        }
    }
    
    perm(nums, 0);
    return result;
};