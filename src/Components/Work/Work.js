import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  GridContainer,
  Card,
  Container,
  Header,
  Button,
  Endtag,
} from "./styled-components";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import EndtagIcon from "../../Endtag.json";

function Work() {
  const [data, setData] = useState();

  useEffect(() => {
    setData({
      columnOne: ["Comp-3_1", "elipse", "Geo"],
      columnTwo: ["Wave_1", "Master_8", "its-pollen-time"],
      columnThree: ["Motion-crno", "Nocna-frajla", "Oko"],
      columnFour: ["Patka", "Reklama-insta", "Swoosh"],
      columnFive: ["one", "Nocna-frajla"],
    });
  }, []);

  if (data)
    return (
      <Container>
        <Header>
          <Endtag>
            <Lottie animationData={EndtagIcon} loop={false} />
          </Endtag>
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
        </Header>
        <GridContainer>
          <Grid container spacing={3}>
            <Grid container spacing={3} flexDirection="column" item sm={2.3}>
              {data.columnOne?.map((card) => (
                <Grid item alignItems="center">
                  <Card>
                    <img src={`${card}.gif`} />
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} flexDirection="column" item sm={2.5}>
              {data.columnTwo?.map((card) => (
                <Grid item alignItems="center">
                  <Card>
                    <img src={`${card}.gif`} />
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} flexDirection="column" item sm={2.3}>
              {data.columnThree?.map((card) => (
                <Grid item alignItems="center">
                  <Card>
                    <img src={`${card}.gif`} />
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} flexDirection="column" item sm={2.5}>
              {data.columnFour?.map((card) => (
                <Grid item alignItems="center">
                  <Card>
                    <img src={`${card}.gif`} />
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} flexDirection="column" item sm={2.3}>
              {data.columnFive?.map((card) => (
                <Grid item alignItems="center">
                  <Card>
                    <img src={`${card}.gif`} />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </GridContainer>
      </Container>
    );
}

export default Work;
