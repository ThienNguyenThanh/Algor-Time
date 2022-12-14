import { useEffect, useState } from 'react'
import {useRef} from 'react'
import { useArray, useControls } from '../../common/stateManage'
import {setDelay} from '../../common/helper'

import { ArrayContainer } from './ArrayContainer'

export function SortManager({array, sortFunctions}){
    const [swapIndices, setSwapIndices] = useState([-1, -1]);
    const [hightlightedIndices, setHightlightedIndices] = useState([-1, -1]);
     
    const algorArray = useRef([]);
    const sortedIndices = useRef([]);
    const sortProgressIterator = useRef(null);
    const isComponentUnMounted = useRef(false);

    const progress = useRef("")
 

    async function reset(){
        algorArray.current = [...useArray.getState().sortingArray]
        sortedIndices.current = [];
        setSwapIndices([-1, -1]);
        setHightlightedIndices([-1, -1]);
        
        
        sortProgressIterator.current = await sortFunctions(algorArray.current, 
                                                            swap,
                                                            hightlight,
                                                            markSort)
    }

    // Initial render
    useEffect(() => { 
        progress.current = useControls.getState().progress;
        useControls.subscribe(
          (value) => {
            progress.current = value;
            
            if (progress.current.progress === "start") runAlgo();
            if (progress.current === "reset") reset();
            
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
            console.log(completion)
        }

        if (isComponentUnMounted.current) {
            return;
          }
        
        setSwapIndices([-1, -1]);
        setHightlightedIndices([-1, -1]);
    }
    async function swap(i, j){
        let tmp = algorArray.current[i];
        algorArray.current[i] = algorArray.current[j];
        algorArray.current[j] = tmp;
        setSwapIndices([i, j]);

        await setDelay(500)
    }

    async function hightlight(indices){
        setSwapIndices([-1, -1]);
        setHightlightedIndices(indices);
        await setDelay(1000);
    }

    function markSort(...indices) {
        sortedIndices.current.push(...indices);
      }

    const arrayContainer = (
        <ArrayContainer 
            array={algorArray.current}
            source={swapIndices[0]}
            destination={swapIndices[1]}
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