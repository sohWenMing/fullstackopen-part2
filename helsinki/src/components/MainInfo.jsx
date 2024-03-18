import React from 'react';

function MainInfo({name, capital, area}) {
    return (
        <>
        <div>
            <h1>{name}</h1>
            <div>
                capital: {capital}
            </div>
            <div>
                area: {area}
            </div>
        </div>
        </>
    )
}

export default MainInfo;