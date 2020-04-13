import React from 'react';
import { IconContext } from "react-icons";
import './IconWithText.css';

function IconWithText(props){

  let { icon, text, size, iconColor, textColor } = props;
  if(!size){
    size = '48px';
  }

  let iconStyle = { 
    verticalAlign: 'middle', 
    width: size, 
    height: size 
  };

  let textStyle = {};

  if(iconColor){
    iconStyle.fill = iconColor;
    iconStyle.stroke = 'black';
    iconStyle.strokeWidth = "3";
  }

  if(textColor){
    textStyle.color = textColor;
  }

  return (
    <IconContext.Provider value={{ style: iconStyle}}>
      <div style={{width: size, height: size}} className="icon-with-text">
        <span style={textStyle} className="center">{text}</span>
        {icon}
      </div>
    </IconContext.Provider>
  )
}

export default IconWithText;