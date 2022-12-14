export function setDelay(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}

function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

export function createRandomArray(sizeArr, minVal, maxVal){
    const randomArr = []
    for(var i = 0; i < sizeArr;i++){
        randomArr.push(randomIntFromInterval(minVal, maxVal))
    }
    return randomArr
}