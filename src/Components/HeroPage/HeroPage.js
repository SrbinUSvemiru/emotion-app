import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Buttons,
  Hero,
  Showreel,
  Endtag,
  Circles,
  Button,
  BackButton,
  Masked,
  Container,
  HeadingParagraph,
  HeaderRow,
  ArrowButtonsRow,
  AnimatedParagraph,
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
  const showreel = useSpring({
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
    setShowreelData(Beginning);
    springRef.start();
    showreelRef.start();
  }, []);

  const handleSwitch = () => {
    setShowreelData(CirclesJson);
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

  const handleDownButton = () => {
    setMaskedBorder(!maskedBorder);
    showreelRef.start({
      to: { y: -700 },
    });
    springRef.start({
      to: { y: -400 },
    });
  };

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
    <Container>
      <BackButton
        style={backButton}
        onClick={handlePositionBack}
        disabled={!backButtonActive}
      >
        Back
      </BackButton>

      <Header ref={headerRef} style={x}>
        <HeaderRow>
          <Endtag>
            <Lottie
              animationData={EndtagIcon}
              loop={false}
              isPaused={isPaused}
            />
          </Endtag>
          <HeadingParagraph>
            Motion designer that loves telling stories
            <br /> through creative movement and sound
          </HeadingParagraph>
          <div className="right">
            <Link to="/work">
              <Buttons>Work</Buttons>
            </Link>
            <Link to="/about">
              <Buttons>About</Buttons>
            </Link>
          </div>
        </HeaderRow>

        <ArrowButtonsRow>
          <animated.div id="arrow-buttons" style={arrowButtons}>
            <Button onClick={handleDownButton} disabled={backButtonActive}>
              D
            </Button>
            <Button onClick={handlePosition} disabled={backButtonActive}>
              R
            </Button>
          </animated.div>
        </ArrowButtonsRow>
      </Header>
      <Hero>
        <Showreel style={showreel}>
          <Masked style={maskStyle}>
            <video muted autoPlay loop>
              <source src="Reel.mp4" type="video/mp4" />
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
        <AnimatedParagraph style={z}>
          <p>
            <span>O</span>ne thing that all of us share is our ability to listen
            to and tell them. Life is a stream full of various beautiful ones,
            tiny and large. They hold a pristine power to transform an inspire
            our perspective. They are the strands that connect us all with the
            stars in our eyes and the corners of our smile. The warm light
            inside the simple wooden home amidst the harsh snowy winter.
          </p>
          <p>
            On the brisk breeze that makes us close our eyes for a moment, on
            those hot summer days, Through them we can shape, lighten, give
            purpose, connect, befriend and amaze... And sometimes if we are
            lucky, bring pqople together. We all live them, but if we put our
            heart and mind to it, there is a chance to tell a wonderful story.
          </p>
        </AnimatedParagraph>
      </Hero>
    </Container>
  );
}

export default HeroPage;
