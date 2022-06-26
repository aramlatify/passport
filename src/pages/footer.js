import React from "react";
import  "../App.css";
import {
  /* the components you used */
  Typography,
  Grid,
  Container
} from "@material-ui/core";
import Scrolfooter from './scwithdata'

/**
 * how you used the components
 */
export default function Demo() {
  return (
    <Container maxWidth={false}  style={{ backgroundColor: "green",position:'sticky',
    paddingRight:'0',
    bottom:'20px',
    paddingLeft:'0',marginLeft:'0',marginRight:'0'}}>
      <Grid container >
        <Grid item xs={12} sm={12} md={12}>
        <Scrolfooter/>
        </Grid>
      
      </Grid>
      <div className="footer">Designed and developed by Eng. Aram Latify - 2022</div>
    </Container>
  );
}
