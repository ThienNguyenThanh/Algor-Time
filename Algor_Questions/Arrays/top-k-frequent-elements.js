var topKFrequent = function(nums, k) {
    let myMap = new Map()
    for(var num of nums){
        
        if(num in myMap){
            myMap[num] +=1
        }else{
            myMap[num] = 1
        }
        
    }

    let a = Object.entries(myMap).sort(function(a,b){return b[1] - a[1]})

    return a.slice(0,k).flat().filter((value, idx) => idx % 2 ===0).map(Number)
};
