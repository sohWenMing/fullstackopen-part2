import {useState, React} from 'react';
import Header from './Header'
import Input from './Input';
import services from '../services/phonebook'
import {searchByString} from '../../helper_functions/find_filters/findFilters'

function mapPersonObject(name, number, id=null) {
    const personObject = {id ,name, number}
    return(personObject);
}

async function createPerson(name, number) {
    // console.log("Create Person function ran");
    const newPerson = mapPersonObject(name, number);
    try {
        const response = await services.create(newPerson)
        return response;
    }
    catch(error) {
        throw error
    }
}

async function updatePerson(personObject) {
    try {
        const response = await services.update(personObject);
        return response
    }
    catch(error) {
        throw error
    }
}




function Form({onChange, persons, addPerson, updatePerson, updateMessage, firstRun}) {
    

    const [nameValid, setNameValid] = useState(true);
    const [numberValid, setNumberValid] = useState(true);

    async function onSubmit(event) {
        event.preventDefault();
        console.log("button pressed");
        const form = event.target;
        const name = form.querySelector("#input_name").value;
        const number = form.querySelector("#input_number").value;
        // ------------------------------form validations-----------------------------------------
        if(number === "") {
            setNumberValid(prev => false);
        }
        else {
            setNumberValid(prev => true);
        }
        if(name === "") {
            setNameValid(prev => false);
        }
        else {
            setNameValid(prev => true);
        }
        if(number === "" || name==="") {
            return;
        }
        // ------------------------------form validations-----------------------------------------

        const filteredPerson = searchByString(persons, ['name'], name);
        const isExist = filteredPerson.isFound
        
        if(isExist) {
            console.log("Person record found: ", filteredPerson.record);
            
            const confirmed = confirm(`${name} already exists in the database. do you want to update the number to ${number}?`);
           if(confirmed) {
            filteredPerson.name = name;
            filteredPerson.number = number;
            console.log("id: ", filteredPerson.record.id)
            const mappedPerson = mapPersonObject(filteredPerson.name, filteredPerson.number, filteredPerson.record.id);
           try {
                const response = await services.update(mappedPerson)
                console.log("response: ", response);
                updatePerson(response.data.allPersons);
                updateMessage(`${response.data.updatedPerson.name}'s record was successfully updated`, "success")
           }
           catch(error) {
            updateMessage("There was a problem with the operation", "failure")
            firstRun();
           }
            
        }
    }
        else {
            try {
                const response = await createPerson(name, number);
                updatePerson(response.data.allPersons);
                updateMessage(`${name} was successfully added to the database`, "success")
            }
            catch(error) {
                updateMessage("There was a problem with the operation", "failure")
            }
           
        }  
    }


    return (
        <>
        <form onSubmit={onSubmit}>
        <Header text={"Information"} />
        <Input id={"input_name"} onChange={onChange} labelText={"Name"} isValid={nameValid} validationMessage={"name is mandatory"}/>
        <Input id={"input_number"} onChange={onChange} labelText={"Number"} isValid={numberValid} validationMessage={"number is mandatory"}/>
        <button>Submit</button>
        </form>
        </>
    )
}

export default Form;