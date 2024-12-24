import React, { useEffect, useState } from "react";
import { Grid2 as Grid, Box, Typography } from "@mui/material";
import { useInView, animated } from "@react-spring/web";
import {
  Card,
  Header,
  
} from "./styled-components";
import { Endtag, Container } from "../../styled-components";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import EndtagIcon from "../../Endtag.json";
import { getStorageItem, setStorageItem } from "../../Utils/Utils";

const AnimatedGrid = animated(Grid);

function Column({ index, item }) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    { rootMargin: "0%" }
  );

  

  return (
    <AnimatedGrid
      item
      xs={12}
      ref={ref}
      style={springs}
      key={index}
      sx={{
        display: "flex",
        alignItems: "start",
        width: "fit-content",
        
      }}
    >
      <Card>
        <img
          src={item}
          loading="lazy"
          alt={`GIF ${index + 1}`}
          style={{ minWidth: "100%",  }}
        />
      </Card>
    </AnimatedGrid>
  );
}

function Work({handleEndtagClick}) {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    setData({
      gridOne: [
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293738/one_mem3ho.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293736/Patka_jzxmz8.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293732/Geo_ytdlzj.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293721/elipse_umkqks.gif",
      ],
      gridTwo: [
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293729/Swoosh_usyy4i.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293723/Nocna-frajla_e9sw8t.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293726/Reklama-insta_ixhzaz.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293721/Motion-crno_gi5grt.gif",
      ],
      gridThree: [
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293724/Oko_aneuqg.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293721/Its-pollen-time_evgitw.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293727/Wave_1_rjzmjw.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293722/Master_8_esqd4b.gif",
        "https://res.cloudinary.com/dcnhluzt1/image/upload/v1734293720/Comp-3_1_frkydz.gif",
      ],
    });
  }, []);

  return (
    <Container style={{backgroundColor: 'background.default'}}>
      <Endtag onClick={handleEndtagClick}>
        <Lottie animationData={EndtagIcon} loop={false} />
      </Endtag>
      <Header>
        <Link to="/">
          <Typography variant="h5" sx={{marginLeft: '1rem', position: 'relative', '&::after': {
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
  }}}>About</Typography>
          
        </Link>
      </Header>
      <Box sx={{backgroundColor: 'background.default',  marginTop: '5rem',
  padding: '2rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'}}>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Grid
            size={{ sx: 1, md: 4 }}
            container
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {data?.gridOne?.map((card, index) => (
              <Column item={card} index={index} />
            ))}
          </Grid>
          <Grid size={{ sx: 1, md: 4 }} sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }} container spacing={3}>
            {data?.gridTwo?.map((card, index) => (
              <Column item={card} index={index} />
            ))}
          </Grid>
          <Grid size={{ sx: 1, md: 4 }} sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }} container spacing={3}>
            {data?.gridThree?.map((card, index) => (
              <Column item={card} index={index} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Work;
