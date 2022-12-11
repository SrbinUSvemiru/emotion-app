import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Work,
  About,
  Hero,
  Showreel,
  Endtag,
  Circles,
  Button,
  BackButton,
  Masked,
} from "./styled-components";
import Lottie from "lottie-react";
import EndtagIcon from "../../Endtag.json";
import CirclesJson from "../../idle.json";
import Beginning from "../../beginning.json";
import {
  useSpring,
  useSpringRef,
  useChain,
  config,
  easings,
  animated,
} from "react-spring";

function HeroPage() {
  const headerRef = useRef();
  const [height, setHeight] = useState();
  const [isPaused, setIsPaused] = useState(false);
  const [position, setPosition] = useState(false);
  const [maskedBorder, setMaskedBorder] = useState(false);
  const [backButtonActive, setBackButtonActive] = useState(false);
  const [showreelData, setShowreelData] = useState();

  const springRef = useSpringRef();
  const x = useSpring({
    ref: springRef,
    config: { easing: easings.easeOutCirc },
    delay: 500,
    from: { y: 200, opacity: 0, x: 0 },
    to: {
      y: 0,
      opacity: 1,
    },
  });

  const backButton = useSpring({
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 100,
    duration: 500,
    from: { opacity: 0 },
    to: {
      opacity: position ? 1 : 0,
    },
  });

  const showreelRef = useSpringRef();
  const y = useSpring({
    ref: showreelRef,
    config: { mass: 1, tension: 280, friction: 60 },
    from: { y: -400, scale: "70%", opacity: 0, x: 0 },
    to: {
      y: 0,
      scale: "100%",
      opacity: 1,
      x: 0,
    },
    delay: 1000,
  });

  useEffect(() => {
    setHeight(headerRef.current.clientHeight);
    setShowreelData(Beginning);
    springRef.start();
    showreelRef.start();
  }, []);

  const handleSwitch = () => {
    setShowreelData(CirclesJson);
    console.log("end");
  };

  const handlePosition = useCallback(() => {
    setPosition(!position);
    setBackButtonActive(true);
    showreelRef.start({
      to: { y: -100, x: -900, scale: "100%" },
    });
    springRef.start({
      to: { y: -200, x: -500 },
      duration: 1500,
    });
    paragraph.start();
  }, [position]);

  const handlePositionBack = useCallback(() => {
    setPosition(!position);
    setBackButtonActive(false);
    showreelRef.start({
      to: { y: 0, x: 0, scale: "100%" },
    });
    springRef.start({
      to: { y: 0, x: 0 },
      duration: 1500,
    });
    paragraph.start({
      to: { opacity: 0, scale: "50%", y: 200, x: 300 },
      delay: 0,
    });
  }, [position]);

  const maskStyle = useSpring({
    config: { mass: 1, tension: 280, friction: 60 },
    from: { borderRadius: "50%", scale: "100%" },
    to: {
      borderRadius: maskedBorder ? "0%" : "100%",
      scale: maskedBorder ? "105%" : "100%",
    },
  });

  const paragraph = useSpringRef();
  const z = useSpring({
    ref: paragraph,
    config: { easing: easings.easeInOutBack },
    from: { opacity: 0, scale: "50%", y: 200, x: 300 },
    to: { opacity: 1, scale: "100%", y: 0, x: 0 },
    delay: 100,
    duration: 1000,
  });

  const arrowButtons = useSpring({
    config: { easing: easings.easeInOutBack },
    from: { opacity: 1 },
    to: { opacity: backButtonActive ? 0 : 1 },
  });

  // useChain([springRef, showreelRef], [0.3, 2.2]);

  return (
    <>
      <BackButton
        style={backButton}
        onClick={handlePositionBack}
        disabled={!backButtonActive}
      >
        Back
      </BackButton>
      <Endtag>
        <Lottie animationData={EndtagIcon} loop={false} isPaused={isPaused} />
      </Endtag>
      <Header ref={headerRef} style={x}>
        <div id="row">
          <div className="heading">
            <p id="heading-paragraph">
              Motion designer that loves telling stories
              <br /> through creative movement and sound
            </p>
          </div>
          <div className="right">
            <Link to="/work">
              <Work id="work">Work</Work>
            </Link>
            <About>About</About>
          </div>
        </div>

        <animated.div id="arrow-buttons" style={arrowButtons}>
          <Button
            onClick={() => setMaskedBorder(!maskedBorder)}
            disabled={backButtonActive}
          >
            D
          </Button>
          <Button onClick={handlePosition} disabled={backButtonActive}>
            R
          </Button>
        </animated.div>
      </Header>
      <Hero height={height}>
        <Showreel style={y}>
          <Masked style={maskStyle}>
            <video muted autoPlay loop>
              <source src="vid_0.mp4" type="video/mp4" />
            </video>
          </Masked>
          <Circles>
            <Lottie
              animationData={showreelData}
              id="lottie"
              onLoopComplete={handleSwitch}
            />
          </Circles>
        </Showreel>

        <animated.div className="lorem" style={z}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eligendi non quis exercitationem culpa
            nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab
            temporibus asperiores quasi cupiditate. Voluptatum ducimus
            voluptates voluptas? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eligendi non quis exercitationem culpa nesciunt
            nihil
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eligendi non quis exercitationem culpa
            nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab
            temporibus asperiores quasi cupiditate. Voluptatum ducimus
            voluptates voluptas?
          </p>
        </animated.div>
      </Hero>
    </>
  );
}

export default HeroPage;
