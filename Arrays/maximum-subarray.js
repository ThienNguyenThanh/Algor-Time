var maxSubArray = function(nums) {
    let dp = [nums[0]];
    let result = nums[0]
    for (var idx=1;idx < nums.length;idx++){
        var a = dp[idx-1] > 0 ? dp[idx-1] : 0;
        dp.push(a + nums[idx]);
        result = Math.max(result,dp[idx])
    }
    
    return result;
};
