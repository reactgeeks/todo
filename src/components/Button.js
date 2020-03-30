import React from 'react';
import * as Fa from 'react-icons/fa';

const Button = (props) => {
    const Icon = Fa[props.icon];
    let iconStyle = {};
    if(props.iconPosition === "left") {
        iconStyle = {display: 'flex', flexDirection: 'row', alignItems: 'center'}
    } else if(props.iconPosition === "right") {
        iconStyle = {display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}
    } else if(props.iconPosition === "top") {
        iconStyle = {display: 'flex', flexDirection: 'column', alignItems: 'center'}
    } else {
        iconStyle = {display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}
    }

    let ButtonStyle=style;
    if(props.large){
        ButtonStyle={...ButtonStyle,...LargeButton}
    }
    if(props.fullWidth){
        ButtonStyle={...ButtonStyle,...fullWidth}
    }

    return (
        <button style = {{...props.buttonStyle, ...iconStyle}} onClick = {() => props.loading()}>
            {Icon ? <Icon /> : null}
            {props.children}
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

