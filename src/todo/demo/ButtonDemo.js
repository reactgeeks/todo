import React, { useState }  from 'react';
import Button, {GroupButton} from '../components/Button';
import styled from 'styled-components';

const Container = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    flex-wrap: wrap;
`;


export default () => {
    const [isLoading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    };

    const [isLoading2, setLoading2] = useState(false);
    const handleClick2 = () => {
        setLoading2(true);
        setTimeout(() => setLoading2(false), 1000);
    };

    const [isLoading3, setLoading3] = useState(false);
    const handleClick3 = () => {
        setLoading3(true);
        setTimeout(() => setLoading3(false), 1000);
    };

    return(
        <React.Fragment>
            <h2>Buttons with different sizes</h2>
            <Container>
                <Button size="sm"  action="text">Small Button</Button>
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
                <Button icon = "FaGithub" iconPosition="left" action="icon" >Icon Button</Button>
                <Button icon = "FaComment" iconPosition="right" bg="#218838" color="#FBFBFB" action="text">Icon Button</Button>
                <Button icon = "FaApple" iconPosition="top" bg="#E0A800" color="black" action="text">Icon Button</Button>
                <Button icon = "FaApple" iconPosition="bottom" bg="#C82333" color="#FBFBFB" action="text">Icon Button</Button>
                <Button icon = "FaGithub" iconPosition="left" bg="#138496" color="#FBFBFB" action="text" size="lg">Large Icon Button</Button>
                <Button icon = "FaComment" iconPosition="right" bg="#282C34" color="#FBFBFB" action="text" size="sm">Small Icon Button</Button>
            </Container>
            <h2>Buttons with different click action</h2>
            <Container>
                <Button action="text" isLoading={isLoading} handleClick={handleClick}>Click to load</Button>
                <Button bg="#138496" color="#FBFBFB" action="icon" isLoading={isLoading2} handleClick={handleClick2}>Click to load</Button>
                <Button bg="#138496" color="#FBFBFB" action="icon" size="lg" isLoading={isLoading3} handleClick={handleClick3}>Click to load</Button>
            </Container>
            <h2>Block Buttons</h2>
            <Container>
                <Button bg="#282C34" color="#FBFBFB" action="text" block={true} size="sm">Full Width Button</Button>
                <Button action="text" block={true}>Full Width Button</Button>            
                <Button bg="#C82333" color="#FBFBFB" action="text" block={true} size="lg">Full Width Button</Button>
            </Container>
            <h2>Group Buttons</h2>
            <div>
                <h3>Vertical Group Button</h3>
                <Container>
                    <GroupButton vertical in_margin="0" out_margin="10px">
                        <Button action="text" isLoading={isLoading} handleClick={handleClick}>Click to load</Button>
                        <Button bg="#138496" color="#FBFBFB" action="icon" isLoading={isLoading2} handleClick={handleClick2}>Click to load</Button>
                        <Button bg="#138496" color="#FBFBFB" action="icon" isLoading={isLoading3} handleClick={handleClick3}>Click to load</Button>
                    </GroupButton>
                </Container>
                <h3>Horizontal Group Button</h3>
                <GroupButton in_margin="1px" out_margin="10px">
                    <Button action="text" isLoading={isLoading} handleClick={handleClick}>Click to load</Button>
                    <Button bg="#138496" color="#FBFBFB" action="icon" isLoading={isLoading2} handleClick={handleClick2}>Click to load</Button>
                    <Button bg="#138496" color="#FBFBFB" action="icon" isLoading={isLoading3} handleClick={handleClick3}>Click to load</Button>
                </GroupButton>
            </div>
        </React.Fragment>
    ); 
};