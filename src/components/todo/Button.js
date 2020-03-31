import React, { useState } from 'react';
import * as Fa from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.bg ? props.bg : "#0069D9"};
  color: ${props => props.color ? props.color : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.bg ? props.bg : "#0069D9"};
  border-radius: 3px;
  width: ${props => props.block ? '98%' : ""};
  cursor: pointer;
`;

const LargeButton = styled(Button)`
    font-size : 1.5em;
`;

const SmallButon = styled(Button)`
    font-size : 0.7em;
`;

const Spinner = () => (
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  );
  
const StyledSpinner = styled.svg`
    animation: rotate 1s linear infinite;
    width: 20px;
    height: 20px;
  
    & .path {
      stroke: #fff;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes dash {
      0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
      }
    }
  `;

export default ({icon, bg, color, children, size, iconPosition, action, block}) => {
    const [isLoading, setLoading] = useState(false);
  
    const handleClick = () => setLoading(true);

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

    let RenderButton =  (<Button style={iconStyle} bg = {bg} color = {color} onClick = {handleClick} block = {block}>
                            {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
                        </Button>);
    if(size === "lg") {
        RenderButton = (<LargeButton style={iconStyle} bg = {bg} color = {color} onClick = {handleClick} block = {block}>
                            {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
                        </LargeButton>)
    } else if (size === "sm") {
        RenderButton = (<SmallButon style={iconStyle} bg = {bg} color = {color} onClick = {handleClick} block = {block}>
                            {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
                        </SmallButon>)
    }

    return(RenderButton);
};

