/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [];
   
    if(nums.length == 0){
        return result;
    }
    
    nums.sort(function(a,b){return a-b});
    
    
    var  dfs = function(s, index, path, result){
        result.push(path.slice(0));
        var stack = [];
        for(var i = index; i < s.length; i++){
            if(stack.indexOf(s[i]) < 0) {
                stack.push(s[i]);
                path.push(s[i]);
                dfs(s, i+1, path, result);
                path.pop();
            }
            
        }
    }
    
    dfs(nums, 0,[], result);
    return result;
};