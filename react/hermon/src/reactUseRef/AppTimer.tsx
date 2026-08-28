import { useEffect, useRef, useState } from "react";

 export default function App(){
    const [time, setTime] = useState(new Date())
    const idTimerREf = useRef<number|null>(null)
    useEffect(() =>{
        idTimerREf.current = setInterval(() => {
            setTime(new Date())
        },1000)
    },[])
    return (
        <p>{time.toLocaleTimeString()}</p>
    )
}




























