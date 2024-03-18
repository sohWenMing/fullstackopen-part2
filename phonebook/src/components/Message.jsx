import React from 'react';

function Message({message}) {
    const errorStyle = {
        color: 'red',
        border: "2px solid red",
        borderRadius: '4px'
    }
    return(
        <div style={errorStyle}>
        Test error message
        </div>
    )

    
        

}

export default Message;