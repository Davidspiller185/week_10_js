import Dropdown from "./Dropdown.tsx";

export default function App(){
    return (
    <Dropdown
        options = {[1,2,3]}
        onSelect = {value => console.log(value)}
    />
    )
}


