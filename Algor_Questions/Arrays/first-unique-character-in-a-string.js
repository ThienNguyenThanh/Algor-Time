// First Solution.
var firstUniqChar = function(s) {
    var myMap = new Map();
    for(var idx in s){
        if(myMap.has(s[idx])){
            myMap.set(s[idx], [idx , myMap.get(s[idx])[1] + 1])
        }else{
            myMap.set(s[idx], [idx,1])
        }
    }
    
    // myMap = {'any_char': [idx, count]}
    for(var [key,value] of myMap){
        if(value[1] == 1){
            return parseInt(value[0], 10)
        }
    }
 
    return -1

};


// Second Solution.
var firstUniqChar = function(s) {
    for(var idx in s){
         var char = s[idx]
         if(s.indexOf(char) == s.lastIndexOf(char)){
            return idx
         }
    }
  
    return -1
};
