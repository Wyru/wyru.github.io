import React from "react";
import classes from "./MyButton.module.css";

interface IProps {
  text: string;
  onClick: Function;
}

const MyButton: React.FC<IProps> = props => {
  return (
    <div>
      <button className={classes.pulse} onClick={props.onClick()}>
        {props.text}
      </button>
    </div>
  );
};

export default MyButton;
