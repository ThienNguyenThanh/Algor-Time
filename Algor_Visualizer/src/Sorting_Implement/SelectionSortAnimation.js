export function SelectionSortAnimation(inputArr){
    var arrLen = inputArr.length;
    for(var idx = 1;idx < arrLen;idx++){
        var currVal = inputArr[idx];
        var prevIdx = idx - 1;
        while(prevIdx >= 0 && inputArr[prevIdx] > currVal){
            inputArr[prevIdx + 1] = inputArr[prevIdx]
            prevIdx--;
        }
        inputArr[prevIdx + 1] = currVal
    }

    return inputArr
}


// console.log(SelectionSortAnimation([1,4,5,2]))

