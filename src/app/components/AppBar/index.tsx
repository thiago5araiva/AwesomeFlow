import React from "react";
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";

import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import logo from "../../assets/images/logo-ce.png";

import overrideCSS from "./overrideCSS";
const AppBarComponent = (): JSX.Element => {
  return (
    <AppBar position="absolute" sx={overrideCSS.appbar}>
      <Container>
        <Toolbar variant="dense">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src={logo} alt="logo" loading="lazy" />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" color="inherit">
                Fluxo de Empréstimo
              </Typography>
            </Grid>
            <Grid item xs={1} sx={overrideCSS.app__controls}>
              <ZoomInIcon />
              <ZoomOutIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
