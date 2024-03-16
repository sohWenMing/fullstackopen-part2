import React from 'react';

function Form({addPerson}) {

    function handleSubmit(event) {
        event.preventDefault();
        console.log(addPerson());
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    )
}

export default Form;