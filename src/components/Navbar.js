import shallow from "zustand/shallow";
import { useArray } from "../common/stateManage";
import { sortingAlgorithms } from "../common/config";
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export function Navbar(){
    const [algorithm, setAlgorithm] = useArray(
        (state) => [state.algorithm, state.setAlgorithm],
        shallow
    );

    return(
        <Tabs value={algorithm} onChange={(event, id) => setAlgorithm(id)}>
            {sortingAlgorithms.map((algor) => (
                <Tab label={algor.title} key={algor.title}/>
            ))}
            
        </Tabs>
    )
}