import React from "react";

import { makeStyles } from "@material-ui/core/styles";


import { Grid} from "@material-ui/core";

import Home from "../home/App";

import FrontTable from "../component/mui-table/B";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "0px",
    color: 'white',
      marginTop: '0px',
      paddingLeft:'0px',
      paddingRight:'0px',
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#b5b5b5",
    margin: "3px"
  },
  slide: {
    
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    }
}));

export default function  Main() {
  const classes = useStyles();


  return (
      <container>
    <div className={classes.root} >
      <Grid container spacing={0}>
      
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 10 ,}}>
        <Home/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 10 ,paddingBottom: 40 }}>
        <FrontTable/>
        </Grid>
        
  
        
      </Grid>
    </div>
   
    </container>
  );
}

