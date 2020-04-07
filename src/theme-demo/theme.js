import React from "react";

const colorplate={
    primaryColor:"#007bff",
    secondaryColor:"#6c757d",
    successColor:"#28a745",
    infoColor:"#17a2b8",
    dangerColor:"#dc3545",

    white:"#FFFFFF"
}
const darkThemePalate={
    primaryColor:"#161a1f",
    secondaryColor:"#214f78",
    successColor:"#267037",
    infoColor:"#007f93",
    dangerColor:"#99343e",

    white:"#FFFFFF"
}


export const ThemeContext = React.createContext({
    ...colorplate,
    input:{
        color:"blue",
        background:"grey",
        
    },
    button:{
        primaryColor:colorplate.primaryColor,
        secondaryColor:colorplate.secondaryColor,
        successColor:colorplate.successColor,
        infoColor:colorplate.infoColor,
        dangerColor:colorplate.dangerColor,
        white:colorplate.white
    }
});

export class ThemeProvider extends React.Component{
    state={
        dark:{
            ...darkThemePalate,
            input:{
                color:"black",
                background:'green'
            },
            button:{
                primaryColor:darkThemePalate.primaryColor,
                secondaryColor:darkThemePalate.secondaryColor,
                successColor:darkThemePalate.successColor,
                infoColor:darkThemePalate.infoColor,
                dangerColor:darkThemePalate.dangerColor,
                white:darkThemePalate.white
            }
        },
        normal:{
            ...colorplate,
            input:{
                color:"blue",
                background:"grey",
                
            },
            button:{
                primaryColor:colorplate.primaryColor,
                secondaryColor:colorplate.secondaryColor,
                successColor:colorplate.successColor,
                infoColor:colorplate.infoColor,
                dangerColor:colorplate.dangerColor,
                white:colorplate.white
            }
        }
    }
    render(){
        let theme=this.state.normal;
        if(this.props.theme){
            theme=this.state[this.props.theme]
        }
        return(<ThemeContext.Provider value={theme}>
            {this.props.children}
        </ThemeContext.Provider>)
    }
}


export const themeHOD = (Component)=>{
    return (props)=> <ThemeContext.Consumer>
        {themeprops=>{
            console.log("thhhh",themeprops)
            return (
            <Component {...props}  themeObject={themeprops}/>
        )}}
    </ThemeContext.Consumer>
}
