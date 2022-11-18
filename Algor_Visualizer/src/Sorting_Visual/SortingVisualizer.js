import {React, useState, useEffect} from 'react'
import './SortingVisualizer.css'
import {SelectionSortAnimation} from '../Sorting_Implement/SelectionSortAnimation.js'

const ARRAY_SIZE = 10;
const MAX_INTERVAL = 500;
const MIN_INTERVAL = 5;


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

function setRedBackground(arrBars,index, indexTimeout, timeOut){
    setTimeout(() => {
        arrBars[index].style.backgroundColor = 'red';
    }, indexTimeout * timeOut)
}

function setGreenBackground(arrBars,index,indexTimeout, timeOut){
    setTimeout(() => {
        arrBars[index].style.backgroundColor = 'green';
    }, indexTimeout * timeOut)
}

function setBlueBackground(arrBars,index, indexTimeout,timeOut){
    setTimeout(() => {
        arrBars[index].style.backgroundColor = 'blue';
    }, indexTimeout * timeOut)
}

function setTwoBackground(arrBars,firstIndex, secondIndex,indexTimeout, timeOut){
    setTimeout(() => {
        arrBars[firstIndex].style.backgroundColor = 'blue';
        arrBars[secondIndex].style.backgroundColor = 'red';
    }, indexTimeout * timeOut)
}


function setHeight(arr,arrBars,firstIndex,secondIndex, indexTimeout, timeOut){
    setTimeout(() => {
        arrBars[firstIndex].style.height = `${arr[firstIndex]}px`;
        arrBars[secondIndex].style.height = `${arr[secondIndex]}px`;
        arrBars[secondIndex].style.backgroundColor = 'blue';
    }, indexTimeout * timeOut)
}

export default function SortingVisualizer() {
    const [arr, setArr] = useState([])

    useEffect(() => {
        setArr(createRandomArray(ARRAY_SIZE, MIN_INTERVAL, MAX_INTERVAL))
    },[])

    function SelectionSort(){
        const arrBars = document.getElementsByClassName('arr-bar')

        var animations = SelectionSortAnimation(arr)
        console.log(animations)
        for(var animate in animations){
            if(animate % 3 ==0){
                setRedBackground(arrBars, animations[animate],animate, 1000)
                // console.log(`layer 1: ${animations[animate]}`)
            }else if(animate % 3 ==1){
                for(var idx in animations[animate]){
                    if(idx % 2 == 0){
                        setGreenBackground(arrBars, animations[animate][idx],animate, 1000)
                        // console.log(`layer 2: ${animations[animate][idx]}`)
                        

                    }else{
                        if(animations[animate][idx].length > 1){
                            // console.log(`layer 2: ${animations[animate][idx]}`)
                            

                            setTwoBackground(arrBars, animations[animate][idx][0], animations[animate][idx][1],animate, 1000)
                        }else{
                            // console.log(`layer 2: ${animations[animate][idx]}`)
                            

                            setBlueBackground(arrBars, animations[animate][idx], animate,1000)
                        }
                        
                    }
                }
            } else if(animate % 3 ==2){
                if(animations[animate][0] != 0){
                    setHeight(arr, arrBars, animations[animate][0][0], animations[animate][0][1], animate, 2000)
                }

                setBlueBackground(arrBars, animations[animate][1],animate, 2000)
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