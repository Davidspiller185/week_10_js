import { useEffect, useState } from "react";

export default function Time(){
    const[time,setTime] = useState(new Date())
    useEffect(() =>{
        const id = setInterval(() => {
            setTime(new Date())
        },1000)
        return () => {
            clearInterval(id)
            console.log("הקומפוננטה הוסרה")
        }
    },[])

    return <h1>{time.toLocaleTimeString()}</h1>
}