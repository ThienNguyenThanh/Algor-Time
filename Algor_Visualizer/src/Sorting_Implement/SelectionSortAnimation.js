export function SelectionSortAnimation(inputArr){
    let animations = []
    const arrLen = inputArr.length
    for(let idx = 0;idx < arrLen - 1; idx++){
        var secondAnimation = []
        var thirdAnimation = []

        var minIdx = idx
        animations.push(minIdx)     // highlight (red)
        for(let nextIdx = idx + 1;nextIdx < arrLen;nextIdx++){
            
            secondAnimation.push(nextIdx)    // highlight (green)

            if(inputArr[nextIdx] < inputArr[minIdx]){
                var fouthAnimation = []
                fouthAnimation.push(minIdx)
                minIdx = nextIdx
                fouthAnimation.push(minIdx)

                secondAnimation.push(fouthAnimation)
            }else{
                secondAnimation.push(nextIdx)   // unhighlight (green)
            }
            
            
        }
        animations.push(secondAnimation)

        if(minIdx != idx){
            // animations.push(idx)
            let temp = inputArr[idx]
            inputArr[idx] = inputArr[minIdx]
            inputArr[minIdx] = temp

            thirdAnimation.push([idx, minIdx])
            thirdAnimation.push(minIdx)
            animations.push(thirdAnimation)
        }else{
            thirdAnimation.push(0)
            thirdAnimation.push(minIdx)
            animations.push(thirdAnimation)   // unhighlight (red)
        }
            
        
    }

    return animations
}


// console.log(SelectionSortAnimation([1,4,2,16,8,4,55,5,2]))

