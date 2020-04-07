import React from "react";
import styled from 'styled-components';
import {themeHOD,ThemeProvider} from "./theme";

const ButtonComponent = styled.button`
  margin-top: .25rem;
  margin-bottom: .25rem;
  color:${props=>props.themeObject&&props.themeObject.white};
  &.primary {
    background-color: ${props=>props.themeObject&&props.themeObject.button.primaryColor};
    border-color:${props=>props.themeObject&&props.themeObject.button.primaryColor};
  }
  &.secondary {
    background-color: ${props=>props.themeObject&&props.themeObject.button.secondaryColor};
    border-color:${props=>props.themeObject&&props.themeObject.button.secondaryColor};
  }
  &.success {
    background-color: ${props=>props.themeObject&&props.themeObject.button.successColor};
    border-color:${props=>props.themeObject&&props.themeObject.button.successColor};
  }&.danger {
    background-color: ${props=>props.themeObject&&props.themeObject.button.dangerColor};
    border-color:${props=>props.themeObject&&props.themeObject.button.dangerColor};
  }&.info {
    background-color: ${props=>props.themeObject&&props.themeObject.button.infoColor};
    border-color:${props=>props.themeObject&&props.themeObject.button.infoColor};
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
            theme:this.state.theme=="dark"?"normal":"dark"
        })
    }
    render(){
        return (<div>
            <Button className="primary" onClick={this.onChangeTheme}> Change theme {this.state.theme=="dark"?"normal":"dark"}</Button><br></br>
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