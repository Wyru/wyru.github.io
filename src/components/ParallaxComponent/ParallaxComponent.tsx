import React from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";

interface IProps {
  readonly deltaX: number;
  readonly deltaY: number;
  readonly mousePosition: Array<number>;
}

const ParallaxComponent: React.FC<IProps> = props => {
  const { height, width } = useWindowDimensions();

  const calc = () => {
    const totalDeltaX = props.deltaX;
    const totalDeltaY = props.deltaY;

    const halfx = width / 2;
    let xPos = props.mousePosition[0];
    let xProgress;
    if (xPos > halfx) {
      xPos -= halfx;
      xProgress = xPos / halfx;
    } else {
      xProgress = -1 + xPos / halfx;
    }
    const deltaX = totalDeltaX * xProgress;

    const halfy = height / 2;
    let yPos = props.mousePosition[1];
    let yProgress;
    if (yPos > halfy) {
      yPos -= halfy;
      yProgress = yPos / halfy;
    } else {
      yProgress = -1 + yPos / halfy;
    }
    const deltaY = totalDeltaY * yProgress;

    return `translate3d(${deltaX}%,${deltaY}%,0)`;
  };

  return <div style={{ transform: calc() }}>{props.children}</div>;
};

export default ParallaxComponent;
