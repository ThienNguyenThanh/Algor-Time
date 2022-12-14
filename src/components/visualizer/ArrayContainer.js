import { ArrayHolder,ArrayItem, leftToRightAnimation, rightToLeftAnimation } from "../../common/styles"
import {comparisionColor, sortedColor, swapColor, pivotColor} from "../../common/config"
import styled from "styled-components";
import {useControls} from '../../common/stateManage'



const Source = styled(ArrayItem)`
  animation: ${(props) => rightToLeftAnimation(props.distance, swapColor)}
    ${() => 1}s forwards;
`;

const Destination = styled(ArrayItem)`
  animation: ${(props) => leftToRightAnimation(props.distance, swapColor)}
    ${() => 1}s forwards;
`; 

export function ArrayContainer({
    array,
    source,
    destination,
    pivot = -1,
    highlightIndices,
    sortedIndices,
}){

    function getBackgroundColor(i) {
        if (i === pivot) {
          return pivotColor;
        }
    
        if (highlightIndices.includes(i)) {
          return comparisionColor;
        }
    
        if (sortedIndices.includes(i)) {
          return sortedColor;
        }
        return "";
    }

    return (
        <>
        <h1>Source: {source}</h1>
        <h1>Destination: {destination}</h1>
        <h1>Pivot: {pivot}</h1>
        
        <ArrayHolder>
            {array.map((value, idx) =>{
                if(idx === source){
                    return(
                        <Source
                            key={idx + ':' + source + ';' + destination + ':' + value}
                            distance={destination - source}
                            style={{
                                order: destination,
                                backgroundColor: getBackgroundColor(idx)
                            }}
                        >
                            {value}
                        </Source>
                    )
                }
                if(idx === destination){
                    return(
                        <Destination
                            key={idx + ':' + source + ';' + destination + ':' + value}
                            distance={destination - source}
                            style={{
                                order: source,
                                backgroundColor: getBackgroundColor(idx)
                            }}
                        >
                            {value}
                        </Destination>
                    )
                }
                return (
                    
                    <ArrayItem
                    key={idx + ":" + destination + ":" + source + ":" + value}
                        style={{
                            order: idx,
                            backgroundColor: getBackgroundColor(idx)
                        }}
                    >
                        {value}
                    </ArrayItem>
                    
                    
                )
            })}
        </ArrayHolder>

        </>
        
    )
}