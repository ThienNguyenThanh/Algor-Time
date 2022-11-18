export function InsetionSortAnimation(inputArr){
    var arrLen = inputArr.length;
    for(var idx = 1;idx < arrLen;idx++){
        var currVal = inputArr[idx];
        var prevIdx = idx - 1;
        while(prevIdx >= 0 && inputArr[prevIdx] > currVal){
            // setTimeout(() => {
            //     console.log('here')
            //     inputArr[prevIdx + 1].style.backgroundColor = 'blue';
            //     inputArr[prevIdx].style.backgroundColor = 'blue';
            //   }, 2000)
            inputArr[prevIdx + 1].style.backgroundColor = 'blue';
            inputArr[prevIdx].style.backgroundColor = 'blue';
            inputArr[prevIdx + 1] = inputArr[prevIdx]
            prevIdx--;
        }
        inputArr[prevIdx + 1] = currVal
    }

    return inputArr
}


// console.log(SelectionSortAnimation([1,4,5,2]))

