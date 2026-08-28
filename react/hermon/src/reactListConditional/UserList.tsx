interface User {id:number,name:string}

interface UserListProp {users: User[]}

export default function UserList(props:UserListProp){
    return (
        <ul>
            {props.users.map(user => (<li key={user.id}>{user.name}</li>))}
        </ul>
    )
}

