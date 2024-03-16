import React from 'react';

function Search({trackChange}) {
    return (
        <>
        <h1>Search Filter</h1>
        <input type="text" id='search_input' onChange={trackChange} />
        </>
    )
}

export default Search;