import React from "react";

const lightTheme = {
    "--color-solid": "black",
    "--color-surface": "white",
    "--color-primary": "teal"
  };
  const darkTheme = {
    "--color-solid": "white",
    "--color-surface": "black",
    "--color-primary": "purple"
  };
export default class Index extends React.Component{
    componentDidMount(){
        if(this.props.theme=="dark"){
            for (const key in darkTheme) {
                if (darkTheme.hasOwnProperty(key)) {
                    this.Element.style.setProperty(key, darkTheme[key]);
                }
            }
        }else{
            for (const key in lightTheme) {
                if (darkTheme.hasOwnProperty(key)) {
                    this.Element.style.setProperty(key, lightTheme[key]);
                }
            }
        }
    }
    componentDidUpdate(){
        console.log("hee",this.props.theme)
        if(this.props.theme=="dark"){
            for (const key in darkTheme) {
                if (darkTheme.hasOwnProperty(key)) {
                    console.log("calling dark")
                    console.log(this.Element)
                    this.Element.style.setProperty(key, darkTheme[key]);
                }
            }
        }else{
            for (const key in lightTheme) {
                console.log(key)
                if (darkTheme.hasOwnProperty(key)) {
                    console.log("calling normal")
                    console.log(this.Element)
                    this.Element.style.setProperty(key, lightTheme[key]);
                }
            }
        }
    }
    render(){
        return (
        <div ref={el=>this.Element=el}>
            {this.props.children}
        </div>);
    }
}