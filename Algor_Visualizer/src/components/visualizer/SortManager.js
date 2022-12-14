import { useEffect, useState } from 'react'
import {useRef} from 'react'
import { useArray } from '../../common/stateManage'
import {setDelay} from '../../common/helper'

import { ArrayContainer } from './ArrayContainer'

export function SortManager({array, sortFunctions}){
    const [swapIndices, setSwapIndices] = useState([-1, -1]);
    const [hightlightedIndices, setHightlightedIndices] = useState([-1, -1]);
    
    const algorArray = useRef([]);
    const sortedIndices = useRef([]);
    const sortProgressIterator = useRef(null);


    async function reset(){
        algorArray.current = [...useArray.getState().sortingArray]

        sortProgressIterator.current = await sortFunctions(algorArray.current, 
                                                            swap,
                                                            hightlight,
                                                            markSort)
    }

    useEffect(() =>{
        reset()
    }, [array])


    async function runAlgo(){
        let completion = { done: false };
        while (!completion?.done ) {
            completion = await sortProgressIterator.current?.next();
        }
 
        setSwapIndices([-1, -1]);
        setHightlightedIndices([-1, -1]);
        console.log(sortProgressIterator.current)
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