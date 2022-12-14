import { setDelay } from "../common/helper";

export async function BubbleSort(inputArr, arrLen, DELAY_TIME){

    const arrBars = document.getElementsByClassName('arr-bar')


    let swapped;
    do{
        swapped = false
        for(var idx =0; idx < arrLen - 1;idx++){

            arrBars[idx].style.backgroundColor = 'red';
            await setDelay(DELAY_TIME)

            if(inputArr[idx] > inputArr[idx + 1]){
                arrBars[idx + 1].style.backgroundColor = 'green';
                let temp = inputArr[idx]
                inputArr[idx] = inputArr[idx+1]
                inputArr[idx+1] = temp
                swapped = true

                await setDelay(DELAY_TIME)

                arrBars[idx].style.transition = `all 0.5s`;
                arrBars[idx + 1].style.transition = `all 0.5s`;
                arrBars[idx].style.height = `${inputArr[idx]}px`;
                arrBars[idx + 1].style.height = `${inputArr[idx + 1]}px`;

                arrBars[idx].style.backgroundColor = 'green';
                arrBars[idx + 1].style.backgroundColor = 'red';
                await setDelay(DELAY_TIME)

                arrBars[idx].style.backgroundColor = 'blue';
                arrBars[idx + 1].style.backgroundColor = 'blue';
            }

            arrBars[idx].style.backgroundColor = 'blue';
        }
    }while (swapped)
    
    return inputArr
}


// console.log(BubbleSort([2,35,7,1,4,3]))