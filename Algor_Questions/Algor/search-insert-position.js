var searchInsert = function(nums, target) {
    let [left,right] = [0, nums.length -1];
   
    while(left < right){
        let midIdx = left + Math.floor((right - left + 1) / 2);
        
        if(nums[midIdx] < target){
            left = midIdx;
        }else if(nums[midIdx] > target){
            right = midIdx -1;
        }else{
            return midIdx;
        }
        
    }
    if(nums[left] == target){
        return left
    }else if(nums[left] < target){
        return left + 1
    }else{
        return left == 0 ? 0 : left - 1
    }
  
};
