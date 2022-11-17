# Link: https://leetcode.com/problems/contains-duplicate/

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        set_len = len(set(nums))
        list_len = len(nums)
        if set_len != list_len: return True
        else: return False
