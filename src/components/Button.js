import React from 'react';

const Button = (props) => {
    return (
    <button 
        style={props.buttonStyle}
        dangerouslySetInnerHTML={{__html: props.content}}>
    </button>
    )
}

export default Button;

