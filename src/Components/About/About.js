import React, {useState, useRef} from "react";
import {
  Header,
  
  Image,
 
} from "./styled-components";
import { Endtag, Container } from "../../styled-components";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import EndtagIcon from "../../Endtag.json";
import { useInView, animated } from "@react-spring/web";
import { useBreakpoint } from "../../Hooks/useBreakpoint";
import { Grid2 as Grid, Typography, Link as MuiLink } from "@mui/material";


const AnimatedGrid = animated(Grid);

function About({ handleEndtagClick }) {

  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  const {isXs, isSm} = useBreakpoint()

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 200,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { rootMargin: "0%", threshold: 0.1, root: containerRef.current }
  );
  const [refSecond, springsSecond] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 200,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { rootMargin: "0%", threshold: 0.1, root: containerRef.current }
  );

  const [refThird, springsThird] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 200,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { rootMargin: "0%", threshold: 0.1, root: containerRef.current }
  );
  
  return (
    <Container ref={containerRef} style={{  overflowx: "hidden", overflowy: "scroll", }}>
      <Endtag onClick={handleEndtagClick}>
        <Lottie animationData={EndtagIcon} loop={false} />
      </Endtag>
      <Header>
        <Link to="/">
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
                        }}} >Home</Typography>
        </Link>
        <Link to="/work">
           <Typography variant="h5" sx={{ marginLeft: '3rem',position: 'relative', '&::after': {
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
      </Header>
      <Grid container spacing={{xs: 10, sm: 17}} sx={{ padding: "2rem" , paddingTop: "10rem", maxWidth: '1100px', margin: '0 auto', background: 'background.default', }}>
      <AnimatedGrid size={12} ref={ref} style={springs} sx={{ display: "flex", justifyContent: "center" }}>
        <Image style={{ opacity: isLoaded ? 1 : 0 }}>
          <img
            alt="profile"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            src="https://res.cloudinary.com/dcnhluzt1/image/upload/v1734294119/profilna-min_kz1gkp.png"
          />
        </Image>
      </AnimatedGrid>
     
        <AnimatedGrid size={12}  ref={refSecond} style={springsSecond} sx={{ display: "flex", justifyContent: "center" }}>
         
            <Typography variant="h4" sx={{ textAlign: "justify", fontSize: isXs ? '2.5rem' : '3rem', }}>
              I help businesses and non-profits in creating a meaningful and
              impactful story in the form of integrated illustration, animation
              and sound design.
            </Typography>
         
        </AnimatedGrid>
        <AnimatedGrid size={12}  ref={refThird} style={springsThird} sx={{ display: isXs || isSm ? "block" : "flex", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ fontSize: isXs ? '2rem' : '2.5rem',
            fontFamily: 'Baskerville'}}>
              I love the quest for the golden thread - fabric that binds the
              emotional value of our message.
        </Typography>
        <Typography variant="h4" sx={{ fontSize:  isXs ? '2rem' : '2.5rem',
          fontFamily: 'Baskerville', marginTop: isSm || isXs ? '2rem' : 0, marginLeft: isSm || isXs ? 0 : '2rem'}}>
              Using shapes, color, sound and movement through multidisciplinary
              linear and latteral thinking to convey a meaningful story.
        </Typography>
         
        </AnimatedGrid>
        <AnimatedGrid size={12}  >
        <MuiLink href="mailto:bdashciric@gmail.com" underline="none" sx={{cursor: 'pointer'}}>
          <Typography sx={{ fontSize: isXs ? '2.5rem' : '3rem',
  fontWeight: 700}}>Say Hello.</Typography>
</MuiLink>
    
        </AnimatedGrid>
      
      <AnimatedGrid size={12} sx={{display: 'flex', justifyContent: 'space-between'}} >
      <Typography variant="subtitle1">bdashciric@gmail.com</Typography>
      <Typography variant="subtitle1">Copyright &#169; bdashciric 2022</Typography>
      </AnimatedGrid>
       
     
      </Grid>
    </Container>
  );
}

export default About;
