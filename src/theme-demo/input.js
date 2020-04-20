import React from "react";
import styled,{css} from 'styled-components'
import Button from  "../todo/components/Button"
import {themeHOD,ThemeProvider} from "./theme";

const InputComponent = styled.input`

    ${props=>(
        props.theme&&
        css`
            color:${props.theme.input.color};
            background:${props.theme.input.background}
        `
    )}
`;

const Input =themeHOD( class Input extends React.Component{
    render(){
        let {children,...other} = this.props;
        console.log(this.props)
        return (
            <InputComponent {...other}/>
        )
    }
})
export default Input;

export class ThemeDemo extends React.Component{
    state={
        theme:"dark"
    }
    onChangeTheme=()=>{
        this.setState({
            theme:this.state.theme=="dark"?"normal":"dark"
        })
    }
    render(){
        return (<div>
            <Button handleClick={this.onChangeTheme}> Change theme {this.state.theme=="dark"?"normal":"dark"}</Button>
            <ThemeProvider theme={this.state.theme}>
                <Input defaultValue="hello"/>
            </ThemeProvider>
             
        </div>)
    }
}