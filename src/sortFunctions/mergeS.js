function* merge(left, right, off1, off2){

    if(left === undefined || right === undefined) return 
    console.log(`left: ${left} (${off1}), right: ${right} (${off2})`)
    let result = [];
    let [leftIdx, rightIdx] = [0,0];

    while(result.length < left.length + right.length){
        // highlight([off1 + leftIdx, off2 + rightIdx])
        yield [off1 + leftIdx, off2 + rightIdx]
        if(left[leftIdx] <= right[rightIdx]){
            result.push(left[leftIdx]);
            // donw animate
            leftIdx +=1;
        }else{
            result.push(right[rightIdx]);
            // donw animate
            rightIdx +=1;
        }

        if(leftIdx == left.length){
            result.push(...right.slice(rightIdx));
            // donw animate
            break;
        }
        if(rightIdx == right.length){
            result.push(...left.slice(leftIdx));
            // donw animate
            break;
        }
    }
    // Up animate
    console.log(`Finish one lap: ${result}`)
    return result
}


function* mergeSort(array, offSet = 0, highlight, combine){
    if(array.length <= 2){
        return array
    }
     
    let midPoint = Math.floor(array.length / 2);

    const arr = yield* merge( 
        left=yield* mergeSort(array.slice(0,midPoint, offSet, highlight, combine)),
        right=yield* mergeSort(array.slice(midPoint), offSet + midPoint, highlight, combine), 
        offSet, 
        offSet + midPoint
    )
    
    return arr

}


let testArr=  mergeSort([4,2,5,7,1,3,9,2])

let result = testArr.next()
while(!result.done){
    console.log(result)
    result = testArr.next()
}