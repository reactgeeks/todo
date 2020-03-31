import React from 'react';
import * as Fa from 'react-icons/fa';
import styled from 'styled-components'

/*const Button = ({icon, iconPosition, buttonStyle, children, loading}) => {
    const Icon = Fa[icon];
    let iconStyle = {};
    if(iconPosition === "left") {
        iconStyle = {display: 'flex', flexDirection: 'row', alignItems: 'center'}
    } else if(iconPosition === "right") {
        iconStyle = {display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}
    } else if(iconPosition === "top") {
        iconStyle = {display: 'flex', flexDirection: 'column', alignItems: 'center'}
    } else {
        iconStyle = {display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}
    }

    /*let ButtonStyle=style;
    if(props.large){
        ButtonStyle={...ButtonStyle,...LargeButton}
    }
    if(props.fullWidth){
        ButtonStyle={...ButtonStyle,...fullWidth}
    }*/

/*    return (
        <button style = {{...buttonStyle, ...iconStyle}} onClick = {() => loading()}>
            {Icon ? <Icon /> : null}
            {children}
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
*/

const Button = styled.button`
  background: ${props => props.bg ? props.bg : "#0069D9"};
  color: ${props => props.color ? props.color : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.bg ? props.bg : "#0069D9"};
  border-radius: 3px;
`;

const LargeButton = styled(Button)`
    font-size : 1.5em;
`;

const SmallButon = styled(Button)`
    font-size : 0.7em;
`;

export default (props) => {
    let RenderButton =  (<Button bg = {props.bg} color = {props.color}>{props.children}</Button>);
    if(props.size === "lg") {
        RenderButton = (<LargeButton bg = {props.bg} color = {props.color}>{props.children}</LargeButton>)
    } else if (props.size === "sm") {
        RenderButton = (<SmallButon bg = {props.bg} color = {props.color}>{props.children}</SmallButon>)
    }

    return(RenderButton);
};

