var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length){
        return false
    }
    var myMap = new Map();
    for(var idx in magazine){
        var value = myMap.get(magazine[idx]) || 0

        myMap.set(magazine[idx], value + 1)

    }

    for(var idx in ransomNote){
        if((myMap.get(ransomNote[idx]) -1) < 0 || myMap.get(ransomNote[idx]) == null){
            return false
        }else{
            myMap.set(ransomNote[idx], myMap.get(ransomNote[idx]) - 1)
        }
    }

    return true
    
    
};
