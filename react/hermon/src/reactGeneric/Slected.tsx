import { useState } from "react";

export default function Selected() {
    const [selected,setSelected] = useState<string | null >(null)
    return (
     <>
        <button onClick={() => setSelected('אחד')}>
            לחץ כאן
        </button>
        {selected && <p>{selected}</p>}
     </>
    )
}

