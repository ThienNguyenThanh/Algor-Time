import {React, useState, useEffect} from 'react'
import './SortingVisualizer.css'
import {SelectionSortAnimation} from '../Sorting_Implement/SelectionSortAnimation.js'

const ARRAY_SIZE = 10;
const MAX_INTERVAL = 500;
const MIN_INTERVAL = 5;
const EXECUTE_TIME = 500;


function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

function createRandomArray(sizeArr, minVal, maxVal){
    const randomArr = []
    for(var i = 0; i < sizeArr;i++){
        randomArr.push(randomIntFromInterval(minVal, maxVal))
    }
    return randomArr
}

function setDelay(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}


function switchHeight(arr,arrBars,firstIndex,secondIndex, indexTimeout, timeOut){
    
        arrBars[firstIndex].style.height = `${arr[firstIndex]}px`;
        arrBars[secondIndex].style.height = `${arr[secondIndex]}px`;
        arrBars[secondIndex].style.backgroundColor = 'blue';

}

export default function SortingVisualizer() {
    const [arr, setArr] = useState([])

    useEffect(() => {
        setArr(createRandomArray(ARRAY_SIZE, MIN_INTERVAL, MAX_INTERVAL))
    },[])

    async function SelectionSort(){
        const arrBars = document.getElementsByClassName('arr-bar')

        var animations = SelectionSortAnimation(arr)
        
        for(var animate in animations){
            if(animate % 3 ==0){
                
                 arrBars[animations[animate]].style.backgroundColor = 'red';
                 await setDelay(EXECUTE_TIME)
                
            }else if(animate % 3 ==1){
                for(var idx in animations[animate]){
                    if(idx % 2 == 0){
                        
                        arrBars[animations[animate][idx]].style.backgroundColor = 'green';
                        
                        await setDelay(EXECUTE_TIME)

                    }else{
                        if(animations[animate][idx].length > 1){
                

                            // Unhighlight
                            arrBars[animations[animate][idx][0]].style.backgroundColor = 'blue';
                            arrBars[animations[animate][idx][1]].style.backgroundColor = 'red';
                            await setDelay(EXECUTE_TIME)
                        }else{
                           
                             arrBars[animations[animate][idx]].style.backgroundColor = 'blue';
                             await setDelay(EXECUTE_TIME)
                        }
                        
                    }
                }
            } else if(animate % 3 ==2){
                if(animations[animate][0] != 0){
                    
                    arrBars[animations[animate][0][0]].style.backgroundColor = 'red';
                    await setDelay(EXECUTE_TIME)

                    switchHeight(arr, arrBars, animations[animate][0][0], animations[animate][0][1], animate, 2000)
                    arrBars[animations[animate][0][0]].style.backgroundColor = 'blue';
                }

                    arrBars[animations[animate][1]].style.backgroundColor = 'blue';
                    await setDelay(EXECUTE_TIME)
            }
        }
        console.log("Done !!!")
    }

    return (
        <>
        <div className='arr-container'>
            {arr.map((value, idx) => (
                <div className='arr-bar' 
                    key={idx}
                    style={{height: `${value}px`}}>
                </div>
            ))}
        </div>
        <div className='list-btn'>
            <button onClick={() => setArr(createRandomArray(ARRAY_SIZE, MIN_INTERVAL, MAX_INTERVAL))}>Generate New Array</button>
            <button onClick={() => SelectionSort()}>Selection Sort</button>
            <button>Bubble Sort</button>
            <button>Insertion Sort</button>
            <button>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Heap Sort</button>
        </div>
        
        </>
    )
}