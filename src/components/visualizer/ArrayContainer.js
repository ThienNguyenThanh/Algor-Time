import { ArrayHolder,ArrayItem } from "../../common/styles"


export function ArrayContainer({
    array,
    source,
    destination,
    highlightIndices,
    sortedIndices,
}){
    return (
        <>
        <h1>{array}</h1>
        <ArrayHolder>
            {array.map((value, idx) =>{
                return (
                    <ArrayItem
                        key={idx + ":" + value}
                    >
                        {value}
                    </ArrayItem>
                )
            })}
        </ArrayHolder>

        </>
        
    )
}