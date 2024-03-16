import React from 'react';

function Form({addPerson, trackChange}) {

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;    
        let nameToAdd = form.querySelector("#name_input").value;
        let numberToAdd = form.querySelector("#number_input").value;
        const personToAdd = {
          name: nameToAdd,
          number: numberToAdd
        }
        addPerson(personToAdd);
        form.querySelector("#name_input").value = ""
        form.querySelector("#number_input").value = ""
        

      }
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input id='name_input' onChange={trackChange} />
        </div>
        <div>
          phone number: <input id='number_input'type="text" onChange={trackChange}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    )
}

export default Form;