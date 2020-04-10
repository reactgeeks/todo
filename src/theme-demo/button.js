import React from "react";
import styled from 'styled-components';
import {themeHOD,ThemeProvider} from "./theme";

const ButtonComponent = styled.button`
  margin-top: .25rem;
  margin-bottom: .25rem;
  color:${props=>props.themeObject&&props.themeObject.white[props.themeObject.theme]};
  &.primary {
    background-color: ${props=>props.themeObject&&props.themeObject.primary[props.themeObject.theme]};
    border-color:${props=>props.themeObject&&props.themeObject.primary[props.themeObject.theme]};
  }
  &.secondary {
    background-color: ${props=>props.themeObject&&props.themeObject.secondary[props.themeObject.theme]};
    border-color:${props=>props.themeObject&&props.themeObject.secondary[props.themeObject.theme]};
  }
  &.success {
    background-color: ${props=>props.themeObject&&props.themeObject.success[props.themeObject.theme]};
    border-color:${props=>props.themeObject&&props.themeObject.success[props.themeObject.theme]};
  }&.danger {
    background-color: ${props=>props.themeObject&&props.themeObject.danger[props.themeObject.theme]};
    border-color:${props=>props.themeObject&&props.themeObject.danger[props.themeObject.theme]};
  }&.info {
    background-color: ${props=>props.themeObject&&props.themeObject.info[props.themeObject.theme]};
    border-color:${props=>props.themeObject&&props.themeObject.info[props.themeObject.theme]};
  }
`;
 

const Button =themeHOD( class Button extends React.Component{
    render(){
        let {children,...other} = this.props;
        console.log(this.props)
        return (
            <ButtonComponent {...other}>
                {children}
                </ButtonComponent>
        )
    }
})
export default Button;

export class ButtonDemo extends React.Component{
    state={
        theme:"dark"
    }
    onChangeTheme=()=>{
        this.setState({
            theme:this.state.theme=="dark"?"light":"dark"
        })
    }
    render(){
        return (<div>
            <Button className="primary" onClick={this.onChangeTheme}> Change theme {this.state.theme=="dark"?"light":"dark"}</Button><br></br>
            <hr/>
            <ThemeProvider theme={this.state.theme}>
                <Button className="primary">Primary</Button><br></br>
                <Button className="secondary">secondary</Button><br></br>
                <Button className="success">success</Button><br></br>
                <Button className="danger">Danger</Button><br></br>
                <Button className="info">Info</Button>
            </ThemeProvider>
             
        </div>)
    }
}