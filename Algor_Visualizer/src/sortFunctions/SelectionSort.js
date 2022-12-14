import {setDelay} from '../common/helper.js'
import '../components/SortingVisualizer.css';
import styled from 'styled-components';

export async function SelectionSort(arr, ARRAY_SIZE, EXECUTE_TIME){
    const arrBars = document.getElementsByClassName('arr-bar')
    
    for(let idx = 0;idx < ARRAY_SIZE - 1; idx++){

        var minIdx = idx
        arrBars[minIdx].style.backgroundColor = 'red'     // highlight current min value

        await setDelay(EXECUTE_TIME)

        for(let nextIdx = idx + 1;nextIdx < ARRAY_SIZE;nextIdx++){
            
            arrBars[nextIdx].style.backgroundColor = 'green';     // highlight compared value with current min value
            await setDelay(EXECUTE_TIME)

            if(arr[nextIdx] < arr[minIdx]){
                        
                // Highlight NEW min value
                arrBars[minIdx].style.backgroundColor = 'blue';
                minIdx = nextIdx
                arrBars[minIdx].style.backgroundColor = 'red'
                await setDelay(EXECUTE_TIME)

            }else{
                arrBars[nextIdx].style.backgroundColor = 'blue';
                await setDelay(EXECUTE_TIME)
            }
            
            
        }


        if(minIdx !== idx){

            let temp = arr[idx]
            arr[idx] = arr[minIdx]
            arr[minIdx] = temp

            // Highlight start position
            arrBars[idx].style.backgroundColor = 'red';
            await setDelay(EXECUTE_TIME)

            // Switch height
            arrBars[idx].style.transition = `all 0.5s`;
            arrBars[minIdx].style.transition = `all 0.5s`;
            arrBars[idx].style.height = `${arr[idx]}px`;
            arrBars[minIdx].style.height = `${arr[minIdx]}px`;
        
            await setDelay(EXECUTE_TIME)
            arrBars[minIdx].style.backgroundColor = 'blue';
            arrBars[idx].style.backgroundColor = 'blue';

        }else{
            // UNHIGHLIGHT start position
            arrBars[minIdx].style.backgroundColor = 'blue';
            await setDelay(EXECUTE_TIME)
        }
    }
    
    
    console.log("Done !!!")
}