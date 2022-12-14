import create from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRandomArray } from './helper'

const ARRAY_SIZE = 10;
const MAX_INTERVAL = 500;
const MIN_INTERVAL = 5;
const randomArray = createRandomArray(ARRAY_SIZE, MIN_INTERVAL, MAX_INTERVAL)

export const useControls = create(
    devtools((set) => ({
        progress: "reset",
        speed: 3,

        startSorting: () => set({ progress: "start" }),
        pauseSorting: () => set({ progress: "pause" }),
        resetSorting: () => set({ progress: "reset", doneCount: 0 }),
        setSpeed: (speed) =>
            set(() => {
                return { swapTime: 3000 / speed, compareTime: 1500 / speed, speed };
        }),
    }))
)

export const useArray = create(
    devtools((set) => ({
        sortingArray : [1,10,5,11,7],

        setSoringArray: (arr) => set({ sortingArray: arr})
    }))
)
