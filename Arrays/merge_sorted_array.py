# Link: https://leetcode.com/problems/merge-sorted-array/

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        while m > 0 and n > 0:    
            if nums1[m-1] >= nums2[n-1]:
                nums1[m+n-1] = nums1[m-1]
                # result.append(nums1[a])
                m -=1
            else:
                nums1[m+n-1] = nums2[n-1]
                # result.append(nums2[b])
                n -=1
        if m == 0:
            nums1[:n] = nums2[:n]
       
            
         
