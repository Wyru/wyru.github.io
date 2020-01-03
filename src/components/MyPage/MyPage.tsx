import React from "react";
import posed, { PoseGroup } from "react-pose";
import classes from "./MyPage.module.css";

interface IProps {
  open: Boolean;
  urlImage: string;
  onClose: Function;
}

const MyPage: React.FC<IProps> = props => {
  const Page = posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { type: "spring", stiffness: 1000, damping: 15 },
        default: { duration: 400 }
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 150 }
    }
  });

  const Shade = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  });

  const ImageBG = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  });

  return (
    <PoseGroup>
      {props.open && [
        <ImageBG
          key="imageBg"
          className={classes.imageBg}
          style={{ backgroundImage: `url(${props.urlImage})` }}
        />,
        <Shade
          key="shade"
          className={classes.shade}
          onClick={() => {
            props.onClose();
          }}
        />,
        <Page key="modal" className={classes.page} />
      ]}
    </PoseGroup>
  );
};

export default MyPage;
