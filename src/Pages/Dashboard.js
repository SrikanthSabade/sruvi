import React, { Component } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import logo from "../media/sruviLogo.png";
import { margin, padding, textAlign } from "@mui/system";

export class Dashboard extends Component {
  render() {
    return (
      //main container
      <Grid container xs={12} display="flex">
        <Grid
          container
          xs={12}
          display="flex"
          height="10vh"
          bgcolor="#192935"
          marginTop="0px"
          wrap="auto"
        >
          <Grid item xs={2}>
            <Typography>HOME</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>SERVICES</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>INSIGHTS</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>ABOUT SRUVI</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>CONTACT</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>REQUEST QUOTE</Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} display="flex"></Grid>
      </Grid>
    );
  }
}

export default Dashboard;
