import { setDelay } from "../common/helper";

export async function InsertionSort(inputArr, arrLen, DELAY_TIME){
    const arrBars = document.getElementsByClassName('arr-bar')

    for(var idx = 1;idx < arrLen;idx++){
        // Highlight current position
        var currVal = inputArr[idx]
        arrBars[idx].style.backgroundColor = 'red';     // highlight current min value
        await setDelay(DELAY_TIME)

        var prevIdx = idx - 1;

        while(prevIdx >= 0){
            arrBars[prevIdx].style.backgroundColor = 'green';
            if(inputArr[prevIdx] > currVal){
                inputArr[prevIdx + 1] = inputArr[prevIdx]
                inputArr[prevIdx] = currVal

                arrBars[prevIdx + 1].style.transition = `all 0.5s`;
                arrBars[prevIdx].style.transition = `all 0.5s`;
                arrBars[prevIdx + 1].style.height = `${inputArr[prevIdx + 1]}px`;
                arrBars[prevIdx].style.height = `${currVal}px`;

                arrBars[prevIdx].style.backgroundColor = 'red';
                arrBars[prevIdx + 1].style.backgroundColor = 'green';
                await setDelay(DELAY_TIME)

                arrBars[prevIdx + 1].style.backgroundColor = 'blue';
                arrBars[prevIdx].style.backgroundColor = 'blue';
            }else{
                arrBars[prevIdx].style.backgroundColor = 'blue';
            }
       
            prevIdx--;
        } 

    }

    console.log("Done")
}



