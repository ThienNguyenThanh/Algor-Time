var hasCycle = function(head) {
    if(head == null) return false
    var slow = head
    var fast = head
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return true
        }
    }
    
    return false
    
};
