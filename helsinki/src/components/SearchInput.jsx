import React from 'react';

function SearchInput({updateCountry}) {


    return (
    <div>
        <label htmlFor="searchInput">find countries:  </label>
        <input type="text" id="searchInput" onBlur={updateCountry} />
    </div>
    )

}

export default SearchInput;