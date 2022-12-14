import { useEffect, useState } from 'react'
import {useRef} from 'react'
import { useArray, useControls } from '../../common/stateManage'
import {setDelay} from '../../common/helper'
import shallow from 'zustand/shallow'
import { compareTime, swapTime } from '../../common/config'

import { ArrayContainer } from './ArrayContainer'

// let compareTime = useControls.getState().compareTime;
// let swapTime = useControls.getState().swapTime;

// useControls.subscribe(
//   ([cTime, sTime]) => {
//     compareTime = cTime;
//     swapTime = sTime;
//   },
//   (state) => [state.compareTime, state.swapTime],
//   shallow
// );

export function SortManager({array, sortFunctions}){
    const [swapIndices, setSwapIndices] = useState([-1, -1]);
    const [hightlightedIndices, setHightlightedIndices] = useState([-1, -1]);
     
    const algorArray = useRef([]);
    const sortedIndices = useRef([]);
    const pivot = useRef(-1);
    const sortProgressIterator = useRef(null);

    const isAlgoExecutionOver = useRef(false);
    const isComponentUnMounted = useRef(false);

    const progress = useRef("")
    const markSortngDone = useControls((state) => state.markSortngDone);

    async function reset(){
        algorArray.current = [...useArray.getState().sortingArray];
        sortedIndices.current = [];
        pivot.current = -1;
        isAlgoExecutionOver.current = false;
        setSwapIndices([-1, -1]);
        setHightlightedIndices([-1, -1]);
        
        
        sortProgressIterator.current = await sortFunctions(algorArray.current, 
                                                            swap,
                                                            hightlight,
                                                            markSort);
    }

    // Initial render
    useEffect(() => { 
        progress.current = useControls.getState().progress;
        useControls.subscribe(
          (value) => {
            progress.current = value;
            console.log(value)
            if (progress.current.progress === "start") runAlgo();
            if (progress.current.progress === "reset") reset();
            
          },
          (state) => state.progress,
        );
    
        return () => {
          isComponentUnMounted.current = true;
        };
      }, []);
    
    // Re-render whenever input array changes
    useEffect(() => {
        reset();
    }, [array]);


    async function runAlgo(){
        let completion = { done: false };
        while (!completion?.done &&
            progress.current.progress === "start" 
        ){  
            
            completion = await sortProgressIterator.current?.next();
            
        }

        if (isComponentUnMounted.current) {
            return;
          }
        
          if (!isAlgoExecutionOver.current && completion?.done) {
            isAlgoExecutionOver.current = true;
            pivot.current = -1;
            setSwapIndices([-1, -1]);
            setHightlightedIndices([-1, -1]);
            markSortngDone();
          }
    }
    async function swap(i, j){
        let tmp = algorArray.current[i];
        algorArray.current[i] = algorArray.current[j];
        algorArray.current[j] = tmp;
        setSwapIndices([i, j]);

        pivot.current = -1;
        await setDelay(swapTime)
    }

    async function hightlight(indices, p){
        setSwapIndices([-1, -1]);

        pivot.current = p;
        setHightlightedIndices(indices);
        await setDelay(compareTime);
    }

    function markSort(...indices) {
        console.log(indices)
        sortedIndices.current.push(...indices);
      }

    const arrayContainer = (
        <ArrayContainer 
            array={algorArray.current}
            source={swapIndices[0]}
            destination={swapIndices[1]}
            pivot={pivot.current}
            highlightIndices={hightlightedIndices}
            sortedIndices={sortedIndices.current}
        />
    )
    return (
        <>
        {arrayContainer}

        </>
    )
}