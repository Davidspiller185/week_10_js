import { useEffect, useState } from "react";

export default function App() {
    const[users,setUsers] = useState<[]>([])
    const[loading,setLoading] = useState<boolean>(true)
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(responce => responce.json())
        .then(data =>setUsers(data))
        .then(() => setLoading(false))
        
    },[])

    return (
     <>
        {loading && <p>טוען...</p>}
        <ul>
            {users.map(user => (<li>{JSON.stringify(user)}</li>))}
        </ul>
     </>
    )
    
}
