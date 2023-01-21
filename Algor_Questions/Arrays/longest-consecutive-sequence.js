// Solution 1
var longestConsecutive = function(nums) {
    let myMap = new Map();
    for(var idx in nums){
        if(!myMap.has(nums[idx])){
            myMap.set(nums[idx], idx)
        }
    }
    
    let logestStreak = 0;
    for(var val of nums){
        if(!myMap.has(val - 1)){
            let currNum = val;
            let currStreak = 1;
            while(myMap.has(currNum + 1)){
                currNum +=1;
                currStreak +=1;
            }

            count = Math.max(count, currStreak);
        }
    }
    
    return logestStreak;
}



// Solution 2
  var longestConsecutive = function(nums) {
    let result = 0;
    let myMap = new Map();
    for(var num of nums){
        if(!myMap.has(num)){
            let left = myMap.has(num - 1) ? myMap.get(num - 1) : 0;
            let right = myMap.has(num + 1) ? myMap.get(num + 1) : 0;
            let sum = left + right + 1;

            myMap.set(num, sum);

            result = Math.max(sum, result);

            myMap.set(num - left, sum);
            myMap.set(num + right, sum);
        }else{
            continue
        }
    }

    return result;
};
