var twoSum = function(nums, target) {
    let myArr = new Map();
    for(var idx in nums){
        if(myArr.has(target - nums[idx])){
            return [idx,myArr.get(target - nums[idx])];
        }else{
            myArr.set(nums[idx],idx);
        }
    }
    
};
