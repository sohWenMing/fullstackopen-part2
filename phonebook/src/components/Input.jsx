import React from 'react';

function Input({text, onChange, id, labelText}) {
    return (
        <div>
            <div>
                <label htmlFor={id}>{labelText}</label>
            </div>
            <input id={id} type="text" onChange={onChange}/>
        </div>
    )
}

export default Input;