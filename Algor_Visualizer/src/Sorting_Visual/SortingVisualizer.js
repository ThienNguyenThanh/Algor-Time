import {React, useState, useEffect} from 'react'
import './SortingVisualizer.css'
import {SelectionSortAnimation} from '../Sorting_Implement/SelectionSortAnimation.js'

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
        setArr(createRandomArray(100, 5, 500))
    },[])

    function SelectionSort(){
        // const arrBars = document.getElementsByClassName('arr-bar')
        // for(var bar of arrBars){
        //     console.log(bar)
        // }
        // arrBars[0].style.backgroundColor = 'blue'
        // arrBars[1].style.backgroundColor = 'blue'
        console.log(SelectionSortAnimation(arr))
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
            <button onClick={() => setArr(createRandomArray(100, 5, 500))}>Generate New Array</button>
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