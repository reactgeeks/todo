import React from 'react';
import * as Fa from 'react-icons/fa';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background: ${props => props.bg ? props.bg : "#0069D9"};
  color: ${props => props.color ? props.color : "white"};
  font-size: 1em;
  margin: ${props => props.margin ? props.margin : '1em'};
  padding: 0.25em 1em;
  border: 2px solid ${props => props.bg ? props.bg : "#0069D9"};
  border-radius: 3px;
  width: ${props => props.block ? '98%' : ""};
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

const LargeButtonContainer = styled(ButtonContainer)`
    font-size : 1.5em;
`;

const SmallButtonContainer = styled(ButtonContainer)`
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

const Container = styled.div`
  margin : ${props => props.margin ? props.margin : '3px'};
  display : flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'}
`;

const Button = ({ icon, bg, color, children, size, iconPosition, action, block, isLoading, handleClick, margin }) => {
  const Icon = Fa[icon];
  let iconStyle = {};

  if (iconPosition === "left") {
    iconStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center' }
  } else if (iconPosition === "right") {
    iconStyle = { display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }
  } else if (iconPosition === "top") {
    iconStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' }
  } else {
    iconStyle = { display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }
  }

  let RenderButtonContainer = (<ButtonContainer style={iconStyle} bg={bg} color={color} block={block} onClick={handleClick} margin={margin}>
    {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
  </ButtonContainer>);
  if (size === "lg") {
    RenderButtonContainer = (<LargeButtonContainer style={iconStyle} bg={bg} color={color} block={block} onClick={handleClick} margin={margin}>
      {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
    </LargeButtonContainer>)
  } else if (size === "sm") {
    RenderButtonContainer = (<SmallButtonContainer style={iconStyle} bg={bg} color={color} block={block} handleClick={handleClick} margin={margin}>
      {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
    </SmallButtonContainer>)
  }

  return (RenderButtonContainer);
};

export const GroupButton = ({in_margin, out_margin, children, vertical}) => {
    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {margin : in_margin})
    );  
    return <Container vertical={vertical} margin = {out_margin}>{childrenWithProps}</Container>
}

export default Button;