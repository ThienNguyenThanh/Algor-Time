import create from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRandomArray } from './helper'

const ARRAY_SIZE = 10;
const MAX_INTERVAL = 500;
const MIN_INTERVAL = 5;
const randomArray = createRandomArray(ARRAY_SIZE, MIN_INTERVAL, MAX_INTERVAL)


export const useArray = create(
    devtools((set) => ({
        sortingArray : [1,5,10,11,12],

        setSoringArray: (arr) => set({ sortingArray: arr})
    }))
)
