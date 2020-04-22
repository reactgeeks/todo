import React from "react";

const colorplate={ 

    white:{
        light:"#FFFFFF",
        dark:"#FFFFFF"
    },
    primary:{
        light:"007bff",
        dark:"#161a1f"
    },
    secondary:{
        light:"#6c757d",
        dark:"#214f78"
    },
    success:{
        light:"#28a745",
        dark:"#267037"
    },
    info:{
        light:"#17a2b8",
        dark:"#007f93"
    },
    danger:{
        light:"#dc3545",
        dark:"#99343e"
    }
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
        ...colorplate
    }
    static getDerivedStateFromProps(prevprops, state){
        if( prevprops && prevprops.theme!=state.theme)
            return {theme:prevprops.theme}
        else  return {}
    }
    render(){ 
        console.log(this.state)
        return(<ThemeContext.Provider value={
            {...this.state}
        }>
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
