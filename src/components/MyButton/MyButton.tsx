import React from "react";
import classes from "./MyButton.module.css";

interface IProps {
  text: string;
  width?: number;
  onClick: Function;
}

const MyButton: React.FC<IProps> = props => {
  return (
    <div>
      <button className={classes.pulse} onClick={()=>props.onClick()} style={{width:`calc(${props.width}px + 2em)`}}>
        {props.text}
      </button>
    </div>
  );
};

export default MyButton;
