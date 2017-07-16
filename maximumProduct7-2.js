/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length == 0) return 0;
   var max = nums[0], min = nums[0], totalMax = nums[0];
   for (var i = 1; i < nums.length; i++) {
       var tempMax = nums[i] * max;
       var tempMin = nums[i] * min;
       max = Math.max(Math.max(tempMax,tempMin), nums[i]);
       min = Math.min(Math.min(tempMax,tempMin), nums[i]);
       totalMax = Math.max(totalMax, max);
   }
   return totalMax;
};