import shallow from "zustand/shallow";
import { useArray, useControls } from "../common/stateManage";
import  {SortManager}  from "./visualizer/SortManager";
import { SelectionSortGen } from "../sortFunctions/SelectionSortGen";
import { sortingAlgorithms } from "../common/config";
import { useEffect } from "react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
        style={{ maxWidth: "100%" }}
      >
        {value === index && children}
      </div>
    );
  }

export function AlgorDisplay(){
  const resetSorting = useControls((state) => state.resetSorting); 

    const [sortingArr, algorithm] = useArray(
        (state) => [state.sortingArray, state.algorithm],
        shallow);

    useEffect(() => {
      resetSorting();
    }, [algorithm]);
    return(
        <>
        {sortingAlgorithms.map((algorInfor, idx) => (
            <TabPanel value={algorithm} index={idx} key={algorInfor.name}>
                <SortManager 
                  array={sortingArr} 
                  sortFunctions={algorInfor.component} 
                  sortingAlgorithmName={algorInfor.name} 
                  key={algorInfor.name}/>
            </TabPanel>
        ))}
        
        </>
    )
}