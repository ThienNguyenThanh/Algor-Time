var groupAnagrams = function(strs) {
    let myMap = new Map()
    for(var str of strs){
        let newArr = Array(26).fill(0)  
        const charAta  = 'a'.charCodeAt()
        
        for(var word of str){
            newArr[word.charCodeAt() - charAta] += 1
        }

        let newStr = newArr.toString()
        if(newStr in myMap){
            myMap[newStr].push(str)
        }else{
            myMap[newStr] = [str]
        }
        
    }

    return Object.values(myMap)
};
