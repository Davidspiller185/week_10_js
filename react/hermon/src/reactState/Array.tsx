import { useState } from "react";

export default function Array(){
    const[items,setItems] = useState<string[]>([])
    return (
        <>
            <button onClick={() => setItems(prev => ([...prev, "telephon"]))}>
                Add
            </button>
            <button onClick={() => setItems(prev => prev.filter(item => item !== "telephon"))}>
                remove
            </button>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </>
            
        
    )
} 