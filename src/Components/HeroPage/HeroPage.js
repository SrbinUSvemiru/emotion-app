import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Header,
  Hero,
  Showreel,
  Circles,
  HeadingParagraph,
  HeaderRow,
  ArrowButtonsRow,
  AnimatedParagraph,
  Video,
} from "./styled-components";
import { IconButton, Typography, useTheme, Box } from "@mui/material";
import { Endtag, Container } from "../../styled-components";
import Lottie from "lottie-react";
import EndtagIcon from "../../Endtag.json";
import CirclesJson from "../../idle.json";
import Beginning from "../../beginning.json";
import { useSpring, useSpringRef, easings } from "react-spring";
import {animated} from '@react-spring/web'
import ReactPlayer from "react-player";
import { useBreakpoint } from "../../Hooks/useBreakpoint";


const AnimatedTypography = animated(Typography);

function HeroPage({handleEndtagClick}) {
 
  const playerRef = useRef(null);
  
  const {isXs, isMd, isLg} = useBreakpoint()

  const muiTheme = useTheme()

 

  const [playing, setPlaying] = useState(true);
  const [isMutet, setIsMuted] = useState(true);
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
    const playerElement = playerRef.current.wrapper; 
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
      from: { y: 250, x: 0, scale: "100%" },
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
      to: { opacity: 0, scale: "50%", y: 200,  },
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
    setIsMuted(false);
  };

  const z = useSpring({
    ref: paragraph,
    config: { easing: easings.easeInOutBack },
    from: { opacity: 0, scale: "50%", y: 200,  },
    to: { opacity: 1, scale: "100%", y: -50,  },
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
        setIsMuted(true);
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
     <AnimatedTypography variant="h5"  style={backButton}
      onClick={handlePositionBack}
      disabled={!backButtonActive} sx={{position: 'absolute',
        zIndex: 1,
        right: '8rem',
        top: '3rem', '&::after': {
          width: '0%',
          height: '1px',
          backgroundColor: 'text.primary',
          content: '""',
          position: 'absolute',
          bottom: 0,
          transition: 'all 0.1 ease',
          '-webkit-transition': 'width 0.2s',
          left: '50%',
          transform: 'translate(-50%, 0)',
        },
        '&:hover' :{
          cursor: 'pointer',
          '&::after': {
            width: '100%'
          }
        }}}>Back</AnimatedTypography>
      <Endtag style={x} onClick={handleEndtagClick}>
        <Lottie animationData={EndtagIcon} loop={false}  />
      </Endtag>

      <Header style={x}>
        <HeaderRow>
          <HeadingParagraph>
            <Typography variant={isLg ? "h4" : "h5"}>
            Motion designer that loves telling stories
            <br /> through creative movement and sound
            </Typography>
          </HeadingParagraph>
         <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Link to="/work">
              <Typography variant="h5" sx={{ position: 'relative', '&::after': {
                 width: '0%',
                 height: '1px',
                 backgroundColor: 'text.primary',
                 content: '""',
                 position: 'absolute',
                 bottom: 0,
                 transition: 'all 0.1 ease',
                 '-webkit-transition': 'width 0.2s',
                 left: '50%',
                 transform: 'translate(-50%, 0)',
               },
               '&:hover' :{
                 cursor: 'pointer',
                 '&::after': {
                   width: '100%'
                 }
               }}} >Work</Typography>
            </Link>
            <Link to="/about">
               <Typography variant="h5" sx={{marginLeft: '3rem', position: 'relative', '&::after': {
                  width: '0%',
                  height: '1px',
                  backgroundColor: 'text.primary',
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  transition: 'all 0.1 ease',
                  '-webkit-transition': 'width 0.2s',
                  left: '50%',
                  transform: 'translate(-50%, 0)',
                },
                '&:hover' :{
                  cursor: 'pointer',
                  '&::after': {
                    width: '100%'
                  }
                }}} >About</Typography>
            </Link>
            </Box>
        </HeaderRow>

        <ArrowButtonsRow>
          <animated.div id="arrow-buttons" style={arrowButtons}>
            <IconButton onClick={handleDownButton} disabled={backButtonActive} sx={{color: 'text.primary'}}>
              <ArrowDownwardIcon />
            </IconButton>
            <IconButton onClick={handlePosition} disabled={backButtonActive} sx={{color: 'text.primary'}}>
              <ArrowForwardIcon  />
            </IconButton>
          </animated.div>
        </ArrowButtonsRow>
      </Header>
      <Hero style={{backgroundColor: muiTheme?.palette?.background?.default}}>
      <AnimatedParagraph style={{...z, display: "flex", flexDirection: isXs ? "column" : "row", paddingLeft:  isLg ? "20rem" : isMd ? "5rem" : "0rem"}}>
          <Typography variant="h6">
            <span>O</span>ne thing that all of us share is our ability to listen
            to and tell them. Life is a stream full of various beautiful ones,
            tiny and large. They hold a pristine power to transform an inspire
            our perspective. They are the strands that connect us all with the
            stars in our eyes and the corners of our smile. The warm light
            inside the simple wooden home amidst the harsh snowy winter.
          </Typography>
          <Typography variant="h6" sx={{marginLeft: isXs ? '0rem' : '2rem', marginTop: isXs ? '2rem' : '0rem'}}>
            On the brisk breeze that makes us close our eyes for a moment, on
            those hot summer days, Through them we can shape, lighten, give
            purpose, connect, befriend and amaze... And sometimes if we are
            lucky, bring pqople together. We all live them, but if we put our
            heart and mind to it, there is a chance to tell a wonderful story.
          </Typography>
        </AnimatedParagraph>
        <Showreel style={showreel}>
          <Video style={videoStyle}>
            <ReactPlayer
              url="https://res.cloudinary.com/dcnhluzt1/video/upload/v1734293778/Reel_dueogw.mp4"
              playing={playing}
              id="player"
              muted={isMutet}
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

        
      </Hero>
    </Container>
  );
}

export default HeroPage;
