
import React from 'react';


function Languages({languages}) {
    console.log(languages);
    const languageArray = Object.values(languages);
    
    return (
        <ul>
            {languageArray.map(language => <li>{language}</li>)}
        </ul>
    )

}

export default Languages;