import type { ref } from "process";
import Input from "../reactProps/Input";
import { useEffect,useRef } from "react";

export default function App(){
    const inpufRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inpufRef.current?.focus()
    },[])
    return(
    <>
     <input ref={inpufRef} />
     <button onClick={() => inpufRef.current?.focus()}>
        התמקד
     </button>
    </>
    )
}






