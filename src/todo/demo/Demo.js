import React, { useState } from 'react';
import Button, {GroupButton} from '../components/Button';
import DateTime from '../components/DateTime';
import styled from 'styled-components';

const Container = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    flex-wrap: wrap;
    margin-bottom: 10px;
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

    const [date, setDate] = useState(new Date());

    return (
        <React.Fragment>
            <h2>Buttons with different sizes</h2>
            <Container>
                <Button margin="5px" size="sm" action="text">Small Button</Button>
                <Button margin="5px" action="text">Normal Button</Button>
                <Button margin="5px" size="lg" action="text">Large Button</Button>
            </Container>
            <h2>Buttons with custom Background and color</h2>
            <Container>
                <Button margin="5px" bg="#DADBE2" color="#5e6c84" action="text">Custom Background</Button>
                <Button margin="5px" bg="#218838" color="#FBFBFB" action="text">Custom Background</Button>
                <Button margin="5px" bg="#E0A800" color="black" action="text">Custom Background</Button>
                <Button margin="5px" bg="#C82333" color="#FBFBFB" action="text">Custom Background</Button>
                <Button margin="5px" bg="#138496" color="#FBFBFB" action="text">Custom Background</Button>
                <Button margin="5px" bg="#282C34" color="#FBFBFB" action="text">Custom Background</Button>
                <Button margin="5px" bg="white" color="#65696D" action="text">Custom Background</Button>
            </Container>
            <h2>Buttons with icons</h2>
            <Container>
                <Button margin="5px" icon="FaGithub" iconPosition="left" action="icon" >Icon Button</Button>
                <Button margin="5px" icon="FaComment" iconPosition="right" bg="#218838" color="#FBFBFB" action="text">Icon Button</Button>
                <Button margin="5px" icon="FaApple" iconPosition="top" bg="#E0A800" color="black" action="text">Icon Button</Button>
                <Button margin="5px" icon="FaApple" iconPosition="bottom" bg="#C82333" color="#FBFBFB" action="text">Icon Button</Button>
                <Button margin="5px" icon="FaGithub" iconPosition="left" bg="#138496" color="#FBFBFB" action="text" size="lg">Large Icon Button</Button>
                <Button margin="5px" icon="FaComment" iconPosition="right" bg="#282C34" color="#FBFBFB" action="text" size="sm">Small Icon Button</Button>
            </Container>
            <h2>Buttons with different click action</h2>
            <Container>
                <Button margin="5px" action="text" isLoading={isLoading} onClick={handleClick}>Click to load</Button>
                <Button margin="5px" bg="#138496" color="#FBFBFB" action="icon" isLoading={isLoading2} onClick={handleClick2}>Click to load</Button>
                <Button margin="5px" bg="#138496" color="#FBFBFB" action="icon" size="lg" isLoading={isLoading3} onClick={handleClick3}>Click to load</Button>
            </Container>
            <h2>Block Buttons</h2>
            <Container>
                <Button margin="5px" bg="#282C34" color="#FBFBFB" action="text" block={true} size="sm">Full Width Button</Button>
                <Button margin="5px" action="text" block={true}>Full Width Button</Button>
                <Button margin="5px" action="text" block={true} align="center">Full Width Button with centered text</Button>
                <Button margin="5px" bg="#C82333" color="#FBFBFB" action="text" block={true} size="lg">Full Width Button</Button>
            </Container>
            <h2>Horizontal Group Buttons</h2>
            <Container>
                <GroupButton out_margin="5px">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                    <Button>Four</Button>
                </GroupButton>
                <GroupButton out_margin="5px" background="#138496" color="#FBFBFB">
                    <Button size="lg">One</Button>
                    <Button size="lg">Two</Button>
                    <Button size="lg">Three</Button>
                    <Button size="lg">Four</Button>
                </GroupButton>
            </Container>
            <h2>Vertical Group Buttons</h2>
            <Container>
                <GroupButton out_margin="5px" vertical width="100%">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                    <Button>Four</Button>
                </GroupButton>
                <GroupButton out_margin="5px" vertical width="100%" background="#C82333" color="#FBFBFB">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                    <Button>Four</Button>
                </GroupButton>
                <GroupButton out_margin="5px" vertical width="100%" outline="solid thin black">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                    <Button>Four</Button>
                </GroupButton>
                <GroupButton out_margin="5px" vertical width="200px" outline="solid thin black">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                    <Button>Four</Button>
                </GroupButton>
            </Container>
            <h2>DateTime Component</h2>
            <strong>Selected Date: </strong><span>{String(date)}</span>
            <Container>
                <DateTime onSelect={(date) => setDate(date)}/>
            </Container>
        </React.Fragment>
    );
};