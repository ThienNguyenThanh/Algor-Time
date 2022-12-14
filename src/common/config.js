import {SelectionSortGen} from '../sortFunctions/SelectionSortGen'
import {BubbleSortGen} from '../sortFunctions/BubbleSortGen'
import {InsertionSortGen} from '../sortFunctions/InsertionSortGen'

export const comparisionColor = "pink";
export const swapColor = "yellow";
export const sortedColor = "springgreen";
export const pivotColor = "sandybrown";

// time setting
export let swapTime = 1000;
export let compareTime = 500;


export const sortingAlgorithms = [
    { component: BubbleSortGen, title: "Bubble", name: "BubbleSort" },
    { component: SelectionSortGen, title: "Selection", name: "SelectionSort" },
    { component: InsertionSortGen, title: "Insertion", name: "InsertionSort" }
  ];