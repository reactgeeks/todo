import React from 'react';

const Button = (props) => {
    let ButtonStyle=style;
    if(props.large){
        ButtonStyle={...ButtonStyle,...LargeButton}
    }
    if(props.fullWidth){
        ButtonStyle={...ButtonStyle,...fullWidth}
    }
    return (
    <button 
        style={ButtonStyle}
        >
            {
                props.children
            }
    </button>
    )
}
const style ={

    color: "black",
    backgroundColor: "#c3c3c3",
    borderRadius: "4px",
    border: "none",
    padding: "0.25rem",
    outline: "none"
}
const fullWidth={
    width:"100%"
}
const LargeButton={
    fontSize:"20px"
}

export default Button;

