import React from 'react';

function Message({message, messageType}) {
    const baseStyle = {
        borderRadius: '4px',
        padding: '8px', 
        marginBottom: '8px'
    }
    const errorStyle = {
        color: 'red',
        border: "2px solid red"
    }

    const successStyle = {
        color: 'green',
        border: "2px solid green"
    }

    const combinedStyle = 
        messageType === "success" ? {...baseStyle, ...successStyle} :
        {...baseStyle, ...errorStyle}

   


    return(
        <div style={combinedStyle}>
        {message}
        </div>
    )

    
        

}

export default Message;