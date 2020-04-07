import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    margin : ${props => props.margin ? props.margin : '3px'};
    display : flex;
    flex-direction: ${props => props.vertical ? 'column' : 'row'}
`;

export default ({in_margin, out_margin, children, vertical}) => {

    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {margin : in_margin})
    );
  
    return <Container vertical={vertical} margin = {out_margin}>{childrenWithProps}</Container>
}