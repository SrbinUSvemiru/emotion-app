import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Header,
  Buttons,
  Hero,
  Showreel,
  Circles,
  Button,
  BackButton,
  HeadingParagraph,
  HeaderRow,
  ArrowButtonsRow,
  AnimatedParagraph,
  Video,
} from "./styled-components";
import { Endtag, Container } from "../../styled-components";
import Lottie from "lottie-react";
import EndtagIcon from "../../Endtag.json";
import CirclesJson from "../../idle.json";
import Beginning from "../../beginning.json";
import { useSpring, useSpringRef, easings, animated } from "react-spring";
import ReactPlayer from "react-player";
import { useBreakpoint } from "../../Hooks/useBreakpoint";


function HeroPage() {
 
  const playerRef = useRef(null);
  const endtagRef = useRef(null);
  const {isXs} = useBreakpoint()

  const [playing, setPlaying] = useState(true);

  const [position, setPosition] = useState(false);

  const [backButtonActive, setBackButtonActive] = useState(false);
  const [showreelData, setShowreelData] = useState("");
  const paragraph = useSpringRef(null);
  const springRef = useSpringRef(null);
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
    from: { y: -600, opacity: 0 },
    to: {
      y: 250,
      opacity: 1,
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
  }, [showreelRef, springRef]);

  const handleSwitch = () => {
    setShowreelData(CirclesJson);
  };

  const toggleFullscreen = () => {
    const playerElement = playerRef.current.wrapper; // Access ReactPlayer DOM node
    if (playerElement) {
      if (!document.fullscreenElement) {
        playerElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
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
  }, [paragraph, position, showreelRef, springRef]);

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
  }, [paragraph, position, showreelRef, springRef]);

  const handleDownButton = () => {
    setShowreelData("");

    springRef.start({
      to: { y: -200, x: -500, opacity: 0 },
      duration: 1500,
    });

    videoRef.start(() => ({
      to: { borderRadius: "0%", y: -400 },
      onRest: () => toggleFullscreen(),
    }));

    setPlaying(false);
  };

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

  useEffect(() => {
    // Event listener for fullscreen changes
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setShowreelData(Beginning);
        springRef.start({
          to: { y: 0, x: 0, opacity: 1 },
          duration: 1500,
        });
        videoRef.start({
          to: { borderRadius: "50%", y: 0, x: 0 },
        });
      }
    };

    
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <Container style={{ overflowY: backButtonActive && isXs ?  "scroll" : "hidden", overflowX: "hidden" }}>
      <BackButton
        style={backButton}
        onClick={handlePositionBack}
        disabled={!backButtonActive}
      >
        Back
      </BackButton>
      <Endtag onClick={() => endtagRef?.current?.goToAndPlay(0, true)}>
        <Lottie animationData={EndtagIcon} loop={false} ref={endtagRef} />
      </Endtag>

      <Header style={x}>
        <HeaderRow>
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
              <ArrowDownwardIcon />
            </Button>
            <Button onClick={handlePosition} disabled={backButtonActive}>
              <ArrowForwardIcon />
            </Button>
          </animated.div>
        </ArrowButtonsRow>
      </Header>
      <Hero>
        <Showreel style={showreel}>
          <Video style={videoStyle}>
            <ReactPlayer
              url="https://res.cloudinary.com/dcnhluzt1/video/upload/v1734293778/Reel_dueogw.mp4"
              playing={playing}
              id="player"
              muted={true}
              loop={true}
              width="140%"
              height="140%"
              controls={true}
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
