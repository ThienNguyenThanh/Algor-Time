var productExceptSelf = function(nums) {
    const lenNums = nums.length;

    let result = [1];
    for(var i = 1;i < lenNums; i++){
        result[i] = nums[i-1] * result[i-1];
    }

    let right = 1;
    for(var i = lenNums -1; i >=0; i--){
        result[i] *= right;
        right *= nums[i];
    }

    return result
};

