var reverseList = function(head) {
    if(head == null)return head
    var newHead = new ListNode(head.val,null)
    head = head.next
    while(head != null){
        nextHead = head.next
        head.next = newHead
        newHead = head

        head = nextHead
    } 
    
    return newHead
};
