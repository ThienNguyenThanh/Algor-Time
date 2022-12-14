import {React, useState, useEffect, useRef} from 'react'
import './SortingVisualizer.css'
import {SelectionSort} from '../sortFunctions/SelectionSort'
import {InsertionSort} from '../sortFunctions/InsertionSort'
import { BubbleSort } from '../sortFunctions/BubbleSort'
import styled from 'styled-components'
import { useArray } from '../common/stateManage'
import { createRandomArray } from '../common/helper'
import { ArrayHolder, ArrayItem } from '../common/styles'
import shallow from 'zustand/shallow'
import create from 'zustand'

const ARRAY_SIZE = 10;
const MAX_INTERVAL = 500;
const MIN_INTERVAL = 5;
const DELAY_TIME = 500;
const BoxArray = styled.div`
        height: ${(props) => props.height}px;
        width: 100px;
        background-color: blue;
    
        display: inline-block;
        margin: 0 1px
    `


    const useBearStore = create((set) => ({
        bears: 0,
        listBear: [1,10,20],
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        appendListBear: () => set({listBear: [1,2,3]})
      }))



export default function SortingVisualizer() {
    const [arr, setArr] = useState([1,2,3])
    const myArr = useRef([])
    const setMyARR = useArray((state) => state.appendVal)
    const sortingArr = useRef([1,2,3])
    const bears = useBearStore((state) => state.bears)
    const increaseBears = useBearStore((state) => state.increasePopulation)
    const increaseMyArr = useBearStore((state) => state.appendListBear)




    function swap(){
        
        let temp = myArr.current[0]
        myArr.current[0] = myArr.current[1]
        myArr.current[1] = temp
        console.log("Done swap !")
        console.log(myArr.current)
    }

    return (
        <>
        <h1>{myArr.current}</h1>
        {/* <ArrayHolder>
            {sortingArr.current.map((value, idx) => {
                return (
                    <ArrayItem key={idx + ':' + value}>
                        {value}
                    </ArrayItem>
                )
            })}
        </ArrayHolder> */}
        <div className='arr-container'>
            {/* {arr.map((value, idx) => (
                <BoxArray className='arr-bar' key={idx} height={value} />
            ))} */}
        </div>
        <div className='list-btn'>
            <button onClick={() => setArr(createRandomArray(ARRAY_SIZE, MIN_INTERVAL, MAX_INTERVAL))}>Generate New Array</button>
            <button onClick={() => SelectionSort(arr, ARRAY_SIZE, DELAY_TIME)}>Selection Sort</button>
            <button onClick={() => BubbleSort(arr, ARRAY_SIZE, DELAY_TIME)}>Bubble Sort</button>
            <button onClick={() => InsertionSort(arr, ARRAY_SIZE, DELAY_TIME)}>Insertion Sort</button>
            <button onClick={swap}>swap</button>
            <button>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Heap Sort</button>
        </div>
        
        </>
    )
}