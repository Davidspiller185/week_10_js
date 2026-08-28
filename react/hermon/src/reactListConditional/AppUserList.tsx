import UserList from "./UserList.tsx";


export default function App (){
    return (
        <UserList users ={[{id:1,name:'david'},{id:2, name: 'avi'}]} />
    )
}