import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./CardsDaily.module.css";
import cx from "classnames";

const CardsDaily = props => {
  if (
    !props.data.todayCases ||
    !props.data.todayRecovered ||
    !props.data.todayDeaths
  ) {
    return "Loading..";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.todayCases}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">Today</Typography>
            <Typography variant="body2">Number of new cases today</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.todayRecovered}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">Today</Typography>
            <Typography variant="body2">Number of recoveries today</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.todayDeaths}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">Today</Typography>
            <Typography variant="body2">Number of deaths today</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardsDaily;
