import React from 'react'
import {labelClass, inputClass} from "../../../../stateList";

function Input({name, placeholder, value, inputHandler, type}) {

    return (
        <div>
            <label htmlFor={name} className={labelClass}>
                Your {name}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                required
                className={inputClass}
                placeholder={placeholder}
                value={value}
                onChange={inputHandler}
            />
        </div>
    )
}

export default Input
