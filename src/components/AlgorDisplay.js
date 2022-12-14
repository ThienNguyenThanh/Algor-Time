import shallow from "zustand/shallow";
import { useArray } from "../common/stateManage";
import { SortManager } from "./visualizer/SortManager";
import { SelectionSortGen } from "../sortFunctions/SelectionSortGen";

export function AlgorDisplay(){

    const sortingArr = useArray((state) => state.sortingArray, shallow)
    return(
        <>

        <SortManager array={sortingArr} sortFunctions={SelectionSortGen} key={'Selection Sort'}/>
        </>
    )
}