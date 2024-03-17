import {useState, React} from 'react';
import Header from './Header'
import Input from './Input';
import services from '../services/phonebook'


function Form({onChange, persons, addPerson, updatePerson}) {
    

    const [nameValid, setNameValid] = useState(true);
    const [numberValid, setNumberValid] = useState(true);

    function mapPersonObject(name, number) {
        const personObject = {name, number}
        return(personObject);
    }


    function onSubmit(event) {
        event.preventDefault();
        console.log("button pressed");
        const form = event.target;
        const name = form.querySelector("#input_name").value;
        const number = form.querySelector("#input_number").value;
        const filteredList = persons.filter((person) => {
            return (
                person.name.toLowerCase().trim() === name.toLowerCase().trim()
            )
        })
        const isExist = filteredList.length > 0;
        
        
        function createPerson() {
            const newPerson = mapPersonObject(name, number);
            services.create(newPerson)
            .then((res) => {
                const personObject = res.data;
                addPerson(personObject);
            })     
        }
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

        if(isExist) {
            const confirmed = confirm(`${name} already exists in the database. do you want to update the number to ${number}?`);
            if(confirmed) {
                const personToUpdate = filteredList[0];
                console.log("personToUpdate :", personToUpdate)
                const updatedPerson = {
                    ...personToUpdate, 
                    number: number
                }
                console.log("new person object: ", updatedPerson);

                
                services.update(updatedPerson)
                .then((res) => {
                    const returnedPerson = res.data;
                    const personsWithUpdatedRemoved = persons.filter(person => person.id !== returnedPerson.id);
                    const updatedList = [...personsWithUpdatedRemoved, returnedPerson];
                    updatePerson(updatedList);
                    
                })
            }
           
        }
        else {
            createPerson();
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