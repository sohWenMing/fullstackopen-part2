import React from 'react';
import Header from './Header'
import Input from './Input';

function Form({onChange}) {
    return (
        <>
        <Header text={"Information"} />
        <Input id={"input_name"} onChange={onChange} labelText={"Name"}/>
        <Input id={"input_number"} onChange={onChange} labelText={"Number"}/>
        </>

    )
}

export default Form;