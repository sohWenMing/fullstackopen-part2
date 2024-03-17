import React from 'react';

function Input({text, onChange, id, labelText, isValid, validationMessage}) {
    return (
        <div>
            <div>
                <label htmlFor={id}>{labelText}</label>
            </div>
            <input id={id} type="text" onChange={onChange}/>
            {!isValid && 
                <div>
                    <span style={{color: 'red'}}>{validationMessage}</span>
                </div>
            }
        </div>
    )
}

export default Input;