var containsDuplicate = function(nums) {
    const myMap = new Map();
    for(var i in nums){
        if(myMap.has(nums[i])){
           return true;
        }else{
             myMap.set(nums[i], i);
        }
    }
    return false;
    
};
