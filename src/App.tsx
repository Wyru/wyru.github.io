import React, { useState, useEffect } from "react";
import useWindowDimensions from "./utils/useWindowDimensions";
import Particles from "react-particles-js";
import "./App.css";

const App: React.FC = () => {
  const { height, width } = useWindowDimensions();
  const [mousePosition, setMousePosition] = useState<Array<number>>([0, 0]);

  const calc = (totalDeltaX: number, totalDeltaY: number) => {
    const halfx = width / 2;
    let xPos = mousePosition[0];
    let xProgress;
    if (xPos > halfx) {
      xPos -= halfx;
      xProgress = xPos / halfx;
    } else {
      xProgress = -1 + xPos / halfx;
    }
    const deltaX = totalDeltaX * xProgress;

    const halfy = height / 2;
    let yPos = mousePosition[1];
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

  return (
    <div className="App">
      <div className="background"></div>
      <div className="bgShadow"></div>
      <div
        className="pageContent"
        onMouseMove={({ clientX: x, clientY: y }) => {
          setMousePosition([x, y]);
        }}
      >
        <Particles
          className="pageParticles"
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3
                }
              },
              color: {
                value: "#414352"
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }
          }}
        />
        <div>
          <div className="bigName">
            <div style={{ transform: calc(1, 1) }}>Will Saymon</div>
          </div>
          <div className="quotte">
            <div style={{ transform: calc(0.5, 0.5) }}>
              "You can't move others hearts, unless you can move your own."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
