import React from 'react';
import * as Fa from 'react-icons/fa';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background: ${props => props.bg ? props.bg : "#0069D9"};
  color: ${props => props.color ? props.color : "white"};
  margin: ${props => props.margin ? props.margin : '0'};
  outline: ${props => props.outline ? props.outline : ''};
  border: 2px solid ${props => props.bg ? props.bg : "#0069D9"};
  border-radius: ${props => props.borderRadius ? props.borderRadius : "3px"};
  width: ${props => props.block ? '100%' : props.width ? props.width : 'fit-content'};
  padding: 0.25em 1em;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  justify-content: left;
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

const GroupButtonContainer = styled.div`
  margin : ${props => props.margin ? props.margin : '3px'};
  display : flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  align-items: center;
  border: 1px solid ${props => props.background ? props.background : '#0069D9'};
  background: ${props => props.background ? props.background : '#0069D9'};
  border-radius: 3px;
  width: fit-content;
`;

const Button = ({ icon, bg, color, children, size, iconPosition, action, block, isLoading, onClick, margin, borderRadius, width, outline }) => {
  const Icon = Fa[icon];

  let RenderButtonContainer = (
    <ButtonContainer className={iconPosition} bg={bg} color={color} block={block} onClick={onClick} margin={margin} borderRadius={borderRadius} width={width} outline={outline}>
      {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
    </ButtonContainer>
  );
  if (size === "lg") {
    RenderButtonContainer = (
      <LargeButtonContainer className={iconPosition} bg={bg} color={color} block={block} onClick={onClick} margin={margin} borderRadius={borderRadius} width={width} outline={outline}>
        {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
      </LargeButtonContainer>
    );
  } else if (size === "sm") {
    RenderButtonContainer = (
      <SmallButtonContainer className={iconPosition} bg={bg} color={color} block={block} handleClick={onClick} margin={margin} borderRadius={borderRadius} width={width} outline={outline}>
        {isLoading ? action === 'text' ? 'Loading...' : <Spinner /> : Icon ? <><Icon />{children}</> : children}
      </SmallButtonContainer>
    );
  }
  return (RenderButtonContainer);
};

export const GroupButton = ({ background, vertical, color, children, in_margin, out_margin, width, outline }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {margin : in_margin, borderRadius: '0', color: color, bg:background, width: width, outline:outline})
  );
  return <GroupButtonContainer vertical={vertical} margin = {out_margin} background={background}>{childrenWithProps}</GroupButtonContainer>
}

export default Button;