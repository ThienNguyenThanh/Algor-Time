import {React, useState, useEffect} from 'react'
import './SortingVisualizer.css'
import {SelectionSort} from '../sortFunctions/SelectionSort'
import {InsertionSort} from '../sortFunctions/InsertionSort'
import { BubbleSort } from '../sortFunctions/BubbleSort'

const ARRAY_SIZE = 10;
const MAX_INTERVAL = 500;
const MIN_INTERVAL = 5;
const DELAY_TIME = 200;


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



export default function SortingVisualizer() {
    const [arr, setArr] = useState([])

    useEffect(() => {
        setArr(createRandomArray(ARRAY_SIZE, MIN_INTERVAL, MAX_INTERVAL))
    },[])

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
            <button onClick={() => SelectionSort(arr, ARRAY_SIZE, DELAY_TIME)}>Selection Sort</button>
            <button onClick={() => BubbleSort(arr, ARRAY_SIZE, DELAY_TIME)}>Bubble Sort</button>
            <button onClick={() => InsertionSort(arr, ARRAY_SIZE, DELAY_TIME)}>Insertion Sort</button>
            <button>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Heap Sort</button>
        </div>
        
        </>
    )
}