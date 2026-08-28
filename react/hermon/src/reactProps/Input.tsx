import type React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}


export default function Input({label, ...rest}:InputProps) {
    return (
        <label>
            {label}
            <input {...rest} />
        </label>
    )
}
