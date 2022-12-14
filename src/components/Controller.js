import { VscDebugStart } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";
import { ImPause } from "react-icons/im";

import styled from 'styled-components';
import shallow from 'zustand/shallow'
import { useState } from "react";
import {useArray, useControls} from '../common/stateManage'
import { setDelay } from "../common/helper";

const ExecutionBar = styled.div`
display: flex;
align-items: center;
flex-basis: 40%;
flex-grow: 1;
`;

export function Controller(){

    const [isPausing, setIsPausing] = useState(false);

    const [progress, speed] = useControls(
        (state) => [state.progress, state.speed],
        shallow
    );

    const [startSorting, pauseSorting, resetSorting, setSpeed] = useControls(
        (state) => [
          state.startSorting,
          state.pauseSorting,
          state.resetSorting,
          state.setSpeed,
        ],
        shallow
      );

    const sortingArray = useArray(
        (state) => state.sortingArray,
        shallow
    );

    const startElement = <VscDebugStart onClick={startSorting} />;
    const pauseElement = <ImPause onClick={pauseAndDelaySorting} />;
    const resetElement = <VscDebugRestart onClick={resetSorting} />;
    const disabledPauseElement = <ImPause style={{ color: "#e5e5e5" }} />;

    async function pauseAndDelaySorting(){
        pauseSorting();
        setIsPausing(true);
        await setDelay(useControls.getState().swapTime);
        setIsPausing(false);
      }

    function getProgressButton() {
        if(isPausing)
          return disabledPauseElement;
    
        switch (progress) {
          case "reset":
            return startElement;
          case "start":
            return pauseElement;
          case "pause":
            return startElement;
          case "done":
            return disabledPauseElement;
        }
      }

    return(
        <ExecutionBar>
            <div style={{ display: "flex", marginLeft: '20px', columnGap: '5px' }}>
                {getProgressButton()}
                {resetElement}
            </div>
        </ExecutionBar>
    )
}