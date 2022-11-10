var mergeTwoLists = function(list1, list2) {
    if(list1 == null)return list2
    if(list2 == null)return list1
    
    var head = list1
    
    if(list1.val > list2.val){
        head = list2
        list2 = list2.next
    }else{
        list1 = list1.next
    }
    
    var curr = head
    while(list1 && list2){
        
        if(list1.val <= list2.val){
            curr.next = list1
            list1 = list1.next
        }else{
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
        
    }
    
    if(list1){
        curr.next = list1
    }else{
        curr.next = list2
    }

    return head
    
};
