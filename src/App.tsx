import React from "react";
import { useSpring, animated } from "react-spring";
import Particles from "react-particles-js";
import "./App.css";

const App: React.FC = () => {
  const [props, set] = useSpring(() => ({
    xy: [0,0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2
  ];

  return (
    <div className="App">
      <div className="background"></div>
      <div className="bgShadow"></div>
      <div
        className="pageContent"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
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
          <animated.div
            className="bigName"
            // @ts-ignore
            style={{
              transform: props.xy.interpolate(xy => {
                console.log(xy);
                return `translate3d(${xy / 10}px,${xy/ 10}px,0)`;
              })
            }}
          >
            Will Saymon
          </animated.div>
          <div className="quotte">
            "You can't move others hearts, unless you can move your own."
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
