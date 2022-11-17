// Solution 1
var removeElements = function(head, val) {
    if(head == null)return null
    head.next = removeElements(head.next, val)
    return head.val == val ? head.next : head

};


// Solution 2
var removeElements = function(head, val) {
    var fakeHead = new ListNode(-1, head)
    var curr = head
    var prev = fakeHead
    while(curr != null){
        if(curr.val == val){
            prev.next = curr.next
        }else{
            prev = prev.next
        }
        
        curr = curr.next
    }
    
    return fakeHead.next
    
};



