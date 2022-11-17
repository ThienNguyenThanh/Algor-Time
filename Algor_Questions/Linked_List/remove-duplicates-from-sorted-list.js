// Solution 1
var deleteDuplicates = function(head) {    
     if(head == null || head.next == null)return head
    head.next = deleteDuplicates(head.next)
    return head.val == head.next.val ? head.next : head

};


// Solution 2
var deleteDuplicates = function(head) {
    var fakeHead = new ListNode(-1,head)
    var curr = head
    var prev = fakeHead
    while(curr != null){
        if(prev.val == curr.val){
            prev.next = curr.next

        }else{
            prev = prev.next
        }
        
        curr = curr.next
    }    
    
    
    return head

};
