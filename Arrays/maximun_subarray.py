class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        dp = [nums[0]]
        list_len = len(nums)
        result = dp[0]
        for i in range(1,list_len):
            a = dp[i-1] if dp[i-1] > 0 else 0
            dp.append( nums[i] + a)
            result = max(dp[i], result)
       
        return result
