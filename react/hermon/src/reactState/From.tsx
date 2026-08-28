import { useState } from "react"

export default function From() {
    const [form, setForm] = useState({name:'', email: ''})
    return (
     <>
        <input value={form.name} onChange={(e) =>setForm(prev => ({...prev,name: e.target.value}))} />
        <input value={form.email} onChange={(e) => setForm(prev => ({...prev, email: e.target.value}))} />
    </>
    )
}




