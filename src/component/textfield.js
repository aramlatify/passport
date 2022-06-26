import React from 'react'
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core';

const styles = {
    
    underline: {
      "&:before": {
        borderBottom: "2px solid green"
      },
      "&:hover:not($focused):not($error):before": {
        borderBottom: "2px solid white !important"
      },
      "&:after": {
        borderBottom: "2px solid white"
      },
      "& .MuiFormLabel-root": {
        color: "white" // or black
    },
    disabled: {},
    focused: {},
    error: {}
}
  };
  const MyTextField = props => {
    const { classes, ...rest } = props;
    return (
      <TextField InputProps={{ classes: {underline: classes.underline} }} {...rest} 
      className={classes.underline}
      InputLabelProps={{style: {fontSize: 20}}}/>
    );
  };
  
  export default withStyles(styles)(MyTextField);