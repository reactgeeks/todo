import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Container = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    flex-wrap: wrap;
`;


export default () => {
    return(
        <React.Fragment>
            <h2>Buttons with different sizes</h2>
            <Container>
                <Button size="sm" action="text">Small Button</Button>
                <Button action="text">Normal Button</Button>
                <Button size="lg" action="text">Large Button</Button>
            </Container>
            <h2>Buttons with custom Background and color</h2>
            <Container>
                <Button bg="#DADBE2" color="#5e6c84" action="text">Custom Background</Button>
                <Button bg="#218838" color="#FBFBFB" action="text">Custom Background</Button>
                <Button bg="#E0A800" color="black" action="text">Custom Background</Button>
                <Button bg="#C82333" color="#FBFBFB" action="text">Custom Background</Button>
                <Button bg="#138496" color="#FBFBFB" action="text">Custom Background</Button>
                <Button bg="#282C34" color="#FBFBFB" action="text">Custom Background</Button>
                <Button bg="white" color="#65696D" action="text">Custom Background</Button>
            </Container>
            <h2>Buttons with icons</h2>
            <Container>
                <Button icon = "FaGithub" iconPosition="left" action="icon">Icon Button</Button>
                <Button icon = "FaComment" iconPosition="right" bg="#218838" color="#FBFBFB" action="text">Icon Button</Button>
                <Button icon = "FaApple" iconPosition="top" bg="#E0A800" color="black" action="text">Icon Button</Button>
                <Button icon = "FaApple" iconPosition="bottom" bg="#C82333" color="#FBFBFB" action="text">Icon Button</Button>
                <Button icon = "FaGithub" iconPosition="left" bg="#138496" color="#FBFBFB" action="text" size="lg">Large Icon Button</Button>
                <Button icon = "FaComment" iconPosition="right" bg="#282C34" color="#FBFBFB" action="text" size="sm">Small Icon Button</Button>
            </Container>
            <h2>Buttons with different click action</h2>
            <Container>
                <Button action="text">Loading Text Background</Button>
                <Button bg="#138496" color="#FBFBFB" action="icon">Loading Icon Background</Button>
                <Button bg="#138496" color="#FBFBFB" action="icon" size="lg">Loading Icon Background</Button>
                <Button bg="#138496" color="#FBFBFB" action="icon" size="sm">Loading Icon Background</Button>
            </Container>
            <h2>Block Buttons</h2>
            <Container>
                <Button bg="#282C34" color="#FBFBFB" action="text" block={true} size="sm">Custom Background</Button>
                <Button action="text" block={true}>Full Width Button</Button>            
                <Button bg="#C82333" color="#FBFBFB" action="text" block={true} size="lg">Custom Background</Button>
            </Container>
            
        </React.Fragment>
    ); 
};