import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { GridContainer, Card } from "./styled-components";

function Work() {
  const [data, setData] = useState();

  useEffect(() => {
    setData({
      columnOne: [200, 300, 150, 345, 235, 189, 248, 456, 189],
      columnTwo: [245, 435, 134, 123, 182, 294, 345, 150, 235, 456],
      columnThree: [100, 200, 150, 235, 456, 189, 456, 189, 248],
      columnFour: [376, 167, 200, 123, 182, 294, 150, 345, 235],
      columnFive: [100, 200, 150, 400, 235, 189, 248, 134, 123, 182],
    });
  }, []);

  if (data)
    return (
      <>
        <GridContainer>
          <Grid container spacing={3}>
            <Grid container spacing={3} flexDirection="column" item sm={2.4}>
              {data.columnOne?.map((card) => (
                <Grid item>
                  <Card height={card} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} flexDirection="column" item sm={2.4}>
              {data.columnTwo?.map((card) => (
                <Grid item>
                  <Card height={card} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} flexDirection="column" item sm={2.4}>
              {data.columnThree?.map((card) => (
                <Grid item>
                  <Card height={card} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} flexDirection="column" item sm={2.4}>
              {data.columnFour?.map((card) => (
                <Grid item>
                  <Card height={card} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} flexDirection="column" item sm={2.4}>
              {data.columnFive?.map((card) => (
                <Grid item>
                  <Card height={card} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </GridContainer>
      </>
    );
}

export default Work;
