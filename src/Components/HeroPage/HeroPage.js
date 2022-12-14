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
  Video,
  PlayerContainer,
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
import ReactPlayer from "react-player";
import screenfull from "screenfull";

function HeroPage() {
  const headerRef = useRef();
  const playerRef = useRef();
  const [controls, setControls] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [playerWidth, setPlayerWidth] = useState(1600);
  const [playerHeight, setPlayerHeight] = useState(1600);
  const [isPaused, setIsPaused] = useState(false);
  const [position, setPosition] = useState(false);

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
    from: { y: -600, opacity: 0, x: 0 },
    to: {
      y: 250,

      opacity: 1,
      x: 0,
    },
    delay: 1000,
  });

  const videoRef = useSpringRef();
  const videoStyle = useSpring({
    ref: videoRef,
    config: { mass: 1, tension: 280, friction: 60 },
    from: { borderRadius: "50%", y: 0 },
    to: { borderRadius: "0%", y: -400 },
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
      to: { y: -100, x: -900, scale: "90%" },
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
      to: { y: 250, scale: "100%", x: 0 },
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

  const handleClickFullscreen = () => {
    screenfull.toggle(playerRef.current.wrapper);
  };

  const handleDownButton = () => {
    springRef.start({
      to: { y: -400 },
    });
    videoRef.start();
    setPlaying(false);
    setControls(true);
    setTimeout(() => {
      handleClickFullscreen();
    }, 500);
    console.log(playerRef.current);
  };

  const paragraph = useSpringRef();
  const z = useSpring({
    ref: paragraph,
    config: { easing: easings.easeInOutBack },
    from: { opacity: 0, scale: "50%", y: 200, x: 300 },
    to: { opacity: 1, scale: "100%", y: -50, x: 100 },
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
          <Video style={videoStyle}>
            <ReactPlayer
              url="Reel.mp4"
              playing={playing}
              id="player"
              muted={true}
              loop={true}
              width="100%"
              height="100%"
              ref={playerRef}
            />
          </Video>

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
