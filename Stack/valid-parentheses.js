var isValid = function(s) {
    var myStack =[]
    for(var char in s){
        
        if( (s[char] == ')' && myStack[myStack.length - 1] == '(') ||
            (s[char] == ']' && myStack[myStack.length - 1] == '[') ||
            (s[char] == '}' && myStack[myStack.length - 1] == '{')){
            myStack.pop()
        }else{
             myStack.push(s[char])
        }
        
    }
    
    return myStack.length == 0 ? true : false
};
