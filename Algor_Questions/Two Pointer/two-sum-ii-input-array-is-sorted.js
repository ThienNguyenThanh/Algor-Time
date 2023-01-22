var twoSum = function(numbers, target) {
    let [left, right] = [0, numbers.length - 1];
    while(left < right){
        let sum = numbers[left] + numbers[right];
        if(sum === target){
            return [left+1, right+1];
        }else if(sum > target){
            right--;
        }else{
            left++;
        }
    }  
};
