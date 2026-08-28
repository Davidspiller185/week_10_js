import { useState } from "react";
import Time from "./cleanup.tsx";

export default function App(){
    const[show,setShow] = useState(true)

    return (
        <>
            <button onClick={() => setShow(false)}>
                הסר
            </button>
            {show && <Time />}
        </>
    )
}


