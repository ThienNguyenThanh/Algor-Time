import {SelectionSortGen} from '../sortFunctions/SelectionSortGen'
import {BubbleSort} from '../sortFunctions/BubbleSort'
import {InsertionSort} from '../sortFunctions/InsertionSort'

export const comparisionColor = "pink";
export const swapColor = "yellow";
export const sortedColor = "springgreen";
export const pivotColor = "sandybrown";

// time setting
export let swapTime = 1000;
export let compareTime = 500;


export const sortingAlgorithms = [
    { component: BubbleSort, title: "Bubble", name: "BubbleSort" },
    { component: SelectionSortGen, title: "Selection", name: "SelectionSort" },
    { component: InsertionSort, title: "Insertion", name: "InsertionSort" }
  ];