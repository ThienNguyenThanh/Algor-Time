import create from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRandomArray } from './helper'
import { swapTime,compareTime, sortingAlgorithms } from './config';

const ARRAY_SIZE = 10;
const MAX_INTERVAL = 500;
const MIN_INTERVAL = 5;
const randomArray = createRandomArray(ARRAY_SIZE, MIN_INTERVAL, MAX_INTERVAL)

export const useControls = create(
    devtools((set) => ({
        progress: "reset",
        speed: 3,
        compareTime: compareTime,
        swapTime: swapTime,
        doneCount: 0,

        startSorting: () => set({ progress: "start" }),
        pauseSorting: () => set({ progress: "pause" }),
        resetSorting: () => set({ progress: "reset", doneCount: 0 }),
        markSortngDone: () =>
            set((state) => {
                if (useArray.getState().algorithm === sortingAlgorithms.length) {
                if (state.doneCount === sortingAlgorithms.length - 1)
                    return { doneCount: 0, progress: "done" };
                else return { doneCount: state.doneCount + 1 };
                } else return { progress: "done" };
        }),
        setSpeed: (speed) =>
            set(() => {
                return { swapTime: 3000 / speed, compareTime: 1500 / speed, speed };
        }),
    }))
)

export const useArray = create(
    devtools((set) => ({
        sortingArray : [1,10,5,11,7,2],
        algorithm: 0,

        setSoringArray: (arr) => set({ sortingArray: arr}),
        setAlgorithm: (idx) => set({ algorithm: idx }),
    }))
)
