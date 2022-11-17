var intersect = function(nums1, nums2) {
    if(nums1.length >= nums2.length){
        // Nums1 larger
        var myArr = new Map();
        for(let val of nums1){
            if(myArr.has(val)){
                myArr.set(val, myArr.get(val) + 1)
            }else{
                myArr.set(val, 1)
            }
        }
        
        var result = [];
        for(let val of nums2){
            if(myArr.has(val) && myArr.get(val) > 0){
                result.push(val);
                myArr.set(val, myArr.get(val) -1);
            }
        }
        
        return result;
    }else{
        // Nums2 larger
        var myArr = new Map();
        for(let val of nums2){
            if(myArr.has(val)){
                myArr.set(val, myArr.get(val) + 1)
            }else{
                myArr.set(val, 1)
            }
        }
        
        var result = [];
        for(let val of nums1){
            if(myArr.has(val) && myArr.get(val) > 0){
                result.push(val);
                myArr.set(val, myArr.get(val) -1);
            }
        }
        
        return result;
    }
};
