interface DropdownProps<T> 
        {options: T[], 
        onSelect: (value: T) => void}
    
        export default function Dropdown<T>(props:DropdownProps<T>){
                return (
                    <select onChange={(e) => props.onSelect(e.target.value)}>
                        {props.options.map(option => (<option>{option }</option>))}
                        
                    </select>
                )
        }


