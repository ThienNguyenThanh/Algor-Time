// Solution 1
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }else{
        var myMap = new Map()
        for(var idx in s){
            if(s[idx] == t[idx]){
                continue
            }
            var value = myMap.get(s[idx]) || 0
            var value1 = myMap.get(t[idx]) || 0
                 
            myMap.set(s[idx], value + 1)
            myMap.set(t[idx], value1 - 1)
           
        }
        

        for(var [key,value] of myMap){         
            if(value != 0){
                return false
            }
        }
        
        return true
            
    }
};


// Solution2
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }else{
        var charIdx = Array(26).fill(0)
        for(var idx in s){
            charIdx[s[idx].charCodeAt() - 'a'.charCodeAt()] +=1
            charIdx[t[idx].charCodeAt() - 'a'.charCodeAt()] -=1
        }
        
        // Convert Array to String for comparing
        return (charIdx.toString() != Array(26).fill(0).toString()) ? false : true
            
    }
};
