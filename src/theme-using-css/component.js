import React,{useState} from 'react'; 
import './style.css';
import Theme from "./css-theme"
import { action } from '@storybook/addon-actions';
function MyApp() {
    const [theme,setTheme]=useState("dark")

  return (
    <div className="MyApp">
      MyApp content with normal theme
      <button onClick={()=>{
          console.log(theme)
          setTheme(theme=="dark"?"light":"dark")
      }}>changeTheme</button>
      <Theme theme={theme} >
        <div className="innerDiv">
          innner content with new theme
        </div>
      </Theme>
    </div>
  );
}

export default MyApp;
