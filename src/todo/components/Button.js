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
  width: ${props => props.block ? '100%' : "fit-content"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(1.2);
  }

  &.left {
    flex-direction: row;
  }

  &.right {
    flex-direction: row-reverse;
  }

  &.top {
    flex-direction: column;
  }

  &.bottom {
    flex-direction: column-reverse;
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

const Button = ({ icon, bg, color, children, size, iconPosition, action, block, isLoading, onClick, margin }) => {
  const Icon = Fa[icon];

  let RenderButtonContainer = (
    <ButtonContainer className={iconPosition} bg={bg} color={color} block={block} onClick={onClick} margin={margin}>
      {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
    </ButtonContainer>
  );
  if (size === "lg") {
    RenderButtonContainer = (
      <LargeButtonContainer className={iconPosition} bg={bg} color={color} block={block} onClick={onClick} margin={margin}>
        {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
      </LargeButtonContainer>
    );
  } else if (size === "sm") {
    RenderButtonContainer = (
      <SmallButtonContainer className={iconPosition} bg={bg} color={color} block={block} handleClick={onClick} margin={margin}>
        {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
      </SmallButtonContainer>
    );
  }
  return (RenderButtonContainer);
};

export default Button;