import React, { useState } from "react";
import Particles from "react-particles-js";
import classes from "./App.module.css";
import ParallaxComponent from "./components/ParallaxComponent/ParallaxComponent";
import MyButton from "./components/MyButton/MyButton";

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<Array<number>>([0, 0]);

  return (
    <div className={classes.App}>
      <div className={classes.background}></div>
      <div className={classes.bgShadow}></div>
      <div
        className={classes.pageContent}
        onMouseMove={({ clientX: x, clientY: y }) => {
          setMousePosition([x, y]);
        }}
      >
        <Particles
          className={classes.pageParticles}
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
        <div className={classes.home}>
          <div className={classes.bigName}>
            <ParallaxComponent
              children={"Will Saymon"}
              deltaX={1}
              deltaY={1}
              mousePosition={mousePosition}
            />
          </div>
          <div className={classes.quotte}>
            <ParallaxComponent
              children={
                "You can't move others hearts, unless you can move your own."
              }
              deltaX={0.5}
              deltaY={0.5}
              mousePosition={mousePosition}
            />
          </div>
          <div className={classes.menu}>
            <MyButton text={"Start"} onClick={() => {}}></MyButton>
            <MyButton text={"Continue"} onClick={() => {}}></MyButton>
            <MyButton text={"Options"} onClick={() => {}}></MyButton>
            <MyButton text={"About"} onClick={() => {}}></MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
