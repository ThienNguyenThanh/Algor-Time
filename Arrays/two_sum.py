# Link: https://leetcode.com/problems/two-sum/

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        buffer_dictionary = {}
        list_len = len(nums)
        for i in range(list_len):
            if nums[i] in buffer_dictionary:
                return [buffer_dictionary[nums[i]], i]
            else:
                buffer_dictionary[target- nums[i]] = i
            
